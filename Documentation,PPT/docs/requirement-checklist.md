# Requirement Checklist

## Primary Reference Rule

The main source of truth is the Play Store capstone problem statement.

Where any secondary document differs, follow the capstone problem statement first.

## 1. Role Model

Required:

- user role
- owner role

Current status: Completed

Current implementation:

- only `user` and `owner` exist in the system
- frontend registration creates only `user` accounts
- seeded owner account is available for evaluation

## 2. Registration, Login, Logout

Required:

- register
- login
- logout

Current status: Completed

Implementation notes:

- frontend registration page is locked to normal user registration
- login works for both users and owners
- logout route and frontend logout flow are implemented

## 3. Search Applications by Name

Required: Yes

Current status: Completed

Implementation notes:

- Applications page supports search by name
- backend supports filtered search endpoints

## 4. Browse by Category

Required categories from brief:

- games
- beauty
- fashion
- women
- health

Current status: Completed

Additional current categories for richer dataset and UI coverage:

- social
- technology

## 5. Filter by Rating

Required: Yes

Current status: Completed

Implementation notes:

- minimum rating filter is available on the Applications page

## 6. View App Details

Required fields include:

- name
- description
- release date
- version
- rating
- genre

Current status: Completed

Implementation notes:

- App Details page shows these fields along with owner name, download count, and review section

## 7. Reviews and Comments

Required: Yes

Current status: Completed

Implementation notes:

- users can submit reviews
- app details page loads current reviews

## 8. Download Tracking

Required: Yes

Current status: Completed

Implementation notes:

- users can download an app once
- download records are stored
- owner notifications are generated

## 9. Owner CRUD on Applications

Required:

- create
- update
- delete
- manage visibility

Current status: Completed

Implementation notes:

- owner dashboard includes app actions
- Add App and Edit App pages are implemented
- visibility toggle is implemented with `public` and `hidden`

## 10. Owner Can See Downloads and Comments

Required: Yes

Current status: Completed

Implementation notes:

- owner dashboard shows recent downloads
- owner dashboard shows recent user comments

## 11. Owner Notifications on Download

Required: Yes

Current status: Completed

Implementation notes:

- download flow creates owner notifications

## 12. User Notifications on App Updates

Required: Yes

Current status: Completed

Implementation notes:

- owner update announcements create notifications for subscribed users

## 13. JWT Authentication

Required: Yes

Current status: Completed

Implementation notes:

- JWT token issued on login and register
- protected frontend and backend routes are implemented

## 14. Responsive UI

Required: Yes

Current status: Completed

Implementation notes:

- Material UI based responsive layout
- public app grids behave cleanly across desktop and mobile
- owner dashboard remains separate from the public card layout
- shared footer contact line appears consistently across the application

## 15. Testing

Required by project quality expectations: Yes

Current status: Completed

Current coverage:

- backend API tests
- frontend component and service tests
- frontend Playwright E2E smoke tests
- frontend build verification

Latest confirmed in current workspace:

- `npm run test:api` passed
- `npm run build --workspace frontend` passed

## 16. Documentation

Required for final delivery: Yes

Current status: Completed

Current documentation set:

- root README
- execution guide
- MongoDB guide
- Postman guide
- JWT guide
- GitHub guide
- thesis report
- architecture doc
- API doc
- this requirement checklist
- Codex handoff guide

## 17. Current Enhancements Beyond Core Brief

Enhancements included in the current implementation:

- owner-only User Management page
- owner can promote a `user` to `owner`
- owner can delete a normal `user` account
- current MongoDB dataset is preserved through a snapshot-based `seed.js`

These enhancements do not change the core role model because the system still uses only:

- `user`
- `owner`

## Final Summary

The project currently satisfies the capstone functional requirements and also includes owner-only user management and snapshot-based data recovery, while preserving the original two-role architecture.
