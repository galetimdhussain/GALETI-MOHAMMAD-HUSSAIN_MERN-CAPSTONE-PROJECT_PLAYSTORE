CAPSTONE PROJECT REPORT

Project Title: Play Store Application
Project Type: Full Stack MERN Web Application
Prepared By: Galeti Mohammad Hussain
Date: 17 March 2026
Technology Domain: MERN Stack with JWT Authentication

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

## Project Overview


TABLE OF CONTENTS

1. Introduction
2. Problem Statement
3. Need for the Project
4. Project Objectives
5. Scope of the Project
6. Stakeholders and User Roles
7. Requirement Analysis
8. Development Methodology and Sprint Execution
9. Technology Stack and Justification
10. System Architecture
11. Frontend Design and Module Structure
12. Backend Design and Module Structure
13. Database Design and Relationship Model
14. Detailed Collection Design
15. API Design and Endpoint Summary
16. Authentication, Authorization, and Security
17. Form Handling and Validation Strategy
18. Notification Workflow
19. User Workflow
20. Owner Workflow
21. Owner User Management Enhancement
22. Dataset and Seed Snapshot Strategy
23. User Interface Design Considerations
24. Testing Strategy and Quality Assurance
25. Project Setup and Execution Flow
26. Challenges Faced and Resolutions
27. Project Outcomes
28. Limitations
29. Future Enhancements
30. Conclusion
31. References

1. INTRODUCTION

The Play Store Application is a full stack web application developed to simulate a digital application marketplace where software owners can publish their applications and end users can browse, review, and download them. The project was developed as a capstone submission using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. The objective of the project is to satisfy the academic problem statement while also producing a system that resembles a real software product in architecture, code organization, functionality, testing, and presentation quality.

The system supports two roles only, namely User and Owner. A User can register, log in, browse the application catalogue, search by name, filter by category and rating, view detailed information, submit reviews, download applications, and receive notifications when subscribed applications are updated. An Owner can log in, create applications, edit application metadata, hide or unhide applications from public visibility, monitor download counts, read user comments, receive notifications when an application is downloaded, announce updates to users who are subscribed to that application, and manage user accounts from the owner-only User Management page.

2. PROBLEM STATEMENT

Digital application stores are central to modern software distribution. Developers require a platform where they can publish and maintain their applications, while users need a simple way to discover, evaluate, and download relevant software. In the absence of a structured platform, users may find it difficult to compare application options, filter by category or rating, or receive timely information about updates. Developers, in turn, may lack visibility into downloads, user reactions, and the overall engagement with their published applications.

The Play Store Application addresses this need by providing a unified web platform with clear role separation, application catalogue management, user reviews, category based discovery, and a notification mechanism that connects both owners and users through application lifecycle events.

3. NEED FOR THE PROJECT

The project was required to address both functional and academic objectives. From a functional perspective, it demonstrates how a modern marketplace style application can be designed using a JavaScript based end to end technology stack. From an academic perspective, it satisfies the capstone requirement to design a full stack application involving authentication, database modelling, REST APIs, frontend integration, testing, and professional documentation.

The project also demonstrates practical engineering concerns such as modular design, validation at both client and server layers, seeded data recovery, repeatable test execution, and documentation that supports setup, manual verification, GitHub delivery, and viva preparation.

4. PROJECT OBJECTIVES

The primary objectives of the Play Store Application are as follows.

1. To create a working Play Store style platform with two roles, User and Owner.
2. To implement secure authentication using JWT tokens.
3. To provide users with search, filter, review, and download functionality.
4. To provide owners with application management, visibility control, dashboard access, notification handling, and user account management tools.
5. To design a MongoDB schema that supports the required relationships and operations.
6. To expose RESTful APIs through Express.js following modular architecture principles.
7. To create a responsive React frontend with clear navigation and protected routes.
8. To implement client side and server side validation.
9. To include test coverage at API, component, service, and end to end levels.
10. To produce documentation suitable for project execution, manual verification, viva explanation, GitHub updates, and final report preparation.

5. SCOPE OF THE PROJECT

The project scope includes account registration, login, logout, application browsing, search, category filtering, rating based filtering, application details viewing, review submission, download tracking, application CRUD operations for owners, owner notifications for downloads, user notifications for application updates, a user profile page, an owner dashboard, and an owner-only User Management page for promoting or deleting normal user accounts.

