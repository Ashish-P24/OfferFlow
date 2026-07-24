package com.offerflow.dto.response;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.offerflow.entity.JobStatus;

public class JobApplicationResponse {

    private Long id;

    private String company;

    private String jobTitle;

    private String location;

    private String jobUrl;

    private String salary;

    private JobStatus status;

    private LocalDate applicationDate;

    private String notes;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public JobApplicationResponse(
            Long id,
            String company,
            String jobTitle,
            String location,
            String jobUrl,
            String salary,
            JobStatus status,
            LocalDate applicationDate,
            String notes,
            LocalDateTime createdAt,
            LocalDateTime updatedAt) {

        this.id = id;
        this.company = company;
        this.jobTitle = jobTitle;
        this.location = location;
        this.jobUrl = jobUrl;
        this.salary = salary;
        this.status = status;
        this.applicationDate = applicationDate;
        this.notes = notes;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public String getCompany() {
        return company;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public String getLocation() {
        return location;
    }

    public String getJobUrl() {
        return jobUrl;
    }

    public String getSalary() {
        return salary;
    }

    public JobStatus getStatus() {
        return status;
    }

    public LocalDate getApplicationDate() {
        return applicationDate;
    }

    public String getNotes() {
        return notes;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}