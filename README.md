# Play Store MERN Capstone Project

## 1. Project Overview

This repository contains a submission-ready full-stack MERN Play Store application prepared for capstone evaluation, presentation, viva, and GitHub publication.

Implemented roles:

- `User`: register, login, logout, search apps, browse categories, filter by rating, view app details, review apps, download apps, receive update notifications, and access a profile page.
- `Owner`: register, login, logout, create apps, update apps, delete apps, hide or unhide apps, review download counts, see user comments, receive download notifications, announce updates, and manage apps from a dashboard.

The current project state includes:

- modular Node.js and Express backend
- MongoDB schema aligned to the Play Store capstone brief
- React frontend built with React Scripts and Material UI
- JWT authentication with protected routes
- Formik + Yup client-side validation
- Joi backend validation
- seeded demo data for smooth evaluator execution
- API, component, service, and E2E testing
- modern responsive UI refinement across user and owner flows
- documentation for execution, MongoDB, JWT, Postman, GitHub usage, and thesis preparation

## 2. Problem Statement Alignment

The implemented system satisfies the main Play Store capstone requirements:

- two roles: `User` and `Owner`
- register, login, logout
- app search by name
- category browsing with required categories: `games`, `beauty`, `fashion`, `women`, `health`
- rating filter
- app details with name, description, version, release date, rating, and genre
- reviews and comments
- owner CRUD on apps
- visibility control
- download tracking
- owner and user notifications
- SPA navigation with React Router
- JWT session handling using local storage
- responsive UI
- API, component, service, and E2E testing

Additional seeded demo categories were added for catalog realism:

- `social`
- `technology`

## 3. Technology Stack

### Frontend

- React
- React Router DOM
- Material UI
- Axios
- React Scripts
- Formik
- Yup
- React Testing Library + Jest
- Playwright

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Joi
- JWT
- bcryptjs
- Helmet
- express-mongo-sanitize
- Jest + Supertest

## 4. Final Folder Structure

```text
PlayStore-MERN/
  backend/
    config/
    controllers/
    middlewares/
    models/
    routes/
    services/
    tests/
    utils/
    validators/
    app.js
    server.js
  frontend/
    public/
    src/
      components/
      contexts/
      hooks/
      pages/
      routes/
      services/
      styles/
      utils/
      App.js
      index.js
      setupTests.js
    tests/
  database/
    seed.js
  docs/
    architecture.md
    api-docs.md
    requirement-checklist.md
  README.md
  README_EXECUTION.md
  README_MONGODB.md
  README_POSTMAN.md
  README_JWT.md
  README_GITHUB.md
  README_THESIS.md
  README_HANDOFF_CODEX.md
```

## 5. Current Application Modules

### Backend Modules

- `config`: database and environment configuration
- `models`: `User`, `Application`, `Category`, `Review`, `Download`, `Notification`
- `controllers`: auth, app, category, review, download, notification request handlers
- `services`: business logic for auth, apps, categories, reviews, downloads, notifications
- `middlewares`: authentication, authorization, validation, and error handling
- `validators`: Joi schemas for auth, apps, reviews, and downloads
- `tests`: API integration tests with Mongo memory fallback to local MongoDB test database

### Frontend Modules

- `components`: reusable UI such as app cards, filters, forms, shell, reviews, and notifications
- `pages`: `Home`, `AppListing`, `AppDetails`, `Login`, `Register`, `UserProfile`, `OwnerDashboard`, `AddApp`, `EditApp`, `Notifications`
- `services`: API clients for auth, apps, categories, reviews, downloads, notifications
- `contexts`: auth session state
- `routes`: route configuration and protected route wrapper
- `styles`: global CSS and MUI theme
- `tests`: Jest component and service tests plus Playwright smoke tests

## 6. Database Schema Summary

### users

- `name`
- `email`
- `password`
- `role`
- `subscribedApps`
- timestamps

### categories

- `name`
- `slug`
- `description`
- `isActive`
- timestamps

### applications

- `name`
- `description`
- `version`
- `releaseDate`
- `category`
- `genre`
- `rating`
- `averageRating`
- `reviewCount`
- `visibility`
- `ownerId`
- `iconUrl`
- `featureHighlights`
- `downloadCount`
- `lastAnnouncement`
- timestamps

### reviews

- `userId`
- `appId`
- `rating`
- `comment`
- `timestamp`
- timestamps

### downloads

