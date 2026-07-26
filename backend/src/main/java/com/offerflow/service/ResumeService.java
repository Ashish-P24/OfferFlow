package com.offerflow.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.offerflow.dto.response.ResumeResponse;
import com.offerflow.entity.User;

public interface ResumeService {

    ResumeResponse uploadResume(
            MultipartFile file,
            User user);

    ResumeResponse getResume(
            User user);

    Resource downloadResume(
            User user);

    void deleteResume(
            User user);
}