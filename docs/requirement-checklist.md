# Requirement Fulfilment Checklist

## Implemented User Features

- register
- login
- logout
- search applications by name
- view application details
- browse category-based application listing
- filter by rating
- submit reviews and comments
- receive update notifications
- access a user profile page

## Implemented Owner Features

- register
- login
- logout
- create applications
- update applications
- delete applications
- hide and unhide applications
- view download counts
- view user comments
- receive download notifications
- announce updates to users

## Implemented Backend Modules

- `config`
- `controllers`
- `models`
- `routes`
- `services`
- `middlewares`
- `validators`
- `utils`
- `tests`

## Implemented Frontend Modules

- `components`
- `pages`
- `services`
- `contexts`
- `hooks`
- `routes`
- `styles`
- `utils`

## Frontend Validation / State Choices

- `Formik` for form state management
- `Yup` for client-side validation schemas
- `Context API` for auth state
- no `Redux`

## Implemented API Methods

- `GET /`
- `GET /api`
- `GET /api/health`
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `GET /api/categories`
- `GET /api/apps`
- `GET /api/apps/search`
- `GET /api/apps/:id`
- `POST /api/apps`
- `PUT /api/apps/:id`
- `PATCH /api/apps/:id/visibility`
- `DELETE /api/apps/:id`
- `GET /api/apps/owner/dashboard/summary`
- `POST /api/apps/:id/announce-update`
- `POST /api/reviews`
- `GET /api/reviews/app/:id`
- `DELETE /api/reviews/:id`
- `POST /api/downloads`
- `GET /api/downloads/owner`
- `GET /api/notifications`
- `PATCH /api/notifications/:id/read`
- `PATCH /api/notifications/read-all`

## Seed / Demo Coverage

- 2 owners
- 2 users
- 7 categories
- 12 applications
- seeded reviews
- seeded downloads
- seeded notifications

## Verification Completed

- dependency installation
- database seed execution
- backend API tests
- frontend Jest suite for component and service methods
- frontend production build
- frontend end-to-end smoke tests
- backend runtime health check
- backend root and API root smoke checks
- owner dashboard smoke check with seeded account

## Requirement Notes

- the project follows the main capstone brief with two roles: `user` and `owner`
- JWT is implemented
- localStorage session handling is implemented
- client-side validation is implemented using Formik + Yup
- backend validation is implemented using Joi
- SPA navigation is implemented using React Router
