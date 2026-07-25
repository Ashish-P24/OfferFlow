package com.offerflow.service;

import org.springframework.data.domain.Page;

import com.offerflow.dto.request.CreateJobApplicationRequest;
import com.offerflow.dto.request.UpdateJobApplicationRequest;
import com.offerflow.dto.response.JobApplicationResponse;
import com.offerflow.entity.JobStatus;
import com.offerflow.entity.User;

public interface JobApplicationService {

    JobApplicationResponse createJobApplication(
            CreateJobApplicationRequest request,
            User user);

    Page<JobApplicationResponse> getJobApplications(
            User user,
            int page,
            int size,
            String keyword,
            JobStatus status);

    JobApplicationResponse getJobApplicationById(
            Long id,
            User user);

    JobApplicationResponse updateJobApplication(
            Long id,
            UpdateJobApplicationRequest request,
            User user);

    void deleteJobApplication(
            Long id,
            User user);
}