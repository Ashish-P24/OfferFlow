package com.offerflow.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.offerflow.entity.Resume;
import com.offerflow.entity.User;

public interface ResumeRepository
        extends JpaRepository<Resume, Long> {

    Optional<Resume> findByUser(User user);

    boolean existsByUser(User user);
}