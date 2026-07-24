# OfferFlow Architecture

## Overview

OfferFlow is a production-oriented full-stack career management platform built using a layered architecture that emphasizes scalability, maintainability, and clean separation of concerns.

The backend is developed with Spring Boot and follows industry-standard software engineering principles, including DTO-based communication, service-oriented business logic, repository abstraction, JWT authentication, pagination, dashboard analytics, and PostgreSQL persistence.

---

# Technology Stack

## Backend

- Java 21
- Spring Boot 3
- Spring Security
- Spring Data JPA (Hibernate)
- PostgreSQL
- Maven
- JWT (JJWT)
- Swagger / OpenAPI

## Frontend *(Upcoming)*

- React
- TypeScript
- Vite
- Tailwind CSS

## Tools

- Git
- GitHub
- PostgreSQL
- pgAdmin
- IntelliJ IDEA
- VS Code

---

# High-Level Architecture

```
                    React Frontend
                           │
                           ▼
                    REST API (Spring Boot)
                           │
                           ▼
                  Spring Security Filter
                           │
                           ▼
                    JWT Authentication
                           │
                           ▼
                     REST Controllers
                           │
                           ▼
                     Service Layer
                           │
                           ▼
                       Mapper Layer
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
│   ├── AuthController
│   ├── DashboardController
│   ├── HealthController
│   ├── JobApplicationController
│   └── TestController
│
├── dto
│   ├── request
│   └── response
│
├── entity
│
├── exception
│
├── mapper
│
├── repository
│
├── security
│
├── service
│   └── impl
│
├── util
│
└── OfferFlowApplication
```

---

# Database Design

## User

| Field | Type | Description |
|--------|------|-------------|
| id | Long | Primary Key |
| firstName | String | User First Name |
| lastName | String | User Last Name |
| email | String | Unique Email Address |
| password | String | BCrypt Password Hash |
| role | USER / ADMIN | User Role |
| createdAt | Timestamp | Automatically Generated |
| updatedAt | Timestamp | Automatically Updated |

---

## JobApplication

| Field | Type | Description |
|--------|------|-------------|
| id | Long | Primary Key |
| company | String | Company Name |
| jobTitle | String | Position Applied For |
| location | String | Job Location |
| jobUrl | String | Original Job Posting |
| salary | String | Offered Salary |
| status | JobStatus | Current Application Status |
| applicationDate | LocalDate | Date Applied |
| notes | String | Personal Notes |
| createdAt | Timestamp | Automatically Generated |
| updatedAt | Timestamp | Automatically Updated |
| user | User | Owner |

---

# Entity Relationship

```
              User
               │
               │ 1
               │
               │
               ▼
      JobApplication
            *
```

One authenticated user owns multiple job applications, while every job application belongs to exactly one user.

---

# Authentication Flow

## Registration

```
Client

↓

POST /api/v1/auth/register

↓

AuthController

↓

UserService

↓

BCrypt Password Encoding

↓

UserRepository

↓

PostgreSQL
```

---

## Login

```
Client

↓

POST /api/v1/auth/login

↓

AuthController

↓

AuthenticationManager

↓

CustomUserDetailsService

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

## Protected Request

```
Client

↓

Authorization: Bearer <JWT>

↓

JwtAuthenticationFilter

↓

JwtService

↓

Spring Security Context

↓

Protected Controller
```

---

# Job Application Flow

```
Client

↓

JWT Authentication

↓

JobApplicationController

↓

JobApplicationService

↓

JobApplicationRepository

↓

PostgreSQL

↓

JobApplicationMapper

↓

JobApplicationResponse
```

---

# Dashboard Flow

```
Client

↓

GET /api/v1/dashboard

↓

DashboardController

↓

DashboardService

↓

JobApplicationRepository

↓

DashboardResponse
```

The dashboard calculates:

- Total Applications
- Applied
- Interview
- Offer
- Rejected

---

# Search Flow

```
Client

↓

GET /jobs/search?keyword=

↓

Controller

↓

Repository

↓

Search Company

OR

Search Job Title

↓

Results
```

---

# Filter Flow

```
Client

↓

GET /jobs/filter?status=

↓

Controller

