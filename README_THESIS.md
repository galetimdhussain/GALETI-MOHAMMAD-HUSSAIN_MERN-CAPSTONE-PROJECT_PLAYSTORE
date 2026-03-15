CAPSTONE PROJECT REPORT

Project Title: Play Store Application
Project Type: Full Stack MERN Web Application
Prepared By: Galeti Mohammad Hussain
Date: 16 March 2026
Technology Domain: MERN Stack with JWT Authentication

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
21. User Interface Design Considerations
22. Testing Strategy and Quality Assurance
23. Project Setup and Execution Flow
24. Challenges Faced and Resolutions
25. Project Outcomes
26. Limitations
27. Future Enhancements
28. Conclusion
29. References

1. INTRODUCTION

The Play Store Application is a full stack web application developed to simulate a digital application marketplace where software owners can publish their mobile or software applications and end users can browse, review, and download them. The project was developed as a capstone submission using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. The objective of the project is not only to satisfy the given academic problem statement but also to produce a system that resembles a real software product in architecture, code organization, functionality, testing, and presentation readiness.

The system supports two roles, namely User and Owner. A User can register, log in, browse the application catalogue, search by name, filter by category and rating, view detailed information, submit reviews, download applications, and receive notifications when subscribed applications are updated. An Owner can register, log in, create applications, edit application metadata, hide or unhide applications from public visibility, monitor download counts, read user comments, receive notifications when an application is downloaded, and announce updates to users who are subscribed to that application.

The project was built with a strong emphasis on modular backend design, maintainable frontend structure, secure JWT based authentication, professional documentation, seeded sample data, and testing at multiple levels. The final system is intended to be suitable for submission, presentation, and viva.

2. PROBLEM STATEMENT

Digital application stores are central to modern software distribution. Developers require a platform where they can publish and maintain their applications, while users need a simple way to discover, evaluate, and download relevant software. In the absence of a structured platform, users may find it difficult to compare application options, filter by category or rating, or receive timely information about updates. Developers, in turn, may lack visibility into downloads, user reactions, and the overall engagement with their published applications.

The Play Store Application addresses this need by providing a unified web platform with clear role separation, application catalogue management, user reviews, category based discovery, and a notification mechanism that connects both owners and users through application lifecycle events.

3. NEED FOR THE PROJECT

The project was required to address both functional and academic objectives. From a functional perspective, it demonstrates how a modern marketplace style application can be designed using a JavaScript based end to end technology stack. From an academic perspective, it satisfies the capstone requirement to design a full stack application involving authentication, database modelling, REST APIs, frontend integration, testing, and professional documentation.

The need for this project can be described in the following points.

First, it demonstrates a complete full stack workflow from database schema creation to deployment ready frontend build generation.

Second, it shows how different user roles can be enforced securely with JWT based access control and protected routes.

Third, it illustrates how MongoDB collections and relationships can be mapped to a realistic business domain with users, applications, reviews, downloads, notifications, and categories.

Fourth, it provides a responsive single page application experience with structured routing and modular React component design.

Fifth, it serves as a professional portfolio project that can be demonstrated to evaluators as a real software system rather than a minimal assignment.

4. PROJECT OBJECTIVES

The primary objectives of the Play Store Application are as follows.

1. To create a working Play Store style platform with two roles, User and Owner.
2. To implement secure authentication using JWT tokens.
3. To provide users with search, filter, review, and download functionality.
4. To provide owners with application management, visibility control, dashboard access, and notification handling.
5. To design a MongoDB schema that supports the required relationships and operations.
6. To expose RESTful APIs through Express.js following modular architecture principles.
7. To create a responsive React frontend with clear navigation and protected routes.
8. To implement client side and server side validation.
9. To include test coverage at API, component, service, and end to end levels.
10. To produce documentation suitable for project execution, manual verification, viva explanation, and final report preparation.

5. SCOPE OF THE PROJECT

The project scope includes account registration, login, logout, application browsing, search, category filtering, rating based filtering, application details viewing, review submission, download tracking, application CRUD operations for owners, owner notifications for downloads, user notifications for application updates, a user profile page, and an owner dashboard.

The project also includes seed data for easier evaluation, documentation for MongoDB setup and API verification, and frontend improvements for responsive presentation quality.