The current scope does not include payment handling, external cloud storage, real push notifications, social login, multi tenant deployment, or native mobile app packaging. Those features remain outside the capstone scope.

6. STAKEHOLDERS AND USER ROLES

The major stakeholders in this project are the end users, application owners, evaluators, and the developer of the system.

User Role
A user represents a person browsing the platform for applications. A user can create an account, sign in, explore applications, read application details, apply filters, add reviews, download apps, and receive update notifications for subscribed applications.

Owner Role
An owner represents an application developer or publisher. An owner can create and manage application records, hide or unhide apps, monitor download activity, announce updates, promote a user to owner, and delete a normal user account when required.

Evaluator or Guide
An evaluator reviews whether the project satisfies the capstone statement, demonstrates good architecture, and is properly documented and tested.

Developer
The developer is responsible for implementation, code quality, integration, documentation, testing, and maintenance.

7. REQUIREMENT ANALYSIS

The capstone problem statement required user registration, login, logout, application search by name, viewing details such as name, description, release date, version, ratings, and genre, browsing by categories such as games, beauty, fashion, women, and health, filtering based on ratings, writing reviews or comments, and receiving update notifications.

The owner side required login, logout, create, update, delete, and manage visibility of applications, view the number of downloads, read user comments, receive download notifications, and announce updates to users.

The implemented system satisfies these requirements. In addition to the core brief, the current project also includes an owner-only user management enhancement while still maintaining only two roles in the system.

8. DEVELOPMENT METHODOLOGY AND SPRINT EXECUTION

The implementation followed a staged approach aligned to the capstone sprint intent.

Sprint One focused on database design, authentication flows, project scaffolding, and initial React structure. Sprint Two focused on application search, filters, owner app management, review functionality, and JWT based security implementation. Sprint Three focused on service layer structuring, controller based routing, notification logic, frontend and backend integration, responsive layout refinement, user management enhancement, and documentation completion.

9. TECHNOLOGY STACK AND JUSTIFICATION

Frontend Technologies
The frontend is built with React and React Router DOM. React was selected because it supports reusable components, stateful UI logic, and single page application navigation. React Scripts is used as the project runner because it fits the classroom workflow and current project setup. Material UI is the UI framework. Axios is used for API communication. Formik and Yup are used for client side form state management and validation.

Backend Technologies
The backend is built with Node.js and Express.js. Express was selected because it provides lightweight routing, middleware support, and a clear structure for REST API design. Mongoose is used to model and validate MongoDB data. JWT is used for stateless authentication. bcryptjs is used for password hashing. Joi is used for backend request validation. Helmet and express-mongo-sanitize are used to improve security.

Database Technology
MongoDB was selected because the application has a catalogue driven data model with flexible document structure. Mongoose makes it easier to define schemas, relations, and validation rules.

Testing Technologies
Jest and Supertest are used for backend API testing. React Testing Library and Jest are used for frontend component and service testing. Playwright is used for end to end smoke testing.

10. SYSTEM ARCHITECTURE

The overall system follows a client server model. The React frontend runs in the browser and communicates with the Express backend through HTTP requests. The backend exposes REST APIs and interacts with MongoDB through Mongoose models. Authentication is handled using JWT tokens. Protected frontend pages depend on stored authentication state, while protected backend routes use middleware to verify the token and current role from the database.

11. FRONTEND DESIGN AND MODULE STRUCTURE

The frontend follows a structured folder organization inside frontend/src.

components contains reusable interface pieces such as app cards, filters, review forms, navigation shell, notifications, and page hero sections.
pages contains route level pages such as Home, App Listing, App Details, Login, Register, User Profile, Notifications, Owner Dashboard, User Management, Add App, and Edit App.
services contains Axios based modules for auth, apps, categories, reviews, downloads, notifications, and users.
contexts contains the authentication context that stores session state and refreshes profile data on focus and visibility changes.
routes contains route definitions and protected route wrappers.
styles contains the Material UI theme and global CSS.
utils contains helpers for token storage and formatting.

12. BACKEND DESIGN AND MODULE STRUCTURE

The backend uses a modular architecture inside the backend folder.

config contains environment and database configuration.
controllers receive requests and return responses.
models define Mongoose schemas.
routes define API endpoints.
services contain business logic.
middlewares contain authentication, authorization, validation, and error handling.
validators contain Joi schemas.
utils contain helpers such as JWT utilities and serializers.
tests contain backend API tests.

13. DATABASE DESIGN AND RELATIONSHIP MODEL

