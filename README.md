# OfferFlow

OfferFlow is a production-oriented full-stack career management platform designed to help students and professionals organize every stage of their job search.

The platform enables users to securely manage job applications, interviews, resumes, and career progress from a single application. It is being developed using modern software engineering practices, including layered architecture, RESTful APIs, JWT authentication, and clean separation of concerns.

---

## Project Goals

- Build a production-quality full-stack application
- Apply clean architecture and best software engineering practices
- Develop features incrementally using sprint-based development
- Create a portfolio-ready project demonstrating backend and frontend development

---

## Implemented Features

### Authentication

- User Registration
- User Login
- JWT Authentication
- Spring Security Integration
- BCrypt Password Encryption
- Role-Based Authorization
- Protected REST APIs

### Backend Infrastructure

- Layered Architecture
- RESTful API Design
- PostgreSQL Integration
- Spring Data JPA (Hibernate)
- Global Exception Handling
- Request Validation
- Swagger / OpenAPI Documentation

---

## Planned Features

### Job Management

- Job Application Tracking
- Application Status Management
- Company & Position Details
- Notes & Attachments

### Interview Management

- Interview Scheduling
- Interview Notes
- Feedback Tracking

### Dashboard

- Application Statistics
- Interview Statistics
- Offers & Rejections
- Career Progress Analytics

### Integrations

- Gmail Integration
- Google Calendar Integration
- LinkedIn Integration

### AI Features

- Resume Analysis
- Resume vs Job Matching
- Cover Letter Generation
- Interview Preparation

---

## Tech Stack

### Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA (Hibernate)
- PostgreSQL
- Maven
- JWT (JJWT)
- Swagger / OpenAPI

### Frontend *(Upcoming)*

- React
- TypeScript
- Vite
- Tailwind CSS

### Development Tools

- Git
- GitHub
- PostgreSQL
- pgAdmin
- VS Code

---

## Architecture

```
React Frontend
        │
        ▼
REST API (Spring Boot)
        │
        ▼
Spring Security
        │
        ▼
JWT Authentication
        │
        ▼
Controllers
        │
        ▼
Services
        │
        ▼
Repositories
        │
        ▼
PostgreSQL
```

---

## Project Structure

```
OfferFlow
│
├── backend
│   ├── config
│   ├── controller
│   ├── dto
│   ├── entity
│   ├── exception
│   ├── repository
│   ├── security
│   └── service
│
├── frontend (Upcoming)
│
├── README.md
└── ARCHITECTURE.md
```

---

## Current API

### Public Endpoints

```
POST /api/v1/auth/register
POST /api/v1/auth/login
GET  /api/v1/health
```

### Protected Endpoints

```
GET /api/v1/test
```

---

## Development Roadmap

| Sprint | Status |
|---------|--------|
| Sprint 1 – Project Setup | Completed |
| Sprint 2 – Backend Foundation | Completed |
| Sprint 3 – Authentication System | Completed |
| Sprint 4 – Job Application Module | Next |
| Sprint 5 – Dashboard | Planned |
| Sprint 6 – Interview Management | Planned |
| Sprint 7 – Frontend Development | Planned |
| Sprint 8 – Integrations & AI | Planned |
| Sprint 9 – Deployment & Production Polish | Planned |

---

## Current Status

Current Version: **Authentication Complete**

Completed:

- Spring Boot Backend
- PostgreSQL Integration
- JWT Authentication
- Spring Security
- User Registration & Login
- Swagger Documentation
- Protected REST APIs

Currently working on:

**Sprint 4 – Job Application Module**

---

## License

This project is licensed under the MIT License.