The current scope does not include payment handling, external cloud storage, real push notifications, multi tenant deployment, social login, or native mobile app packaging. Those features are possible future enhancements but are outside the current capstone scope.

6. STAKEHOLDERS AND USER ROLES

The major stakeholders in this project are the end users, application owners, evaluators, and the developer of the system.

User Role
A user represents a person browsing the platform for applications. A user can create an account, sign in, explore applications, read application details, apply filters, add reviews, download apps, and receive update notifications for subscribed applications.

Owner Role
An owner represents an application developer or publisher. An owner can create and manage application records, hide or unhide apps, monitor download activity, and announce updates.

Evaluator or Guide
An evaluator reviews whether the project satisfies the given capstone statement, demonstrates good architecture, and is properly documented and tested.

Developer
The developer is responsible for implementation, code quality, integration, documentation, testing, and maintenance.

7. REQUIREMENT ANALYSIS

The capstone problem statement required the following user side functionality. Registration, login, logout, application search by name, viewing details such as name, description, release date, version, ratings, and genre, browsing by categories such as games, beauty, fashion, women, and health, filtering based on ratings, writing reviews or comments, and receiving update notifications.

The owner side functionality required registration, login, logout, create, update, delete, and manage visibility of applications, view the number of downloads, read user comments, receive download notifications, and announce updates to users.

The implemented system satisfies these requirements through the following modules.

Authentication module for account registration and login.
Application catalogue module for listing, searching, filtering, and details viewing.
Review module for user comments and ratings.
Download module for recording downloads and creating owner notifications.
Notification module for owner alerts and user update announcements.
Owner dashboard module for app management and performance monitoring.

8. DEVELOPMENT METHODOLOGY AND SPRINT EXECUTION

The implementation followed a staged approach aligned to the capstone sprint intent.

Sprint One focused on database design, authentication flows, project scaffolding, and initial React structure. During this phase the MongoDB collections were designed, backend configuration was established, base authentication routes were implemented, and the frontend skeleton was created.

Sprint Two focused on application search, filter mechanisms, owner side application updates, review functionality, JWT based security implementation, and frontend testing support.

Sprint Three focused on service layer structuring, controller based routing, notification logic, frontend and backend integration, responsive layout improvement, and final documentation and verification.

Although the original sprint wording mentions items such as admin and Spring security, the implemented project follows the main problem statement correctly by using the two required roles, User and Owner, and by using JWT based Node.js security in the MERN stack context.

9. TECHNOLOGY STACK AND JUSTIFICATION

Frontend Technologies
The frontend is built with React and React Router DOM. React was selected because it supports reusable components, stateful UI logic, and single page application navigation. React Scripts was used as the project runner because it aligns with the classroom context and avoids introducing an unfamiliar build tool.

Material UI was selected for the component library. It provides consistent UI primitives, responsive grid support, typography control, and fast layout refinement. Axios is used for API communication. Formik and Yup are used for client side form state management and validation.

Backend Technologies
The backend is built with Node.js and Express.js. Express was selected because it provides lightweight routing, middleware support, and a clear structure for REST API design. Mongoose is used to model and validate MongoDB data. JWT is used for stateless authentication. bcryptjs is used for password hashing. Joi is used for backend request validation. Helmet and express-mongo-sanitize are used to improve security.

Database Technology
MongoDB was selected because the application has a catalogue driven data model with flexible document structure. Mongoose makes it easier to define schemas, relations, and validation rules while still benefiting from MongoDB's flexibility.

Testing Technologies
Jest and Supertest are used for backend API testing. React Testing Library and Jest are used for frontend component and service testing. Playwright is used for end to end browser style testing.

10. SYSTEM ARCHITECTURE

The overall system follows a client server model.

The React frontend runs in the browser and communicates with the Express backend through HTTP requests. The backend exposes REST APIs and interacts with MongoDB through Mongoose models. Authentication is handled using JWT tokens. Protected frontend pages depend on stored authentication state, while protected backend routes use middleware to verify the token and role.

The runtime flow is as follows. A user opens the frontend, authenticates through the auth endpoints, receives a JWT token, and the frontend stores that token in local storage. The token is attached to protected requests through the Axios layer. The backend verifies the token, applies validation and role checks, performs the requested business logic through service modules, and stores or retrieves data from MongoDB.

