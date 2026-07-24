package com.offerflow.service;

import java.util.List;

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
            int size);

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

    List<JobApplicationResponse> searchJobApplications(
            String company,
            User user);

    List<JobApplicationResponse> filterJobApplications(
            JobStatus status,
            User user);
}