The database design is centered on six collections.

Users collection stores account details, role, and subscribed applications.
Categories collection stores category names and slugs used by application records.
Applications collection stores app metadata, owner reference, category reference, rating information, visibility state, icon URL, feature highlights, and download count.
Reviews collection stores user ratings and comments linked to an application.
Downloads collection stores each download event linking a user and an application.
Notifications collection stores both user and owner notifications.

The valid user roles are only user and owner.

14. DETAILED COLLECTION DESIGN

Users
Important fields include name, email, password, role, and subscribedApps. Passwords are stored in hashed form.

Categories
Important fields include name, slug, description, and isActive.

Applications
Important fields include name, description, version, releaseDate, category, genre, rating, averageRating, reviewCount, visibility, ownerId, iconUrl, featureHighlights, downloadCount, and lastAnnouncement.

Reviews
Important fields include userId, appId, rating, comment, and timestamp.

Downloads
Important fields include userId, appId, and downloadDate.

Notifications
Important fields include recipientId, recipientRole, type, title, message, relatedAppId, isRead, and metadata.

15. API DESIGN AND ENDPOINT SUMMARY

The backend exposes RESTful APIs under the /api prefix.

Authentication routes
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me

Category route
GET /api/categories

Application routes
GET /api/apps
GET /api/apps/search
GET /api/apps/:id
POST /api/apps
PUT /api/apps/:id
PATCH /api/apps/:id/visibility
DELETE /api/apps/:id
GET /api/apps/owner/dashboard/summary
POST /api/apps/:id/announce-update

Review routes
POST /api/reviews
GET /api/reviews/app/:id
DELETE /api/reviews/:id

Download routes
POST /api/downloads
GET /api/downloads/owner

Notification routes
GET /api/notifications
PATCH /api/notifications/:id/read
PATCH /api/notifications/read-all

User management routes
GET /api/users
PUT /api/users/:id/role
DELETE /api/users/:id

16. AUTHENTICATION, AUTHORIZATION, AND SECURITY

Authentication is implemented using JSON Web Tokens. After successful login or registration, the backend returns a signed JWT token and the frontend stores it in local storage. Protected requests include the token in the Authorization header using the Bearer format.

Authorization is role based. Owner routes verify the current user role from the database. This design allows a promoted user to receive owner access after the role is changed in MongoDB.

Security measures include password hashing with bcryptjs, request validation with Joi, protection headers using Helmet, sanitization against MongoDB operator injection using express-mongo-sanitize, centralized error handling, and protected frontend routes.

17. FORM HANDLING AND VALIDATION STRATEGY

The project uses Formik and Yup on the frontend for major forms such as login, registration, application creation, application editing, and review submission. The backend independently validates requests using Joi. This dual validation approach improves both user experience and API safety.

18. NOTIFICATION WORKFLOW

The notification service supports two major workflows.

Owner notification on download
When an authenticated user downloads an application, a download record is created and the owner of that application receives a notification.

User notification on owner update
When an owner announces an update for an application, the backend creates notifications for users who are subscribed to that application. Subscriptions are established through the download workflow because downloaded applications are added to the user's subscribedApps list.

19. USER WORKFLOW

A typical user flow proceeds as follows.

The user registers or logs in.
The frontend stores the token and restores the session on page reload.
The user browses featured applications on the home page.
The user opens the Applications page and searches by app name, filters by category, or filters by minimum rating.
The user opens an application details page to view release date, version, genre, owner, download count, and reviews.
The user downloads the app.
The user writes a review.
The user later receives notifications when subscribed apps are updated.

20. OWNER WORKFLOW

A typical owner flow proceeds as follows.

The owner logs in.
The owner accesses the dashboard.
The owner creates a new application by submitting metadata such as name, description, version, category, genre, release date, and icon URL.
The owner updates application details when required.
The owner hides or unhides applications to control public visibility.
The owner tracks download counts and recent user comments in the dashboard.
The owner announces updates, which generate notifications for subscribed users.
The owner receives notifications when an application is downloaded.
The owner opens User Management to promote or delete normal users.

21. OWNER USER MANAGEMENT ENHANCEMENT

The current project includes an owner-only User Management page. This enhancement was added without changing the original two-role architecture.

From this page, an owner can view registered accounts in a table, promote a user to owner, and delete a normal user account. Existing owner accounts cannot be promoted again and cannot be deleted from this panel. When a user is deleted, the system also removes that user's reviews, downloads, and personal notifications, then recalculates affected application counts.

