# Architecture

## 1. System Overview

The Play Store project is a full-stack MERN application with a React single page frontend and an Express REST API backend.

The system supports only two roles:

- `user`
- `owner`

Owners can manage applications and can also promote or delete normal users from the owner-only User Management page.

## 2. Runtime Layout

### Frontend

Runs in the browser at:

```text
http://localhost:3000
```

### Backend

Runs at:

```text
http://localhost:5000
```

### Database

MongoDB stores the application data and is accessed through Mongoose.

## 3. Frontend Architecture

The frontend is organized under `frontend/src`.

### components

Reusable UI elements such as:

- app cards
- app filters
- app form
- review form and review list
- notification list
- page hero
- loading and empty states
- app shell

### pages

Current route-level pages:

- `Home`
- `AppListing`
- `AppDetails`
- `Login`
- `Register`
- `UserProfile`
- `Notifications`
- `OwnerDashboard`
- `UserManagement`
- `AddApp`
- `EditApp`

### services

Axios-based API wrappers:

- `authService`
- `appService`
- `categoryService`
- `reviewService`
- `downloadService`
- `notificationService`
- `userService`

### contexts and hooks

- `AuthContext` manages token, profile, login, logout, and register behavior
- `useAuth` provides access to auth state

### routes

- `AppRoutes` defines all pages
- `ProtectedRoute` enforces authentication and role checks

### styles

- global CSS
- MUI theme configuration

## 4. Backend Architecture

The backend is organized under `backend/`.

### config

- database connection
- environment loading

### models

- `User`
- `Category`
- `Application`
- `Review`
- `Download`
- `Notification`

### controllers

Thin request handlers for each route group.

### services

Business logic lives here:

- auth
- categories
- applications
- reviews
- downloads
- notifications
- users

### middlewares

- authentication
- authorization
- validation
- error handling

### validators

Joi schemas for request validation.

### tests

Backend integration tests for the current API flows.

## 5. Data Model

### users

Stores:

- name
- email
- hashed password
- role
- subscribedApps

Valid roles:

- `user`
- `owner`

### categories

Stores category names and slugs for filtering.

### applications

Stores:

- metadata
- owner reference
- category reference
- visibility
- rating summary
- download count
- last announcement text

### reviews

Stores user reviews for applications.

### downloads

Stores download events and subscription linkage.

### notifications

Stores owner download notifications and user update notifications.

## 6. Main Runtime Flow

1. The frontend loads and reads any stored token.
2. The frontend requests `/api/auth/me` to restore the current session.
3. Public pages load app and category data from the backend.
4. Authenticated users can review, download, and receive notifications.
5. Authenticated owners can manage apps and send update announcements.
6. Owners can open User Management to promote a user to owner or delete a normal user account.
7. Role-based checks are enforced by backend middleware using the current database role.

## 7. Owner User Management Flow

### Promotion flow

1. An owner opens `/owner/users`.
2. The frontend loads all users from `GET /api/users`.
3. The owner clicks `Promote to Owner` for a current user.
4. The frontend calls `PUT /api/users/:id/role` with `role: owner`.
5. MongoDB updates that user's role.
6. Future protected backend checks treat that account as owner.
7. Frontend profile refresh on focus or reload picks up the updated role visually.

### Delete flow

1. An owner opens `/owner/users`.
2. The owner clicks `Delete User` for a current user.
3. The frontend confirms the action and calls `DELETE /api/users/:id`.
4. The backend deletes the user account.
5. The backend also removes that user's reviews, downloads, and personal notifications.
6. Affected application review and download counts are recalculated.
7. Owner accounts are blocked from deletion through this panel.

## 8. Authentication and Authorization

### Authentication

- JWT token returned at login or registration
- token stored in local storage
- token attached through Axios request interceptor

### Authorization

- protected backend routes load the user from MongoDB
- owner-only routes verify `req.user.role === 'owner'`
- protected frontend routes use `ProtectedRoute`

## 9. Current Seed Strategy

The current `database/seed.js` is not the earlier manual demo seed. It is a snapshot of the current live MongoDB dataset and restores that exact structure, document ids, and relationships when `npm run seed` is run.

Current snapshot totals:

- 7 categories
- 5 users
- 16 applications
- 16 reviews
- 17 downloads
- 13 notifications

## 10. Testing Architecture

### Backend API tests

- Jest
- Supertest
- local MongoDB fallback on Windows for stability
- `mongodb-memory-server` may be used in other environments when available

### Frontend tests

- React Testing Library
- Jest
- Playwright smoke tests

### Build verification

- CRA production build through `react-scripts build`

## 11. Current Design Direction

The UI uses Material UI with custom gradients, responsive grids, polished app cards, owner dashboard panels, a custom round Play Store logo, and a shared global footer. Public cards avoid redundant visibility chips, while owner dashboard cards keep visibility state visible for management tasks.
