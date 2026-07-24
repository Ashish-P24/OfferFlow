package com.offerflow.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.offerflow.entity.JobApplication;
import com.offerflow.entity.JobStatus;
import com.offerflow.entity.User;
import com.offerflow.entity.JobStatus;

public interface JobApplicationRepository
        extends JpaRepository<JobApplication, Long> {

    Page<JobApplication> findByUser(
        User user,
        Pageable pageable);

    Optional<JobApplication> findByIdAndUser(
            Long id,
            User user);


        long countByUser(User user);
        long countByUserAndStatus(User user, JobStatus status);

        List<JobApplication> findByUserAndCompanyContainingIgnoreCaseOrUserAndJobTitleContainingIgnoreCase(
        User user,
        String company,
        User sameUser,
        String jobTitle);

        List<JobApplication> findByUserAndStatus(
        User user,
        JobStatus status);
}