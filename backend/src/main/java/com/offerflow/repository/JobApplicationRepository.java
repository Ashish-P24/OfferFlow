package com.offerflow.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.offerflow.entity.JobApplication;
import com.offerflow.entity.User;

public interface JobApplicationRepository
        extends JpaRepository<JobApplication, Long> {

    List<JobApplication> findByUser(User user);

    Optional<JobApplication> findByIdAndUser(
            Long id,
            User user);
}