# API Documentation

## Base URL

```text
http://localhost:5000/api
```

## General Response Style

Most successful responses use this pattern:

```json
{
  "success": true,
  "message": "Optional message",
  "data": {}
}
```

## 1. Info Routes

### GET /

Purpose:

- backend root info

### GET /api

Purpose:

- API root summary

### GET /api/health

Purpose:

- health check

## 2. Authentication

### POST /api/auth/register

Auth required: No

Recommended payload for current project use:

```json
{
  "name": "Manual User",
  "email": "manualuser@example.com",
  "password": "Password123",
  "role": "user"
}
```

Note:

- the frontend registration page creates only `user` accounts
- for evaluation, the current root owner account is typically used instead of registering owners manually

### POST /api/auth/login

Auth required: No

Example root owner payload:

```json
{
  "email": "hussaingaleti786@gmail.com",
  "password": "Hussain@786"
}
```

### POST /api/auth/logout

Auth required: Yes

Headers:

```text
Authorization: Bearer <token>
```

### GET /api/auth/me

Auth required: Yes

Returns the current authenticated user.

## 3. Categories

### GET /api/categories

Auth required: No

Returns active categories for filters and app forms.

## 4. Applications

### GET /api/apps

Auth required: No

Returns public applications.

Supported query parameters:

- `search`
- `category`
- `rating`

### GET /api/apps/search

Auth required: No

Behavior matches filtered application listing.

### GET /api/apps/:id

Auth required: No for public apps

Returns a single application detail view.

### POST /api/apps

Auth required: Yes
Role required: `owner`

Example payload:

```json
{
  "name": "Battle Forge",
  "description": "Competitive mobile strategy with team-based battle arenas.",
  "version": "1.0.0",
  "releaseDate": "2026-03-13",
  "category": "<categoryId>",
  "genre": "Strategy",
  "visibility": "public",
  "iconUrl": "https://example.com/icon.png",
  "featureHighlights": ["Ranked matches", "Guild chat"]
}
```

### PUT /api/apps/:id

Auth required: Yes
Role required: `owner`

Updates an existing owner application.

### PATCH /api/apps/:id/visibility

Auth required: Yes
Role required: `owner`

Example payload:

```json
{
  "visibility": "hidden"
}
```

Allowed values:

- `public`
- `hidden`

### DELETE /api/apps/:id

Auth required: Yes
Role required: `owner`

### GET /api/apps/owner/dashboard/summary

Auth required: Yes
Role required: `owner`

Returns:

- owner stats
- owner applications
- recent downloads
- recent reviews

### POST /api/apps/:id/announce-update

Auth required: Yes
Role required: `owner`

Example payload:

```json
{
  "version": "1.1.0",
  "message": "This update adds new challenge levels and performance fixes."
}
```

## 5. Reviews

### POST /api/reviews

Auth required: Yes

Example payload:

```json
{
  "appId": "<appId>",
  "rating": 5,
  "comment": "Smooth gameplay and polished UI."
}
```

### GET /api/reviews/app/:id

Auth required: No

### DELETE /api/reviews/:id

Auth required: Yes

## 6. Downloads

### POST /api/downloads

Auth required: Yes

Example payload:

```json
{
  "appId": "<appId>"
}
```

Effect:

- creates download record
- increments download count
- creates owner notification
- adds the app to the user subscription list

### GET /api/downloads/owner

Auth required: Yes
Role required: `owner`

## 7. Notifications

### GET /api/notifications

Auth required: Yes

### PATCH /api/notifications/:id/read

Auth required: Yes

Example body:

```json
{}
```

### PATCH /api/notifications/read-all

Auth required: Yes

Example body:

```json
{}
```

## 8. Owner User Management

The current project includes owner-only user promotion and deletion.

### GET /api/users

Auth required: Yes
Role required: `owner`

Returns all registered users with fields such as:

- id
- name
- email
- role
- createdAt

### PUT /api/users/:id/role

Auth required: Yes
Role required: `owner`

Current supported role update:

```json
{
  "role": "owner"
}
```

Rules:

- only a current `user` should be promoted
- accounts already marked as `owner` return an error
- there are only two valid roles in the system: `user` and `owner`

### DELETE /api/users/:id

Auth required: Yes
Role required: `owner`

Rules:

- only a current `user` can be deleted
- owner accounts return an error
- deleting a user also removes that user's reviews, downloads, and personal notifications
- affected application counts are recalculated after deletion

## 9. Current Roles and Visibility Values

### Role values

- `user`
- `owner`

### Visibility values

- `public`
- `hidden`

## 10. Recommended Manual Test Order

1. `GET /api/health`
2. `POST /api/auth/login` as the root owner account
3. `GET /api/categories`
4. `GET /api/apps`
5. `GET /api/apps/:id`
6. `POST /api/reviews`
7. `POST /api/downloads`
8. `GET /api/notifications`
9. `GET /api/apps/owner/dashboard/summary`
10. `GET /api/users`
11. `PUT /api/users/:id/role`
12. `DELETE /api/users/:id`