↓

Repository

↓

Filter By JobStatus

↓

Results
```

---

# Pagination Flow

```
Client

↓

GET /jobs?page=&size=

↓

Controller

↓

Service

↓

PageRequest

↓

Repository

↓

PostgreSQL

↓

Page<JobApplicationResponse>
```

---

# Layer Responsibilities

## Controller Layer

Responsible for:

- HTTP Requests
- Request Validation
- API Responses
- Delegating Business Logic

---

## Service Layer

Responsible for:

- Business Logic
- CRUD Operations
- Dashboard Analytics
- Search
- Filtering
- Pagination
- Ownership Validation

---

## Repository Layer

Responsible for:

- CRUD Operations
- Custom Queries
- Dashboard Counts
- Search Queries
- Pagination
- Database Access

---

## Mapper Layer

Responsible for:

- Entity → DTO Conversion
- DTO → Entity Mapping
- Keeping Database Models Independent of API Models

---

## Security Layer

Responsible for:

- JWT Validation
- Authentication
- Authorization
- Stateless Sessions
- Protected Endpoints

---

# Security Design

## Authentication

- JWT Authentication
- BCrypt Password Hashing
- Stateless Sessions
- Spring Security Filter Chain

---

## Authorization

Each JobApplication belongs to exactly one authenticated user.

Ownership is enforced through repository methods:

```java
findByIdAndUser(Long id, User user)

findByUser(User user, Pageable pageable)

findByUserAndStatus(User user, JobStatus status)
```

This prevents users from viewing or modifying another user's applications.

---

# API Convention

All APIs follow versioning:

```
/api/v1/...
```

## Authentication

```
POST /api/v1/auth/register
POST /api/v1/auth/login
```

---

## Job Applications

```
POST   /api/v1/jobs
GET    /api/v1/jobs
GET    /api/v1/jobs/{id}
PUT    /api/v1/jobs/{id}
DELETE /api/v1/jobs/{id}

GET    /api/v1/jobs/search?keyword=
GET    /api/v1/jobs/filter?status=
```

---

## Dashboard

```
GET /api/v1/dashboard
```

---

## Utility

```
GET /api/v1/health
GET /api/v1/test
```

---

# Current Modules

## Completed

### Authentication

- User Registration
- User Login
- JWT Authentication
- Spring Security
- Role-Based Authorization

### Job Application Module

- Create
- Read
- Update
- Delete
- Search
- Filtering
- Pagination
- Ownership Enforcement

### Dashboard Module

- Total Applications
- Applied Count
- Interview Count
- Offer Count
- Rejected Count

### Backend Infrastructure

- DTO Layer
- Mapper Layer
- Repository Pattern
- Request Validation
- Global Exception Handling
- Swagger Documentation
- PostgreSQL Integration

---

## Planned

### React Frontend

- Login
- Registration
- Dashboard
- Job Management

### Interview Management

- Interview Tracking
- Scheduling
- Notes

### Resume Management

- Resume Upload
- Resume Versioning

### AI Features

- Resume Analysis
- Resume Matching
- Interview Preparation

### Integrations

- Gmail
- Google Calendar
- LinkedIn

### Deployment

- Docker
- CI/CD
- Cloud Deployment

---

# Development Roadmap

## Sprint 1

Project Planning

**Status:** Completed

---

## Sprint 2

Backend Foundation

- Spring Boot
- PostgreSQL
- Initial Architecture

**Status:** Completed

---

## Sprint 3

Authentication

- JWT
- Spring Security
- Registration
- Login
- Swagger

**Status:** Completed

---

## Sprint 4

Job Application Module

- Entity
- Repository
- DTOs
- Mapper
- Service
- Controller
- CRUD
- Ownership Validation

**Status:** Completed

---

## Sprint 5

Dashboard & Analytics

- Dashboard Statistics
- Search
- Filtering
- Pagination

**Status:** Completed

---

## Sprint 6

React Frontend

**Status:** Next

---

## Sprint 7

Interview & Resume Management

**Status:** Planned

---

## Sprint 8

AI Features & Integrations

**Status:** Planned

---

## Sprint 9

Deployment & Production Readiness

**Status:** Planned