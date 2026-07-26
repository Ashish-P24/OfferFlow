package com.offerflow.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.offerflow.dto.response.ResumeResponse;
import com.offerflow.entity.Resume;
import com.offerflow.entity.User;
import com.offerflow.exception.ResumeNotFoundException;
import com.offerflow.mapper.ResumeMapper;
import com.offerflow.repository.ResumeRepository;
import com.offerflow.service.ResumeService;

@Service
public class ResumeServiceImpl
        implements ResumeService {

private static final Path UPLOAD_DIRECTORY =
        Paths.get("uploads");

        private final ResumeRepository resumeRepository;

        private final ResumeMapper resumeMapper;

        public ResumeServiceImpl(
                ResumeRepository resumeRepository,
                ResumeMapper resumeMapper) {

            this.resumeRepository = resumeRepository;
            this.resumeMapper = resumeMapper;
        }

    @Override
    public ResumeResponse uploadResume(
            MultipartFile file,
            User user) {

        try {

            if (file.isEmpty()) {
                throw new RuntimeException(
                        "Please select a file.");
            }

            if (!"application/pdf".equals(
                    file.getContentType())) {

                throw new RuntimeException(
                        "Only PDF files are allowed.");
            }

            Files.createDirectories(
                    UPLOAD_DIRECTORY);

            Resume resume =
                    resumeRepository
                            .findByUser(user)
                            .orElse(new Resume());

            if (resume.getFilePath() != null) {

                Files.deleteIfExists(
                        Paths.get(
                                resume.getFilePath()));
            }

            String fileName =
                    user.getId() + "_resume.pdf";

            Path filePath =
                    UPLOAD_DIRECTORY.resolve(
                            fileName);

            Files.copy(
                    file.getInputStream(),
                    filePath,
                    StandardCopyOption.REPLACE_EXISTING);

            resume.setFileName(
                    file.getOriginalFilename());

            resume.setFileType(
                    file.getContentType());

            resume.setFileSize(
                    file.getSize());

            resume.setFilePath(
                    filePath.toString());

            resume.setUploadedAt(
                    LocalDateTime.now());

            resume.setUser(user);

            Resume savedResume =
                    resumeRepository.save(
                            resume);

            return resumeMapper.toResponse(
                    savedResume);

        } catch (IOException e) {

            throw new RuntimeException(
                    "Failed to upload resume.",
                    e);
        }
    }

    @Override
    public ResumeResponse getResume(
            User user) {

        Resume resume =
                findResume(user);

        return resumeMapper.toResponse(
                resume);
    }

    @Override
    public Resource downloadResume(
            User user) {

        Resume resume =
                findResume(user);

        try {

            Path path =
                    Paths.get(
                            resume.getFilePath());

            Resource resource =
                    new UrlResource(
                            path.toUri());

            if (!resource.exists()) {

                throw new ResumeNotFoundException(
                        "Resume file not found.");
            }

            return resource;

        } catch (IOException e) {

            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteResume(
            User user) {

        Resume resume =
                findResume(user);

        try {

            Files.deleteIfExists(
                    Paths.get(
                            resume.getFilePath()));

        } catch (IOException e) {

            throw new RuntimeException(e);
        }

        resumeRepository.delete(resume);
    }

    private Resume findResume(
        User user) {

    return resumeRepository
            .findByUser(user)
            .orElseThrow(() ->
                    new ResumeNotFoundException(
                            "Resume not found."));
}
}