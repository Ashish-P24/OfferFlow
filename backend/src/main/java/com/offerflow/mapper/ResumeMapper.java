package com.offerflow.mapper;

import org.springframework.stereotype.Component;

import com.offerflow.dto.response.ResumeResponse;
import com.offerflow.entity.Resume;

@Component
public class ResumeMapper {

    public ResumeResponse toResponse(
            Resume resume) {

        ResumeResponse response =
                new ResumeResponse();

        response.setId(resume.getId());
        response.setFileName(resume.getFileName());
        response.setFileType(resume.getFileType());
        response.setFileSize(resume.getFileSize());
        response.setUploadedAt(resume.getUploadedAt());

        return response;
    }
}