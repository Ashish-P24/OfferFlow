package com.offerflow.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;

import com.offerflow.dto.response.MonthlyApplicationResponse;
import com.offerflow.dto.response.AnalyticsResponse;
import com.offerflow.entity.JobStatus;
import com.offerflow.entity.User;
import com.offerflow.repository.JobApplicationRepository;
import com.offerflow.service.AnalyticsService;

@Service
@Transactional
public class AnalyticsServiceImpl
        implements AnalyticsService {

    private final JobApplicationRepository
            jobApplicationRepository;

    public AnalyticsServiceImpl(
            JobApplicationRepository jobApplicationRepository) {

        this.jobApplicationRepository =
                jobApplicationRepository;
    }

    @Override
    public AnalyticsResponse getAnalytics(
            User user) {

        long total =
        jobApplicationRepository.countByUser(
                user);

        long applied =
                jobApplicationRepository
                        .countByUserAndStatus(
                                user,
                                JobStatus.APPLIED);

        long interview =
                jobApplicationRepository
                        .countByUserAndStatus(
                                user,
                                JobStatus.INTERVIEW);

        long offer =
                jobApplicationRepository
                        .countByUserAndStatus(
                                user,
                                JobStatus.OFFER);

        long rejected =
                jobApplicationRepository
                        .countByUserAndStatus(
                                user,
                                JobStatus.REJECTED);

        double interviewRate =
                total == 0
                        ? 0
                        : (interview * 100.0) / total;

        double successRate =
                total == 0
                        ? 0
                        : (offer * 100.0) / total;

        List<Object[]> monthlyData =
        jobApplicationRepository
                .countApplicationsByMonth(
                        user);

        List<MonthlyApplicationResponse>
                monthlyApplications =
                new ArrayList<>();

        for (Object[] row : monthlyData) {

            int month =
                    ((Number) row[0]).intValue();

            long count =
                    ((Number) row[1]).longValue();

            monthlyApplications.add(
                    new MonthlyApplicationResponse(
                        Month.of(month)
                                .name()
                                .substring(0, 1)
                                + Month.of(month)
                                        .name()
                                        .substring(1, 3)
                                        .toLowerCase(),
                            count));
        }
        return new AnalyticsResponse(
        applied,
        interview,
        offer,
        rejected,
        interviewRate,
        successRate,
        monthlyApplications);
    }
}