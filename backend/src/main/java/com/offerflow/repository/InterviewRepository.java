package com.offerflow.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.offerflow.entity.Interview;
import com.offerflow.entity.JobApplication;
import com.offerflow.entity.User;

public interface InterviewRepository
        extends JpaRepository<Interview, Long> {

    @Query("""
        SELECT i
        FROM Interview i
        JOIN FETCH i.jobApplication
        WHERE i.jobApplication.user = :user
        ORDER BY i.interviewDate ASC,
                i.interviewTime ASC
        """)
    List<Interview> findByJobApplicationUser(
            @Param("user") User user);

    @Query("""
        SELECT i
        FROM Interview i
        JOIN FETCH i.jobApplication
        WHERE i.jobApplication = :jobApplication
        """)
    List<Interview> findByJobApplication(
            @Param("jobApplication") JobApplication jobApplication);

    @Query("""
        SELECT i
        FROM Interview i
        JOIN FETCH i.jobApplication
        WHERE i.id = :id
          AND i.jobApplication = :jobApplication
        """)
    Optional<Interview> findByIdAndJobApplication(
            @Param("id") Long id,
            @Param("jobApplication") JobApplication jobApplication);

    @Query("""
        SELECT i
        FROM Interview i
        JOIN FETCH i.jobApplication
        WHERE i.id = :id
          AND i.jobApplication.user = :user
        """)
    Optional<Interview> findByIdAndJobApplicationUser(
            @Param("id") Long id,
            @Param("user") User user);
}