# OfferFlow Architecture

## Overview

OfferFlow is a production-oriented full-stack career management platform built using a layered architecture that emphasizes scalability, maintainability, and clean separation of concerns.

The backend is developed with Spring Boot and follows industry-standard design principles, including DTO-based communication, service-oriented business logic, repository abstraction, JWT authentication, and PostgreSQL persistence.

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
- Swagger / OpenAPI
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
| salary | String | Offered Salary / Package |
| status | JobStatus | Current Application Status |
| applicationDate | LocalDate | Date Applied |
| notes | String | Personal Notes |
| createdAt | Timestamp | Automatically Generated |
| updatedAt | Timestamp | Automatically Updated |
| user | User | Owner of the Application |

---

# Entity Relationships

```
User (1)
   │
   │
   └──────────────< JobApplication (Many)
```

Each authenticated user owns multiple job applications, while each job application belongs to exactly one user.

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

Password Encoding (BCrypt)

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

AuthenticationManager

↓

UserDetailsService

↓

Password Verification

↓

JwtService

↓

JWT Token Generation

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

Spring Security Context

↓

Protected Controller
```

---

# Job Application Request Flow

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

# Layer Responsibilities

## Controller Layer

Responsible for:

- Handling HTTP requests
- Request validation
- Returning API responses
- Delegating business logic to services

---

## Service Layer

Responsible for:

- Business logic
- Ownership validation
- CRUD operations
- Coordination between repositories and mappers

---

## Repository Layer

Responsible for:

- Database interaction
- CRUD operations
- Custom queries
- Data persistence

---

## Mapper Layer

Responsible for:

- Entity → DTO conversion
- DTO → Entity mapping
- Keeping controllers independent of database entities

---

## Security Layer

Responsible for:

- JWT validation
- Authentication
- Authorization
- Stateless security
- Protected endpoints

---

# Security Design

## Authentication

- JWT Authentication
- BCrypt Password Hashing
- Stateless Sessions
- Spring Security Filter Chain

---

## Authorization

Every `JobApplication` belongs to a specific authenticated user.

Ownership is enforced through repository methods:

```java
findByUser(User user)

findByIdAndUser(Long id, User user)
```

This prevents users from accessing or modifying another user's data.

---

# API Convention

All REST APIs follow versioning:

```
/api/v1/...
```

Current Endpoints:

## Authentication

```
POST /api/v1/auth/register
POST /api/v1/auth/login
```

## Job Applications

```
POST   /api/v1/jobs
GET    /api/v1/jobs
GET    /api/v1/jobs/{id}
PUT    /api/v1/jobs/{id}
DELETE /api/v1/jobs/{id}
```

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
- Spring Security Integration
- Role-Based Authorization

### Job Application Module

- Create Job Application
- View All Job Applications
- View Job Application by ID
- Update Job Application
- Delete Job Application
- Ownership Enforcement

### Backend Infrastructure

- DTO Layer
- Mapper Layer
- Request Validation
- Global Exception Handling
- Swagger Documentation
- PostgreSQL Integration

---

## Planned

- Dashboard Analytics
- Search & Filtering
- Pagination
- Interview Management
- Resume Management
- Gmail Integration
- Google Calendar Integration
- LinkedIn Integration
- AI Resume Analysis
- AI Interview Preparation

---

# Development Roadmap

## Sprint 1

Project Initialization

**Status:** ✅ Completed

---

## Sprint 2

Backend Foundation

- Spring Boot Setup
- PostgreSQL Configuration
- Initial Project Structure

**Status:** ✅ Completed

---

## Sprint 3

Authentication System

- User Registration
- Login
- JWT Authentication
- Spring Security
- Swagger Integration

**Status:** ✅ Completed

---

## Sprint 4

Job Application CRUD

- JobApplication Entity
- Repository Layer
- DTOs
- Mapper
- Service Layer
- Controller Layer
- Create
- Read
- Update
- Delete
- Ownership Enforcement

**Status:** ✅ Completed

---

## Sprint 5

Dashboard, Search & Filtering

**Status:** 🚧 Next

---

## Sprint 6

Interview & Resume Management

**Status:** 📅 Planned

---

## Sprint 7

React Frontend

**Status:** 📅 Planned

---

## Sprint 8

AI Features & External Integrations

**Status:** 📅 Planned

---

## Sprint 9

Deployment & Production Readiness

**Status:** 📅 Planned