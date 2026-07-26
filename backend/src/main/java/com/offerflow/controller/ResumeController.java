package com.offerflow.controller;

import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.offerflow.dto.response.ResumeResponse;
import com.offerflow.entity.User;
import com.offerflow.service.ResumeService;

@RestController
@RequestMapping("/api/v1/resume")
public class ResumeController {

    private final ResumeService resumeService;

    public ResumeController(
            ResumeService resumeService) {

        this.resumeService = resumeService;
    }

    @PostMapping(
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResumeResponse uploadResume(
            @RequestParam("file")
            MultipartFile file,
            @AuthenticationPrincipal User user) {

        return resumeService.uploadResume(
                file,
                user);
    }

    @GetMapping
    public ResumeResponse getResume(
            @AuthenticationPrincipal User user) {

        return resumeService.getResume(user);
    }

    @GetMapping(
            value = "/download",
            produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<Resource> downloadResume(
            @AuthenticationPrincipal User user) {

        Resource resource =
                resumeService.downloadResume(user);

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_PDF)
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=\"" +
                                resource.getFilename() +
                                "\"")
                .body(resource);
    }

    @DeleteMapping
    public void deleteResume(
            @AuthenticationPrincipal User user) {

        resumeService.deleteResume(user);
    }
}