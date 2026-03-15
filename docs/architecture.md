# Play Store MERN Architecture

## 1. Goal

The project implements a full-stack Play Store system with two roles:

- `user`: browse, search, filter, review, download, receive notifications, and access profile details
- `owner`: create and manage apps, control visibility, review downloads and comments, receive download notifications, and announce updates

## 2. Current High-Level Flow

1. The React frontend loads and checks for a JWT token in local storage.
2. If a token exists, the frontend calls `GET /api/auth/me` to restore the session.
3. The frontend sends API requests through Axios.
4. Formik manages frontend form state and Yup validates client-side input before submission.
5. Express routes apply validation and authentication middleware.
6. Controllers delegate logic to service modules.
7. Services coordinate Mongoose models and business rules.
8. MongoDB stores users, categories, applications, reviews, downloads, and notifications.

## 3. Runtime Request Flow

### App search flow

1. User opens `App Listing` page.
2. Frontend calls `GET /api/apps/search?search=whats&category=games&rating=4` when filters are applied.
3. Backend validates query parameters.
4. Controller forwards request to `applicationService.listApplications`.
5. Service filters `applications` and populates related `category` and `owner` data.
6. API returns matching application cards.
7. React renders results without full page reload.

### Logout flow

1. Authenticated user clicks `Logout` in the navbar.
2. Frontend calls `POST /api/auth/logout`.
3. Frontend clears JWT from local storage.
4. User is redirected to the home page.

### Owner update notification flow

1. Owner opens dashboard and announces an app update.
2. Frontend calls `POST /api/apps/:id/announce-update`.
3. Backend updates app version and release date.
4. Notification service creates notifications for subscribed users.
5. Users see the announcement in `Notifications`.

## 4. Backend Architecture

### Main folders

- `config/`: environment and database setup
- `models/`: Mongoose schemas
- `controllers/`: HTTP request/response layer
- `routes/`: route definitions
- `services/`: business logic
- `middlewares/`: auth, role, validation, and errors
- `validators/`: Joi schemas
- `utils/`: JWT helpers, serializers, constants, error helpers
- `tests/`: API integration tests

### Important backend modules

- `authService`: register, login, logout, current profile
- `applicationService`: listing, search, details, CRUD, visibility, dashboard, announcements
- `reviewService`: create, list, delete reviews
- `downloadService`: create downloads and owner download listing
- `notificationService`: create and read notifications
- `categoryService`: upserts default categories and returns active categories

### Runtime improvements added

- `/` returns backend status information
- `/api` returns API root information
- `/api/health` returns health confirmation
- MongoDB connection logs are printed on startup
- backend API tests fall back to a local test database if the in-memory server cannot start

## 5. Frontend Architecture

### Main folders

- `components/`: cards, forms, layout shell, review list, notifications UI
- `pages/`: route pages
- `services/`: Axios-based API modules
- `contexts/`: auth session state
- `hooks/`: `useAuth`
- `routes/`: route map and protected route wrapper
- `styles/`: theme and global styles
- `utils/`: token storage and formatting helpers

### Current page flow

- `Home`: featured apps and public app discovery
- `AppListing`: search, category filter, rating filter
- `AppDetails`: app metadata, reviews, download action, owner update notice
- `Login` and `Register`: authentication flow with Formik + Yup validation
- `UserProfile`: profile details and quick navigation
- `Notifications`: user or owner notifications
- `OwnerDashboard`: metrics, app management, reviews, downloads, announcements
- `AddApp` and `EditApp`: owner app forms using Formik + Yup validation

## 6. Database Relationships

- one owner uploads many applications
- one user writes many reviews
- one application receives many reviews
- one application receives many downloads
- one user receives many notifications
- one user subscribes to many apps for update notifications

## 7. Security Design

- JWT authentication
- hashed passwords with `bcryptjs`
- route protection using `authenticate`
- role checks using `authorizeRoles`
- request validation using Joi
- centralized error handling middleware
- frontend protected routes for profile, notifications, and owner pages
- frontend client-side validation using Formik + Yup

## 8. Testing Design

- backend API tests with Jest and Supertest
- frontend component and service tests with Jest and React Testing Library
- frontend browser smoke tests with Playwright
- frontend CRA production build verification

## 9. Submission-Ready Notes

This project currently runs with:

- backend development server via `nodemon`
- frontend development server via `react-scripts start`
- MongoDB local instance
- 4 seeded accounts
- 12 seeded applications
- passing seed, API, component, service, E2E, and build verification
