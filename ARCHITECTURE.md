# OfferFlow Architecture

## Overview

OfferFlow is a production-oriented full-stack career management platform that enables users to securely manage their job search from a single application.

The backend follows a layered architecture with Spring Boot, Spring Security, JWT authentication, and PostgreSQL.

---

# Technology Stack

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA (Hibernate)
- PostgreSQL
- Maven
- JWT (JJWT)

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

## Tools

- Git
- GitHub
- PostgreSQL
- pgAdmin
- Swagger / OpenAPI
- VS Code

---

# High-Level Architecture

```
React Frontend
        │
        ▼
REST API
        │
        ▼
Spring Security
        │
        ▼
JWT Authentication Filter
        │
        ▼
REST Controllers
        │
        ▼
Service Layer
        │
        ▼
Repository Layer
        │
        ▼
PostgreSQL
```

---

# Package Structure

```
com.offerflow
│
├── config
│
├── controller
│
├── dto
│   ├── request
│   └── response
│
├── entity
│
├── exception
│
├── repository
│
├── security
│
├── service
│   └── impl
│
└── OfferFlowApplication
```

---

# Current Database Design

## User

| Field | Type | Description |
|--------|------|-------------|
| id | Long | Primary Key |
| firstName | String | User First Name |
| lastName | String | User Last Name |
| email | String | Unique Email Address |
| password | String | BCrypt Password Hash |
| role | USER / ADMIN | Authorization Role |
| createdAt | Timestamp | Created Automatically |
| updatedAt | Timestamp | Updated Automatically |

---

# Authentication Architecture

## Registration Flow

```
Client

↓

POST /api/v1/auth/register

↓

AuthController

↓

UserService

↓

Password Encryption (BCrypt)

↓

UserRepository

↓

PostgreSQL

↓

AuthResponse
```

---

## Login Flow

```
Client

↓

POST /api/v1/auth/login

↓

AuthController

↓

UserService

↓

UserRepository

↓

Password Verification

↓

JwtService

↓

JWT Generation

↓

AuthResponse
```

---

## Authenticated Request Flow

```
Client

↓

Authorization: Bearer <JWT>

↓

JwtAuthenticationFilter

↓

JwtService

↓

CustomUserDetailsService

↓

UserRepository

↓

Spring Security Context

↓

Protected Controller
```

---

# API Convention

All REST APIs follow:

```
/api/v1/...
```

Current endpoints:

```
POST /api/v1/auth/register
POST /api/v1/auth/login

GET /api/v1/health
GET /api/v1/test
```

---

# Current Modules

## Completed

### Authentication

- User Registration
- Login
- JWT Authentication
- Spring Security
- Role-Based Authorization

### Backend Infrastructure

- Exception Handling
- Request Validation
- Swagger Documentation
- PostgreSQL Integration

---

## Upcoming

- Job Application Module
- Dashboard
- Interview Tracking
- Resume Management
- Gmail Integration
- Google Calendar Integration
- LinkedIn Integration
- AI Features

---

# Development Roadmap

## Sprint 1

Project Initialization

**Status:** Completed

---

## Sprint 2

Backend Foundation

**Status:** Completed

---

## Sprint 3

Authentication System

**Status:** Completed

---

## Sprint 4

Job Application Module

**Status:** Next

---

## Sprint 5

Dashboard & Analytics

**Status:** Planned

---

## Sprint 6

Interview & Resume Management

**Status:** Planned

---

## Sprint 7

Frontend Development

**Status:** Planned

---

## Sprint 8

External Integrations & AI

**Status:** Planned

---

## Sprint 9

Deployment & Production Readiness

**Status:** Planned