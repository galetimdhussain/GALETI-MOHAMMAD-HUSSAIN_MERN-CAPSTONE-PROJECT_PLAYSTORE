# README_EXECUTION

## Purpose

This file explains how to install, run, seed, and verify the current Play Store MERN capstone project.

## 1. Prerequisites

Install these tools before starting:

- Node.js 18 or later
- npm
- MongoDB Community Server running locally on `mongodb://127.0.0.1:27017`
- Git if you also want version control and GitHub push support

## 2. Install Dependencies

Run installation once from the project root because this repository uses npm workspaces.

```powershell
npm install  (run this from root folder of project)
```

## 3. Environment Files

Create these files if they are missing.

### backend/.env

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/playstore_capstone
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

### frontend/.env

```env
REACT_APP_API_BASE_URL=http://localhost:5000/api
```

## 4. Seed the Database

Run the seed from the root workspace.

```powershell
npm run seed
```

Important current behavior:

- `database/seed.js` now stores a snapshot of the current live MongoDB data
- running `npm run seed` restores that snapshot instead of the older demo-only insert script
- the seed preserves MongoDB ids and document relationships across collections

Current snapshot result:

- 7 categories
- 5 users
- 16 applications
- 16 reviews
- 17 downloads
- 13 notifications
- 16 public applications
- 0 hidden applications

Known root owner login in the current snapshot:

- `hussaingaleti786@gmail.com / Hussain@786`

## 5. Start the Full Project

Run both backend and frontend together from the root.

```powershell
npm run dev
```
Use:

"npm run dev --workspace backend"
That starts just the backend workspace, typically on `http://localhost:5000`.

If you want only the frontend:
"npm run start --workspace frontend" -> frontend on `http://localhost:3000`

If you want both together from the root:
"npm run dev"


This starts:

- backend on `http://localhost:5000`
- frontend on `http://localhost:3000`

## 6. Main URLs

### Frontend

- `http://localhost:3000/`
- `http://localhost:3000/apps`
- `http://localhost:3000/login`
- `http://localhost:3000/register`
- `http://localhost:3000/owner`
- `http://localhost:3000/owner/users`

### Backend

- `http://localhost:5000/`
- `http://localhost:5000/api`
- `http://localhost:5000/api/health`

## 7. Current Role Rules

The implemented project supports only two roles:

- `user`
- `owner`

Important behavior:

- the frontend registration page creates only `user` accounts
- owner accounts are seeded and available in MongoDB
- owners can promote an existing `user` to `owner` from the User Management page
- owners can delete a `user` account from the User Management page
- owner accounts cannot be deleted from that panel

## 8. Current Seeded Data Notes

The current snapshot includes one root owner account and multiple user accounts. Because the snapshot was copied from the live MongoDB database, any future live database edits will not automatically update `seed.js` unless the snapshot export process is run again.

## 9. Test and Verification Commands

### Backend API tests

```powershell
npm run test:api
```

What it verifies:

- auth registration and login flow
- logout flow
- owner app creation
- review creation
- download creation
- notification flow
- owner user-management promotion flow
- owner user-management delete flow

Important test note:

- on Windows, the suite uses the local MongoDB fallback directly for stability
- on other environments, `mongodb-memory-server` may be used when available

### Frontend component and service tests

```powershell
npm run test:component
```

### Frontend E2E tests

```powershell
npm run test:e2e
```

### Frontend production build

```powershell
npm run build --workspace frontend
```

Latest verified in the current workspace:

- `npm run test:api` passed
- `npm run build --workspace frontend` passed

## 10. Manual Smoke Check

After `npm run dev`, verify this flow:

1. Open `http://localhost:3000`
2. Confirm the home page loads featured applications
3. Open the Applications page and test search and filters
4. Login as the root owner account
5. Open the Owner Dashboard and verify app controls, downloads, and reviews
6. Open User Management and confirm the page shows both promote and delete actions for normal users
7. Login as a normal user and verify app details, review submission, download flow, and notifications
8. Confirm the shared footer contact line appears across pages

## 11. Troubleshooting
### Port conflict

If port `3000` or `5000` is already in use, stop the conflicting process or change the port in the environment settings.

## 12. MongoDB connection 

Check that MongoDB is running locally.

```powershell
mongosh
```
and then 
run 
npm run seed so that it may create a database there in mongodb compass and then connect to that and start running server.