- `userId`
- `appId`
- `downloadDate`
- timestamps

### notifications

- `recipientId`
- `recipientRole`
- `type`
- `title`
- `message`
- `relatedAppId`
- `isRead`
- `metadata`
- timestamps

## 7. Main API Methods

### Info Routes

- `GET /`
- `GET /api`
- `GET /api/health`

### Authentication

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### Categories

- `GET /api/categories`

### Applications

- `GET /api/apps`
- `GET /api/apps/search`
- `GET /api/apps/:id`
- `POST /api/apps`
- `PUT /api/apps/:id`
- `PATCH /api/apps/:id/visibility`
- `DELETE /api/apps/:id`
- `GET /api/apps/owner/dashboard/summary`
- `POST /api/apps/:id/announce-update`

### Reviews

- `POST /api/reviews`
- `GET /api/reviews/app/:id`
- `DELETE /api/reviews/:id`

### Downloads

- `POST /api/downloads`
- `GET /api/downloads/owner`

### Notifications

- `GET /api/notifications`
- `PATCH /api/notifications/:id/read`
- `PATCH /api/notifications/read-all`

## 8. Functional Flow

1. A user or owner registers or logs in.
2. The backend returns a JWT token.
3. The frontend stores the token in local storage.
4. Protected requests include `Authorization: Bearer <token>`.
5. Users browse apps, search by name, filter by category and rating, open details, review apps, and download them.
6. Owners create and manage apps from the dashboard.
7. Downloads create owner notifications.
8. Owner update announcements create user notifications for subscribed apps.
9. Logout clears the frontend token and calls the backend logout endpoint.

## 9. Seed Data Summary

Current seed setup includes:

- 2 owners
- 2 users
- 7 categories
- 12 applications in total
- 11 public applications visible to end users after seeding
- 1 hidden application for visibility testing
- seeded reviews, downloads, and notifications

Primary demo credentials:

- `owner@playstore.dev / Password123`
- `owner2@playstore.dev / Password123`
- `user@playstore.dev / Password123`
- `user2@playstore.dev / Password123`

## 10. Testing Coverage

- API integration tests: backend auth, app creation, review, download, and notification flow
- Component tests: React UI rendering
- Service tests: frontend auth and app service methods
- E2E smoke tests: public landing and registration navigation flow
- Production build verification: frontend CRA build

## 11. Frontend Validation Design

- Formik manages form state for login, register, owner app form, and review submission
- Yup provides client-side validation schemas for those forms
- Joi remains the backend validation layer for API security and request validation

## 12. Documentation Map

- [README_EXECUTION.md](README_EXECUTION.md): exact setup, environment, run, and verification steps
- [README_MONGODB.md](README_MONGODB.md): MongoDB setup, collections, sample documents, and seeding notes
- [README_POSTMAN.md](README_POSTMAN.md): API request and response guide for manual verification
- [README_JWT.md](README_JWT.md): JWT authentication and protected route usage
- [README_GITHUB.md](README_GITHUB.md): first upload, future updates, and Git rollback guide for VS Code and GitHub
- [README_THESIS.md](README_THESIS.md): full thesis style project report ready to adapt into a final submission document
- [docs/architecture.md](docs/architecture.md): technical architecture and system flow
- [docs/api-docs.md](docs/api-docs.md): endpoint reference
- [docs/requirement-checklist.md](docs/requirement-checklist.md): requirement mapping and verification

## 13. Viva Notes

### Why MERN

- same language across frontend and backend
- fast integration between API and SPA
- flexible MongoDB schema for app catalog data
- strong ecosystem for auth, routing, UI, forms, and testing

### Why JWT

- simple SPA session handling
- stateless backend authentication
- easy route protection on frontend and backend

### Why Formik + Yup

- cleaner frontend form state handling
- reusable validation schemas
- easier explanation for client-side validation during viva
- no backend contract changes required

### Why Service Layer

- cleaner controllers
- reusable business logic
- easier testing and maintenance

## 14. Current Project Status

The current project state is suitable for capstone walkthrough and demonstration with:

- working backend info and health routes
- working user and owner flows
- seeded accounts for quick testing
- modernized frontend layout and branding
- synchronized documentation set
- GitHub upload guide
- thesis style report file for final document preparation

## 15. Future Improvements

- richer dashboard analytics charts
- avatar or image upload support for app icons
- pagination and advanced filters
- stronger notification delivery using email or push
- CI/CD automation and deployment pipeline