22. DATASET AND SEED SNAPSHOT STRATEGY

The current project no longer relies on the earlier static demo seed content. Instead, `database/seed.js` was regenerated from the live MongoDB database so that future runs of `npm run seed` restore the current working dataset.

The present snapshot contains:

- 7 categories
- 5 users
- 16 applications
- 16 reviews
- 17 downloads
- 13 notifications

All 16 applications in the current snapshot are public. The known root owner account in the snapshot is `hussaingaleti786@gmail.com` with role `owner`.

23. USER INTERFACE DESIGN CONSIDERATIONS

The frontend interface was refined to look balanced and presentation ready. The design uses Material UI, custom gradients, structured spacing, responsive grids, improved app card alignment, and a custom round Play Store logo. Public cards do not show redundant visibility labels because only public apps appear there, while owner dashboard cards still show visibility state for management clarity.

The application also includes a shared footer across pages with the project support contact email for a cleaner final presentation.

24. TESTING STRATEGY AND QUALITY ASSURANCE

Testing was performed at multiple layers.

API testing
Jest and Supertest are used for backend integration tests. These tests verify authentication, app creation, review creation, download creation, notification flow, and owner user management flows including promotion and deletion.

Component and service testing
React Testing Library and Jest are used to validate component rendering and service layer behavior in the frontend.

End to end testing
Playwright is used for smoke testing core browser flows.

Build verification
The frontend production build is generated using react-scripts build to verify deployable output.

In the current workspace, the latest verified commands are npm run test:api and npm run build --workspace frontend.

25. PROJECT SETUP AND EXECUTION FLOW

Setting up and running the project follows this sequence.

Install dependencies using npm install from the root directory.
Configure backend and frontend environment files.
Start MongoDB locally.
Seed the database using npm run seed.
Run the full project using npm run dev.
Open the frontend on localhost port 3000 and backend on localhost port 5000.
Use the root owner account and seeded users to verify both roles.

26. CHALLENGES FACED AND RESOLUTIONS

Several practical challenges were encountered during the development cycle.

One challenge was aligning the project strictly to the capstone brief while keeping documentation synchronized with code updates. This was resolved by treating the main capstone brief as the primary source of truth and refreshing all supporting documentation together.

A second challenge involved frontend layout consistency across public cards, owner dashboard panels, and mobile responsiveness. This was resolved through repeated UI refinement using Material UI and shared component updates.

A third challenge involved test stability on Windows when using mongodb-memory-server. This was resolved by using the local MongoDB fallback directly in the backend API tests on Windows for stable execution.

A fourth challenge involved preserving the final working MongoDB dataset for future reseeding. This was resolved by exporting the live database snapshot into `database/seed.js` so that future seed runs restore the same working data.

27. PROJECT OUTCOMES

The final project delivers the following outcomes.

A complete MERN Play Store system with clear role based functionality.
A modular backend with service layer separation and secure API design.
A React single page application with responsive user and owner experiences.
A MongoDB schema that supports application publishing, reviews, downloads, notifications, and owner user management.
A snapshot-based seed environment that allows evaluators to restore the current working dataset quickly.
A documentation set that supports setup, testing, viva preparation, GitHub management, and thesis conversion.

28. LIMITATIONS

The project is intentionally scoped to capstone requirements and therefore has some limitations.

Real file uploads are not implemented.
Notifications are stored in the application database rather than being pushed through email or mobile notification services.
Deployment automation is not included.
Advanced analytics and recommendation engines are not implemented.
Search is application name driven rather than a full text search engine.

29. FUTURE ENHANCEMENTS

Future improvements that can extend this project include image upload integration, pagination for large catalogues, advanced analytics on the owner dashboard, richer notification delivery channels, cloud deployment, and more advanced reporting for owner activity. The current two-role model can still be preserved while extending analytics and presentation quality.

30. CONCLUSION

The Play Store Application demonstrates a complete and structured implementation of the capstone problem statement using the MERN stack. It supports two roles, secure authentication, application catalogue management, searching and filtering, review submission, download tracking, owner side administration, owner-only user management, notification workflows, responsive design, and multi level testing.

The project was built with a strong focus on architecture, clarity, maintainability, and final presentation quality. As a result, it serves not only as a capstone submission but also as a professional full stack demonstration project suitable for academic evaluation, viva discussion, and portfolio presentation.