11. FRONTEND DESIGN AND MODULE STRUCTURE

The frontend follows a structured folder organization inside frontend/src.

components contains reusable interface pieces such as app cards, filters, review forms, navigation shell, and page hero sections.
pages contains route level pages such as Home, App Listing, App Details, Login, Register, User Profile, Notifications, Owner Dashboard, Add App, and Edit App.
services contains Axios based modules for auth, apps, categories, reviews, downloads, and notifications.
contexts contains the authentication context that stores session state.
hooks contains useAuth.
routes contains route definitions and protected route wrappers.
styles contains the Material UI theme and global CSS.
utils contains helpers for token storage and formatting.

The frontend is built as a single page application. Navigation happens through React Router without full page reload. Protected pages are shown only when the user is authenticated and the role requirements are satisfied.

12. BACKEND DESIGN AND MODULE STRUCTURE

The backend uses a modular architecture inside the backend folder.

config contains environment and database configuration.
controllers receives requests and returns responses.
models defines Mongoose schemas.
routes defines API endpoints.
services contains business logic.
middlewares contains authentication, authorization, validation, and error handling.
validators contains Joi schemas.
utils contains helpers such as JWT utilities and constants.
tests contains backend API tests.

This architecture improves separation of concerns. Controllers stay thin, services hold business rules, and validators isolate request schema logic. This makes the codebase easier to test and maintain.

13. DATABASE DESIGN AND RELATIONSHIP MODEL

The database design is centered on six collections.

Users collection stores account details, role, and subscribed applications.
Categories collection stores category names and slugs used by application records.
Applications collection stores app metadata, owner reference, category reference, rating information, visibility state, icon URL, feature highlights, and download count.
Reviews collection stores user ratings and comments linked to an application.
Downloads collection stores each download event linking a user and an application.
Notifications collection stores both user and owner notifications.

The main relationships are as follows.

One owner can create many applications.
One user can write many reviews.
One application can have many reviews.
One application can have many downloads.
One user can receive many notifications.
One user can subscribe to many applications for update tracking.

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

This schema design supports the full set of required operations without introducing unnecessary complexity.

15. API DESIGN AND ENDPOINT SUMMARY

The backend exposes RESTful APIs under the /api prefix.

Authentication routes
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me

Information routes
GET /
GET /api
GET /api/health

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

These APIs support the complete flow of the application while keeping a clean separation between resource types.

16. AUTHENTICATION, AUTHORIZATION, AND SECURITY

Authentication is implemented using JSON Web Tokens. After successful login or registration, the backend returns a signed JWT token and the frontend stores it in local storage. Protected requests include the token in the Authorization header using the Bearer format.

Authorization is role based. Certain routes are available to any authenticated account, while owner specific routes are restricted by middleware that checks the role field.

Security measures include password hashing with bcryptjs, request validation with Joi, protection headers using Helmet, sanitization against MongoDB operator injection using express-mongo-sanitize, centralized error handling, and protected frontend routes.

17. FORM HANDLING AND VALIDATION STRATEGY

The project uses Formik and Yup on the frontend for major forms such as login, registration, application creation, application editing, and review submission. This improves form state handling and gives immediate client side feedback.

The backend independently validates requests using Joi. This dual validation approach improves both user experience and API safety. Even if a request bypasses the frontend, the backend still rejects invalid data.

18. NOTIFICATION WORKFLOW

The notification service supports two major workflows.

Owner notification on download
When an authenticated user downloads an application, a download record is created and the owner of that application receives a notification.

User notification on owner update
When an owner announces an update for an application, the backend creates notifications for users who are subscribed to that application. Subscriptions are established through the download workflow because downloaded applications are added to the user's subscribedApps list.

This design closely matches the capstone problem statement.

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

The owner registers or logs in.
The owner accesses the dashboard.
The owner creates a new application by submitting metadata such as name, description, version, category, genre, release date, and icon URL.
The owner updates application details when required.
The owner hides or unhides applications to control public visibility.
The owner tracks download counts and recent user comments in the dashboard.
The owner announces updates, which generate notifications for subscribed users.
The owner receives notifications when an application is downloaded.

21. USER INTERFACE DESIGN CONSIDERATIONS

