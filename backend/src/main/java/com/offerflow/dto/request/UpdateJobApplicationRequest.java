package com.offerflow.dto.request;

import java.time.LocalDate;

import com.offerflow.entity.JobStatus;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UpdateJobApplicationRequest {

    @NotBlank
    @Size(max = 100)
    private String company;

    @NotBlank
    @Size(max = 100)
    private String jobTitle;

    @Size(max = 100)
    private String location;

    @Size(max = 500)
    private String jobUrl;

    @Size(max = 50)
    private String salary;

    private JobStatus status;

    private LocalDate applicationDate;

    private String notes;

    public UpdateJobApplicationRequest() {
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getJobUrl() {
        return jobUrl;
    }

    public void setJobUrl(String jobUrl) {
        this.jobUrl = jobUrl;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    public JobStatus getStatus() {
        return status;
    }

    public void setStatus(JobStatus status) {
        this.status = status;
    }

    public LocalDate getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(LocalDate applicationDate) {
        this.applicationDate = applicationDate;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}