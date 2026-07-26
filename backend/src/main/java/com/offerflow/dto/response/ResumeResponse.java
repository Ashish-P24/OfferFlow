package com.offerflow.dto.response;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResumeResponse {

    private Long id;

    private String fileName;

    private String fileType;

    private Long fileSize;

    private LocalDateTime uploadedAt;
}