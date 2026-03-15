# API Overview

Base API URL:

```text
http://localhost:5000/api
```

Additional runtime info routes:

- `GET /`
- `GET /api`
- `GET /api/health`

## Authentication Routes

### `POST /api/auth/register`

Purpose: create a new `user` or `owner` account and return JWT + profile.

### `POST /api/auth/login`

Purpose: authenticate an existing account and return JWT + profile.

### `POST /api/auth/logout`

Purpose: complete the logout flow and allow the frontend to clear the stored token.

### `GET /api/auth/me`

Purpose: return the currently authenticated user profile.

## Category Routes

### `GET /api/categories`

Purpose: return active categories for filters and forms.

Current categories include the required capstone categories plus `social` and `technology` for demo breadth.

## Application Routes

### `GET /api/apps`

Purpose: return public application listing.

### `GET /api/apps/search`

Purpose: search by app name and filter by category or minimum rating.

Query params supported:

- `search`
- `category`
- `rating`
- `ownerOnly`

### `GET /api/apps/:id`

Purpose: return a single application detail record.

### `POST /api/apps`

Purpose: owner creates a new app.

### `PUT /api/apps/:id`

Purpose: owner updates app details.

### `PATCH /api/apps/:id/visibility`

Purpose: owner hides or unhides an app.

### `DELETE /api/apps/:id`

Purpose: owner deletes an app.

### `GET /api/apps/owner/dashboard/summary`

Purpose: return owner stats, app list, recent downloads, and recent reviews.

### `POST /api/apps/:id/announce-update`

Purpose: owner updates version and sends notifications to subscribed users.

## Review Routes

### `POST /api/reviews`

Purpose: authenticated user adds one review per app.

### `GET /api/reviews/app/:id`

Purpose: return all reviews for an application.

### `DELETE /api/reviews/:id`

Purpose: authenticated user deletes their own review.

## Download Routes

### `POST /api/downloads`

Purpose: authenticated user downloads an app, increments download count, and triggers owner notification.

### `GET /api/downloads/owner`

Purpose: owner reviews app download history.

## Notification Routes

### `GET /api/notifications`

Purpose: return notifications for the logged-in account.

### `PATCH /api/notifications/:id/read`

Purpose: mark one notification as read.

### `PATCH /api/notifications/read-all`

Purpose: mark all notifications as read.

## Validation Notes

- frontend uses Formik + Yup for client-side validation and form UX
- backend uses Joi for API request validation and security
- JWT protects authenticated and owner-only routes
