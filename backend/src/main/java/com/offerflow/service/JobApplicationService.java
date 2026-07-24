package com.offerflow.service;

import java.util.List;

import com.offerflow.dto.request.CreateJobApplicationRequest;
import com.offerflow.dto.response.JobApplicationResponse;
import com.offerflow.dto.request.UpdateJobApplicationRequest;
import com.offerflow.entity.User;

public interface JobApplicationService {

    JobApplicationResponse createJobApplication(
            CreateJobApplicationRequest request,
            User user);

    List<JobApplicationResponse> getJobApplications(User user);

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