The frontend interface was refined to look more balanced and presentation ready. The design uses a modern Material UI theme, custom gradients, structured spacing, improved app card alignment, consistent buttons, responsive grids, and distinct layouts for public pages and owner pages.

The branding was refined with a custom Play Store style logo. Application cards were standardized to maintain equal size, proper image fitting, readable labels, and better layout consistency across the Home page, Applications page, and owner dashboard.

The UI was also adjusted for better readability on desktop, tablet, and mobile devices.

22. TESTING STRATEGY AND QUALITY ASSURANCE

Testing was performed at multiple layers.

API testing
Jest and Supertest were used for backend integration tests. These tests verify authentication, app creation, review creation, download creation, and notification related flows. The API test setup can use an in memory MongoDB instance and has fallback support for a local test database when needed.

Component and service testing
React Testing Library and Jest are used to validate component rendering and service layer behavior in the frontend.

End to end testing
Playwright is used for smoke testing core browser flows such as loading the application and navigating to registration.

Build verification
The frontend production build is generated using react-scripts build to verify deployable output.

23. PROJECT SETUP AND EXECUTION FLOW

The project is executed through the following sequence.

Install dependencies using npm install.
Configure backend and frontend environment files.
Start MongoDB locally.
Seed the database using npm run seed.
Run the full project using npm run dev.
Open the frontend on localhost port 3000 and backend on localhost port 5000.
Use the seeded demo credentials to verify both roles.

Supporting operational documents are included for execution, MongoDB setup, Postman verification, JWT flow, and GitHub upload workflow.

24. CHALLENGES FACED AND RESOLUTIONS

Several practical challenges were encountered during the development cycle.

One challenge was aligning the project strictly to the main capstone brief while also considering a secondary schema document whose naming was not fully identical to the problem statement. This was resolved by treating the main capstone brief as the primary source of truth and aligning the system to the required User and Owner roles.

A second challenge involved runtime validation issues caused by empty filter parameters and frontend request formatting. This was resolved by sanitizing request parameters and improving validation logic.

A third challenge involved UI inconsistency across cards, grids, and dashboard panels. This was addressed through repeated layout refinement and consistent theme based styling.

A fourth challenge involved documentation drift as the project evolved. This was addressed by synchronizing README files, API guides, MongoDB notes, GitHub instructions, and the thesis report with the current codebase.

25. PROJECT OUTCOMES

The final project delivers the following outcomes.

A complete MERN Play Store system with clear role based functionality.
A modular backend with service layer separation and secure API design.
A React single page application with responsive user and owner experiences.
A MongoDB schema that supports application publishing, reviews, downloads, and notifications.
A seeded environment that allows evaluators to run and demonstrate the project quickly.
A documentation set that supports setup, testing, viva preparation, GitHub management, and thesis conversion.

26. LIMITATIONS

The project is intentionally scoped to capstone requirements and therefore has some limitations.

Real file uploads are not implemented.
Notifications are stored in the application database rather than being pushed through email or mobile notification services.
Deployment automation is not included.
Advanced analytics and recommendation engines are not implemented.
Search is application name driven rather than a full text search engine.

These limitations do not affect the required capstone functionality but identify areas for future growth.

27. FUTURE ENHANCEMENTS

Future improvements that can extend this project include image upload integration, pagination for large catalogues, advanced analytics on the owner dashboard, richer notification delivery channels, role based admin support if ever required beyond the capstone brief, CI and CD pipelines, cloud deployment, and enhanced recommendation features based on user behavior.

28. CONCLUSION

The Play Store Application demonstrates a complete and structured implementation of the capstone problem statement using the MERN stack. It supports two roles, secure authentication, application catalogue management, searching and filtering, review submission, download tracking, owner side administration, notification workflows, responsive design, and multi level testing.

The project was built with a strong focus on architecture, clarity, maintainability, and final presentation quality. As a result, it serves not only as a capstone submission but also as a professional full stack demonstration project. The final system is suitable for academic evaluation, viva discussion, and portfolio presentation.

29. REFERENCES

1. Great Learning Capstone Problem Statement, Play Store Application.
2. MongoDB Documentation.
3. Express.js Documentation.
4. React Documentation.
5. Material UI Documentation.
6. Mongoose Documentation.
7. JWT Documentation.
8. Jest Documentation.
9. Playwright Documentation.
10. Project source code and documentation files included in this repository.
