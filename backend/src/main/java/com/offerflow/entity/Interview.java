package com.offerflow.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Getter
@Setter
@Table(name = "interviews")
public class Interview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String round;

    private LocalDate interviewDate;

    private LocalTime interviewTime;

    @Enumerated(EnumType.STRING)
    private InterviewMode mode;

    @Enumerated(EnumType.STRING)
    private InterviewStatus status;

    private String interviewer;

    private String location;

    @Column(length = 2000)
    private String notes;

    @Column(length = 2000)
    private String feedback;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_application_id")
    private JobApplication jobApplication;
}