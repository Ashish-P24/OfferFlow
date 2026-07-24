# OfferFlow

OfferFlow is a production-oriented full-stack career management platform designed to help students and professionals manage every stage of their job search from a single application.

The project is being developed using modern software engineering practices, including layered architecture, RESTful APIs, JWT authentication, clean separation of concerns, and sprint-based development.

---

# Project Goals

- Build a production-quality full-stack application
- Apply clean architecture and backend design principles
- Develop features incrementally using sprint-based development
- Demonstrate industry-standard software engineering practices
- Create a portfolio-ready project suitable for technical interviews

---

# Implemented Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Spring Security Integration
- BCrypt Password Encryption
- Role-Based Authorization
- Protected REST APIs

## Job Application Management

- Create Job Applications
- View All Job Applications
- View Job Application by ID
- Update Job Applications
- Delete Job Applications
- Search by Company
- Search by Job Title
- Filter by Job Status
- Pagination Support
- User-specific Data Isolation
- Job Status Tracking

## Dashboard & Analytics

- Total Applications
- Applied Applications Count
- Interview Applications Count
- Offer Count
- Rejected Applications Count

## Backend Infrastructure

- Layered Architecture
- RESTful API Design
- PostgreSQL Integration
- Spring Data JPA (Hibernate)
- DTO-Based API Design
- Mapper Layer
- Repository Pattern
- Global Exception Handling
- Request Validation
- Swagger / OpenAPI Documentation

---

# Planned Features

## React Frontend

- User Authentication Pages
- Dashboard
- Job Management Interface
- Responsive Design

## Interview Management

- Interview Scheduling
- Interview Notes
- Feedback Tracking

## Resume Management

- Resume Storage
- Resume Versioning
- Resume Association with Applications

## Integrations

- Gmail Integration
- Google Calendar Integration
- LinkedIn Integration

## AI Features

- Resume Analysis
- Resume vs Job Matching
- Cover Letter Generation
- Interview Preparation
- Personalized Career Insights

---

# Tech Stack

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

## Development Tools

- Git
- GitHub
- PostgreSQL
- pgAdmin
- IntelliJ IDEA
- VS Code

---

# Architecture

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
                  Controllers
                       │
                       ▼
                    Services
                       │
                       ▼
                     Mappers
                       │
                       ▼
                 Repositories
                       │
                       ▼
                  PostgreSQL
```

---

# Project Structure

```
OfferFlow
│
├── backend
│   └── src
│       └── main
│           └── java
│               └── com.offerflow
│                   ├── config
│                   ├── controller
│                   ├── dto
│                   │   ├── request
│                   │   └── response
│                   ├── entity
│                   ├── exception
│                   ├── mapper
│                   ├── repository
│                   ├── security
│                   ├── service
│                   │   └── impl
│                   ├── util
│                   └── OfferFlowApplication
│
├── frontend (Upcoming)
│
├── README.md
├── ARCHITECTURE.md
└── LICENSE
```

---

# Current API

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/auth/register` | Register a new user |
| POST | `/api/v1/auth/login` | Login and receive JWT |

---

## Job Applications

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/v1/jobs` | Create a job application |
| GET | `/api/v1/jobs` | Retrieve paginated job applications |
| GET | `/api/v1/jobs/{id}` | Retrieve a specific job application |
| PUT | `/api/v1/jobs/{id}` | Update a job application |
| DELETE | `/api/v1/jobs/{id}` | Delete a job application |
| GET | `/api/v1/jobs/search?keyword=` | Search by company or job title |
| GET | `/api/v1/jobs/filter?status=` | Filter applications by status |

---

## Dashboard

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/dashboard` | Retrieve application statistics |

---

## Utility

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/health` | Health Check |
| GET | `/api/v1/test` | Protected Test Endpoint |

---

# Development Roadmap

| Sprint | Status |
|---------|--------|
| Sprint 1 – Project Setup | Completed |
| Sprint 2 – Backend Foundation | Completed |
| Sprint 3 – Authentication System | Completed |
| Sprint 4 – Job Application CRUD | Completed |
| Sprint 5 – Dashboard, Search, Filtering & Pagination | Completed |
| Sprint 6 – React Frontend | Next |
| Sprint 7 – Interview Management | Planned |
| Sprint 8 – AI Features & Integrations | Planned |
| Sprint 9 – Deployment & CI/CD | Planned |

---

# Current Status

## Current Version

**Core Backend Complete**

### Completed

- Spring Boot Backend
- PostgreSQL Integration
- JWT Authentication
- Spring Security
- User Registration
- User Login
- Complete Job Application CRUD
- Dashboard Analytics
- Search by Company & Job Title
- Status Filtering
- Pagination
- DTO Layer
- Mapper Layer
- Repository Pattern
- Global Exception Handling
- Request Validation
- Swagger Documentation
- User Ownership Enforcement

### Currently Working On

**Sprint 6 – React Frontend**

---

# Future Enhancements

- Responsive React Frontend
- Dashboard Charts & Visual Analytics
- Interview Scheduling & Tracking
- Resume Management
- Email Notifications
- Gmail Integration
- Google Calendar Integration
- LinkedIn Integration
- AI Resume Analysis
- AI Job Matching
- AI Cover Letter Generation
- AI Interview Preparation
- Docker Support
- CI/CD Pipeline
- Cloud Deployment

---

# License

This project is licensed under the **MIT License**.

---

## Author

**Ashish Pathak**

B.Tech Computer Science & Engineering  
VIT Vellore

---

If you found this project useful or interesting, consider starring the repository.