                              # Play Store MERN Capstone Project

## Project Summary

This repository contains the final Play Store MERN capstone project
The application currently supports only two roles:

- `user`
- `owner`
## folder structure 

**Root Path:** `d:\HUSSAIN\HUSSAIN\WIPRO PRESKILL\GALETI MOHAMMAD HUSSAIN_capstone-project_PlayStore`

```
`GALETI MOHAMMAD HUSSAIN_capstone-project_PlayStore`
|
|
├── backend
│   ├── config
│   │   ├── db.js
│   │   └── env.js
│   ├── controllers
│   │   ├── appController.js
│   │   ├── authController.js
│   │   ├── categoryController.js
│   │   ├── downloadController.js
│   │   ├── notificationController.js
│   │   ├── reviewController.js
│   │   └── userController.js
│   ├── middlewares
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── roleMiddleware.js
│   │   └── validate.js
│   ├── models
│   │   ├── Application.js
│   │   ├── Category.js
│   │   ├── Download.js
│   │   ├── Notification.js
│   │   ├── Review.js
│   │   └── User.js
│   ├── routes
│   │   ├── appRoutes.js
│   │   ├── authRoutes.js
│   │   ├── categoryRoutes.js
│   │   ├── downloadRoutes.js
│   │   ├── notificationRoutes.js
│   │   ├── reviewRoutes.js
│   │   └── userRoutes.js
│   ├── services
│   │   ├── applicationService.js
│   │   ├── authService.js
│   │   ├── categoryService.js
│   │   ├── downloadService.js
│   │   ├── notificationService.js
│   │   ├── reviewService.js
│   │   └── userService.js
│   ├── tests
│   │   └── api.test.js
│   ├── utils
│   │   ├── ApiError.js
│   │   ├── apiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── constants.js
│   │   ├── jwt.js
│   │   └── serializers.js
│   ├── validators
│   │   ├── appValidators.js
│   │   ├── authValidators.js
│   │   ├── downloadValidators.js
│   │   ├── reviewValidators.js
│   │   └── userValidators.js
│   ├── .env.example
│   ├── app.js
│   ├── jest.config.js
│   ├── package.json
│   └── server.js
├── database
│   └── seed.js
├── docs
│   ├── api-docs.md
│   ├── architecture.md
│   └── requirement-checklist.md
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── apps
│   │   │   │   ├── AppCard.jsx
│   │   │   │   ├── AppCard.test.jsx
│   │   │   │   ├── AppFilters.jsx
│   │   │   │   └── AppForm.jsx
│   │   │   ├── common
│   │   │   │   ├── EmptyState.jsx
│   │   │   │   ├── LoadingScreen.jsx
│   │   │   │   └── PageHero.jsx
│   │   │   ├── layout
│   │   │   │   └── AppShell.jsx
│   │   │   ├── notifications
│   │   │   │   └── NotificationList.jsx
│   │   │   └── reviews
│   │   │       ├── ReviewForm.jsx
│   │   │       └── ReviewList.jsx
│   │   ├── contexts
│   │   │   └── AuthContext.jsx
│   │   ├── hooks
│   │   │   └── useAuth.js
│   │   ├── pages
│   │   │   ├── AddApp.jsx
│   │   │   ├── AppDetails.jsx
│   │   │   ├── AppListing.jsx
│   │   │   ├── EditApp.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Notifications.jsx
│   │   │   ├── OwnerDashboard.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── UserManagement.jsx
│   │   │   └── UserProfile.jsx
│   │   ├── routes
│   │   │   ├── AppRoutes.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── services
│   │   │   ├── appService.js
│   │   │   ├── appService.test.js
│   │   │   ├── authService.js
│   │   │   ├── authService.test.js
│   │   │   ├── categoryService.js
│   │   │   ├── downloadService.js
│   │   │   ├── http.js
│   │   │   ├── notificationService.js
│   │   │   ├── reviewService.js
│   │   │   └── userService.js
│   │   ├── styles
│   │   │   ├── global.css
│   │   │   └── theme.js
│   │   ├── test
│   │   ├── utils
│   │   │   ├── formatters.js
│   │   │   └── storage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── setupTests.js
│   ├── test-results
│   │   └── .last-run.json
│   ├── tests
│   │   └── smoke.spec.js
│   ├── .env.example
│   ├── package.json
│   └── playwright.config.js
├── .gitignore
├── README.md
├── README_EXECUTION.md
├── README_THESIS.md
├── package-lock.json
└── package.json
```

---

## Current Functional Scope

### User features

- Register as a normal user
- Login and logout
- Browse featured applications on the home page
- Search the application catalog by name
- Filter applications by category and rating
- View detailed application pages
- Submit reviews
- Download applications
- Receive notifications when subscribed applications are updated
- Access a profile page

### Owner features

- Login and logout
- Access the owner dashboard
- Create, edit, hide, unhide, and delete applications
- Review download counts and recent user comments
- Announce application updates to subscribed users
- Access the owner-only User Management page
- Promote a `user` account to `owner`
- Delete a `user` account from the User Management page

## Current Architecture

### Frontend

- React
- React Router DOM
- React Scripts
- Material UI
- Axios
- Formik
- Yup
- React Testing Library and Jest
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
- Jest and Supertest

## Current Project Structure

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
 
```

## Current Frontend Pages

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

## Current Backend Modules

### Models

- `User`
- `Category`
- `Application`
- `Review`
- `Download`
- `Notification`

### Route groups

- `/api/auth`
- `/api/categories`
- `/api/apps`
- `/api/reviews`
- `/api/downloads`
- `/api/notifications`
- `/api/users`

## Main API Surface

### Public and health

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

### Owner user management

- `GET /api/users`
- `PUT /api/users/:id/role`
- `DELETE /api/users/:id`

## Current Seed Snapshot

The seed file no longer contains the old hardcoded demo dataset. It now stores a snapshot of the current live MongoDB data and recreates that exact state when `npm run seed` is run.

Current snapshot counts:

- 7 categories
- 5 users
- 16 applications
- 16 reviews
- 17 downloads
- 13 notifications
- 16 public applications
- 0 hidden applications

Known root owner account in the current snapshot:

- `hussaingaleti786@gmail.com / Hussain@786`

The current seed snapshot preserves MongoDB ids and document relationships so the restored data matches the current working database structure.

## Current Role Rules

- The system uses only `user` and `owner`
- The frontend registration page creates only `user` accounts
- Owners can promote a `user` to `owner` from the User Management page
- Owners can delete a `user` from the User Management page
- Owner accounts cannot be promoted again from the panel
- Owner accounts cannot be deleted from the panel

## UI Notes

- Public app cards no longer show the unnecessary `Public` chip
- Owner dashboard cards still show visibility state
- Public app grids are three columns on desktop and stack cleanly on mobile
- The header uses the current round white Play Store logo with red bag styling
- A shared footer now appears across the project for both roles with the project support contact email

## Testing and Verification

Available commands:

- `npm run seed`
- `npm run dev`
- `npm run test:api`
- `npm run test:component`
- `npm run test:e2e`
- `npm run build --workspace frontend`

Latest confirmed checks in the current workspace:

- `npm run test:api` passed
- `npm run build --workspace frontend` passed

Notes:

- On Windows, backend API tests use the local MongoDB fallback directly for stability
- The frontend build may still show a `react-scripts` deprecation warning from the toolchain, but the build completes successfully




