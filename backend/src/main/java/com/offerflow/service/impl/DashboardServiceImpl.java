package com.offerflow.service.impl;

import org.springframework.stereotype.Service;

import com.offerflow.dto.response.DashboardResponse;
import com.offerflow.entity.JobStatus;
import com.offerflow.entity.User;
import com.offerflow.repository.JobApplicationRepository;
import com.offerflow.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService {

    private final JobApplicationRepository jobApplicationRepository;

    public DashboardServiceImpl(
            JobApplicationRepository jobApplicationRepository) {

        this.jobApplicationRepository = jobApplicationRepository;
    }

    @Override
    public DashboardResponse getDashboard(User user) {

        long total = jobApplicationRepository.countByUser(user);

        long applied = jobApplicationRepository.countByUserAndStatus(
                user, JobStatus.APPLIED);

        long interview = jobApplicationRepository.countByUserAndStatus(
                user, JobStatus.INTERVIEW);

        long offer = jobApplicationRepository.countByUserAndStatus(
                user, JobStatus.OFFER);

        long rejected = jobApplicationRepository.countByUserAndStatus(
                user, JobStatus.REJECTED);

        return new DashboardResponse(
                total,
                applied,
                interview,
                offer,
                rejected);
    }
}