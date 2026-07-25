package com.offerflow.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.offerflow.dto.request.CreateJobApplicationRequest;
import com.offerflow.dto.request.UpdateJobApplicationRequest;
import com.offerflow.dto.response.JobApplicationResponse;
import com.offerflow.entity.JobApplication;
import com.offerflow.entity.JobStatus;
import com.offerflow.entity.User;
import com.offerflow.exception.JobApplicationNotFoundException;
import com.offerflow.mapper.JobApplicationMapper;
import com.offerflow.repository.JobApplicationRepository;
import com.offerflow.service.JobApplicationService;

@Service
public class JobApplicationServiceImpl implements JobApplicationService {

    private final JobApplicationRepository jobApplicationRepository;
    private final JobApplicationMapper jobApplicationMapper;

    public JobApplicationServiceImpl(
            JobApplicationRepository jobApplicationRepository,
            JobApplicationMapper jobApplicationMapper) {

        this.jobApplicationRepository = jobApplicationRepository;
        this.jobApplicationMapper = jobApplicationMapper;
    }

    @Override
    public JobApplicationResponse createJobApplication(
            CreateJobApplicationRequest request,
            User user) {

        JobApplication job = new JobApplication();

        job.setCompany(request.getCompany());
        job.setJobTitle(request.getJobTitle());
        job.setLocation(request.getLocation());
        job.setJobUrl(request.getJobUrl());
        job.setSalary(request.getSalary());
        job.setStatus(request.getStatus());
        job.setApplicationDate(request.getApplicationDate());
        job.setNotes(request.getNotes());
        job.setUser(user);

        JobApplication savedJob =
                jobApplicationRepository.save(job);

        return jobApplicationMapper.toResponse(savedJob);
    }

    @Override
    public Page<JobApplicationResponse> getJobApplications(
            User user,
            int page,
            int size,
            String keyword,
            JobStatus status) {

        PageRequest pageable = PageRequest.of(page, size);

        Page<JobApplication> jobs;

        boolean hasKeyword =
                keyword != null && !keyword.isBlank();

        boolean hasStatus =
                status != null;

        if (!hasKeyword && !hasStatus) {

            jobs = jobApplicationRepository.findByUser(
                    user,
                    pageable);

        } else if (hasKeyword && !hasStatus) {

            jobs =
                    jobApplicationRepository
                            .findByUserAndCompanyContainingIgnoreCaseOrUserAndJobTitleContainingIgnoreCase(
                                    user,
                                    keyword,
                                    user,
                                    keyword,
                                    pageable);

        } else if (!hasKeyword) {

            jobs =
                    jobApplicationRepository
                            .findByUserAndStatus(
                                    user,
                                    status,
                                    pageable);

        } else {

            jobs =
                    jobApplicationRepository
                            .findByUserAndStatusAndCompanyContainingIgnoreCaseOrUserAndStatusAndJobTitleContainingIgnoreCase(
                                    user,
                                    status,
                                    keyword,
                                    user,
                                    status,
                                    keyword,
                                    pageable);
        }

        return jobs.map(jobApplicationMapper::toResponse);
    }

    @Override
    public JobApplicationResponse getJobApplicationById(
            Long id,
            User user) {

        JobApplication job =
                findJobApplication(id, user);

        return jobApplicationMapper.toResponse(job);
    }

    @Override
    public JobApplicationResponse updateJobApplication(
            Long id,
            UpdateJobApplicationRequest request,
            User user) {

        JobApplication job =
                findJobApplication(id, user);

        job.setCompany(request.getCompany());
        job.setJobTitle(request.getJobTitle());
        job.setLocation(request.getLocation());
        job.setJobUrl(request.getJobUrl());
        job.setSalary(request.getSalary());
        job.setStatus(request.getStatus());
        job.setApplicationDate(request.getApplicationDate());
        job.setNotes(request.getNotes());

        JobApplication updatedJob =
                jobApplicationRepository.save(job);

        return jobApplicationMapper.toResponse(updatedJob);
    }

    @Override
    public void deleteJobApplication(
            Long id,
            User user) {

        JobApplication job =
                findJobApplication(id, user);

        jobApplicationRepository.delete(job);
    }

    private JobApplication findJobApplication(
            Long id,
            User user) {

        return jobApplicationRepository
                .findByIdAndUser(id, user)
                .orElseThrow(() ->
                        new JobApplicationNotFoundException(
                                "Job application not found."));
    }
}