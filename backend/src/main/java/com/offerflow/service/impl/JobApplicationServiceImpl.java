package com.offerflow.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.offerflow.dto.request.CreateJobApplicationRequest;
import com.offerflow.dto.request.UpdateJobApplicationRequest;
import com.offerflow.dto.response.JobApplicationResponse;
import com.offerflow.entity.JobApplication;
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
    public List<JobApplicationResponse> getJobApplications(User user) {

        List<JobApplication> jobs =
                jobApplicationRepository.findByUser(user);

        return jobApplicationMapper.toResponseList(jobs);
    }

    @Override
    public JobApplicationResponse getJobApplicationById(
            Long id,
            User user) {

        JobApplication job = findJobApplication(id, user);

        return jobApplicationMapper.toResponse(job);
    }

    @Override
    public JobApplicationResponse updateJobApplication(
            Long id,
            UpdateJobApplicationRequest request,
            User user) {

        JobApplication job = findJobApplication(id, user);

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

        JobApplication job = findJobApplication(id, user);

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