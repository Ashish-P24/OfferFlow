package com.offerflow.exception;

public class InterviewNotFoundException
        extends RuntimeException {

    public InterviewNotFoundException(
            String message) {

        super(message);
    }
}