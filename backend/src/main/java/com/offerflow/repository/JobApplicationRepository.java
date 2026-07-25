package com.offerflow.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.offerflow.entity.JobApplication;
import com.offerflow.entity.JobStatus;
import com.offerflow.entity.User;

public interface JobApplicationRepository
        extends JpaRepository<JobApplication, Long> {

    List<JobApplication> findByUser(User user);

    Page<JobApplication> findByUser(
            User user,
            Pageable pageable);

    Optional<JobApplication> findByIdAndUser(
            Long id,
            User user);

    long countByUser(User user);

    long countByUserAndStatus(
            User user,
            JobStatus status);

    Page<JobApplication> findByUserAndStatus(
            User user,
            JobStatus status,
            Pageable pageable);

    Page<JobApplication> findByUserAndCompanyContainingIgnoreCaseOrUserAndJobTitleContainingIgnoreCase(
            User user,
            String company,
            User sameUser,
            String jobTitle,
            Pageable pageable);

    Page<JobApplication> findByUserAndStatusAndCompanyContainingIgnoreCaseOrUserAndStatusAndJobTitleContainingIgnoreCase(
            User user,
            JobStatus status,
            String company,
            User sameUser,
            JobStatus sameStatus,
            String jobTitle,
            Pageable pageable);
}