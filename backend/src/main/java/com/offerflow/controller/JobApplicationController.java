package com.offerflow.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.offerflow.dto.request.CreateJobApplicationRequest;
import com.offerflow.dto.response.JobApplicationResponse;
import com.offerflow.entity.User;
import com.offerflow.service.JobApplicationService;
import com.offerflow.dto.request.UpdateJobApplicationRequest;
import org.springframework.web.bind.annotation.DeleteMapping;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/jobs")
public class JobApplicationController {

    private final JobApplicationService jobApplicationService;

    public JobApplicationController(
            JobApplicationService jobApplicationService) {

        this.jobApplicationService = jobApplicationService;
    }

    @PostMapping
    public JobApplicationResponse createJobApplication(
            @Valid @RequestBody CreateJobApplicationRequest request,
            @AuthenticationPrincipal User user) {

        return jobApplicationService.createJobApplication(request, user);
    }
    @GetMapping
    public List<JobApplicationResponse> getJobApplications(
            @AuthenticationPrincipal User user) {

        return jobApplicationService.getJobApplications(user);
    }
    @GetMapping("/{id}")
    public JobApplicationResponse getJobApplicationById(
            @PathVariable Long id,
            @AuthenticationPrincipal User user) {

        return jobApplicationService.getJobApplicationById(id, user);
    }
    @PutMapping("/{id}")
    public JobApplicationResponse updateJobApplication(
            @PathVariable Long id,
            @Valid @RequestBody UpdateJobApplicationRequest request,
            @AuthenticationPrincipal User user) {

        return jobApplicationService.updateJobApplication(
                id,
                request,
                user);
    }
    @DeleteMapping("/{id}")
    public void deleteJobApplication(
            @PathVariable Long id,
            @AuthenticationPrincipal User user) {

        jobApplicationService.deleteJobApplication(id, user);
    }
}