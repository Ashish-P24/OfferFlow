package com.offerflow.dto.response;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DashboardResumeResponse {

    private boolean uploaded;

    private String fileName;

    private LocalDateTime uploadedAt;
}