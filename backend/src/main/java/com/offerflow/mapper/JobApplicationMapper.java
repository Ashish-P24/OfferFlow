package com.offerflow.mapper;

import java.util.List;

import org.springframework.stereotype.Component;

import com.offerflow.dto.response.JobApplicationResponse;
import com.offerflow.entity.JobApplication;

@Component
public class JobApplicationMapper {

    public JobApplicationResponse toResponse(JobApplication job) {

        return new JobApplicationResponse(
                job.getId(),
                job.getCompany(),
                job.getJobTitle(),
                job.getLocation(),
                job.getJobUrl(),
                job.getSalary(),
                job.getStatus(),
                job.getApplicationDate(),
                job.getNotes(),
                job.getCreatedAt(),
                job.getUpdatedAt()
        );
    }

    public List<JobApplicationResponse> toResponseList(
            List<JobApplication> jobs) {

        return jobs.stream()
                .map(this::toResponse)
                .toList();
    }
}