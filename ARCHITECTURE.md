# OfferFlow Architecture

## Overview

OfferFlow is a production-oriented full-stack career management platform that helps users manage job applications, interviews, resumes, and career progress.

---

# Tech Stack

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA (Hibernate)
- PostgreSQL
- Maven

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
- Swagger (OpenAPI)
- VS Code

---

# Backend Architecture

```
React Frontend
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
├── controller
├── dto
│   ├── request
│   └── response
├── entity
├── exception
├── mapper
├── repository
├── security
├── service
│   └── impl
└── util
```

---

# Database Design

## User

| Field | Type | Description |
|--------|------|-------------|
| id | Long | Primary Key |
| firstName | String | User's first name |
| lastName | String | User's last name |
| email | String | Unique email |
| password | String | BCrypt hash |
| role | USER / ADMIN | User role |
| createdAt | Timestamp | Created automatically |
| updatedAt | Timestamp | Updated automatically |

---

# Planned Modules

- Authentication
- User Management
- Job Applications
- Interview Tracking
- Dashboard
- Resume Management
- Notifications
- Analytics

---

# API Convention

```
/api/v1/...
```

Examples:

```
POST   /api/v1/auth/register
POST   /api/v1/auth/login

GET    /api/v1/jobs
POST   /api/v1/jobs
PUT    /api/v1/jobs/{id}
DELETE /api/v1/jobs/{id}
```

---

# Development Roadmap

- Sprint 1 — Project Setup
- Sprint 2 — Backend Foundation
- Sprint 3 — Authentication
- Sprint 4 — Job Application Module
- Sprint 5 — Dashboard
- Sprint 6 — Resume & Notifications
- Sprint 7 — Frontend
- Sprint 8 — Deployment & Polish