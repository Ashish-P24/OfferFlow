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

### Backend

- User Registration
- User Login
- JWT Authentication
- Spring Security Integration
- BCrypt Password Encryption
- Role-Based Authorization
- Protected REST APIs

### Frontend

- Login Screen
- Authentication Context
- Protected Routes
- JWT Storage
- Automatic Login State
- Logout
- Axios JWT Interceptor

---

## Job Application Management

### Backend

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

### Frontend

- Dashboard Layout
- API Integration
- Job Service Layer
- Dashboard Data Fetching

---

## Dashboard

### Backend

- Total Applications
- Applied Count
- Interview Count
- Offer Count
- Rejected Count

### Frontend

- Dashboard Page
- Statistic Cards
- Responsive Layout
- Navbar
- Sidebar

---

## Backend Infrastructure

- Layered Architecture
- RESTful API Design
- PostgreSQL Integration
- Spring Data JPA
- DTO-Based API Design
- Mapper Layer
- Repository Pattern
- Global Exception Handling
- Request Validation
- Swagger Documentation
- CORS Configuration

---

## Frontend Infrastructure

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- React Router
- Axios
- React Context API
- Lucide React
- Responsive Layout Foundation

---

# Planned Features

## Applications Management UI

- Applications Table
- Search
- Filter
- Pagination
- Add Application
- Edit Application
- Delete Confirmation

## Dashboard Enhancements

- Charts
- Activity Timeline
- Recent Applications

## Interview Management

- Interview Scheduling
- Interview Notes
- Feedback Tracking

## Resume Management

- Resume Storage
- Resume Versioning
- Resume Association

## AI Features

- Resume Analysis
- Resume vs Job Matching
- Cover Letter Generation
- Interview Preparation
- Career Insights

## Integrations

- Gmail
- Google Calendar
- LinkedIn

---

# Tech Stack

## Backend

- Java 21
- Spring Boot 3
- Spring Security
- Spring Data JPA
- PostgreSQL
- Maven
- JWT
- Swagger

## Frontend

- React 19
- TypeScript
- Vite 8
- Tailwind CSS v4
- React Router
- Axios
- React Hook Form
- Zod
- Lucide React

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
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── types
│   │   └── assets
│   │
│   └── public
│
├── README.md
├── ARCHITECTURE.md
└── LICENSE
```

---

# Current API

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/auth/register` |
| POST | `/api/v1/auth/login` |

---

## Job Applications

| Method | Endpoint |
|---------|----------|
| POST | `/api/v1/jobs` |
| GET | `/api/v1/jobs` |
| GET | `/api/v1/jobs/{id}` |
| PUT | `/api/v1/jobs/{id}` |
| DELETE | `/api/v1/jobs/{id}` |
| GET | `/api/v1/jobs/search?keyword=` |
| GET | `/api/v1/jobs/filter?status=` |

---

## Dashboard

| Method | Endpoint |
|---------|----------|
| GET | `/api/v1/dashboard` |

---

## Utility

| Method | Endpoint |
|---------|----------|
| GET | `/api/v1/health` |
| GET | `/api/v1/test` |

---

# Development Roadmap

| Sprint | Status |
|---------|--------|
| Sprint 1 – Project Setup | Completed |
| Sprint 2 – Backend Foundation | Completed |
| Sprint 3 – Authentication | Completed |
| Sprint 4 – Job Application Module | Completed |
| Sprint 5 – Dashboard, Search, Filter & Pagination | Completed |
| Sprint 6 – Frontend Foundation | Completed |
| Sprint 7 – Applications Management UI | In Progress |
| Sprint 8 – Dashboard Analytics & Charts | Planned |
| Sprint 9 – Resume & Interview Management | Planned |
| Sprint 10 – AI Features & Deployment | Planned |

---

# Current Status

## Backend

- JWT Authentication
- Spring Security
- CRUD Operations
- Dashboard API
- Search
- Filtering
- Pagination
- Swagger
- CORS
- PostgreSQL Integration

## Frontend

- React Setup
- Routing
- Authentication
- Protected Routes
- JWT Integration
- Axios
- Dashboard Layout
- Navbar
- Sidebar
- Dashboard Statistics
- Backend Connectivity

---

# License

This project is licensed under the MIT License.

---

## Author

**Ashish Pathak**

B.Tech Computer Science & Engineering  
VIT Vellore