# Mock-2 Practice Assessment - React

## Project Name
Travel Booking Platform

## Objective
This project was built as one integrated React application for the mock practice assessment.  
All three user stories are combined into one flow:
 
Home page -> Packages page -> Booking form

The app demonstrates React basics, routing, API integration, Context API state management, Formik and Yup form handling, custom hooks, error boundary handling, and PWA support.

## Tech Stack Used
- React (Create React App)
- React Router DOM
- Bootstrap
- Axios
- Formik
- Yup
- PropTypes
- json-server

## Dependencies Used
Main dependencies installed:
- `react`
- `react-dom`
- `react-scripts`
- `react-router-dom`
- `bootstrap`
- `axios`
- `formik`
- `yup`
- `prop-types`
- `react-transition-group`
- `web-vitals`

Dev dependency:
- `json-server`

## Project Setup Steps
1. Create app using CRA:
   - `npx create-react-app mockpracticeassessment2`
2. Install required packages:
   - `npm install react-router-dom formik yup prop-types bootstrap axios react-transition-group`
   - `npm install -D json-server`
3. Add `db.json` for package and booking mock data.
4. Add scripts in `package.json` for React app and json-server.
5. Build modules in shared architecture with reusable components.

## How to Run the Project
Open terminal in:
`d:\HUSSAIN\HUSSAIN\WIPRO PRESKILL\mockpracticeassessment2`

Run in 2 terminals:

Terminal 1:
```bash
npm run server
```

Terminal 2:
```bash
npm start
```

Open browser:
- `http://localhost:3000/home`

API endpoint:
- `http://localhost:4000/packages`

## Routes Implemented
- `/home`
- `/packages`
- `/booking`
- `/contact`
- `/` redirects to `/home`
- `*` for Not Found page

## Folder Structure (Main)
```text
mockpracticeassessment2/
|-- db.json
|-- package.json
|-- public/
|   |-- manifest.json
|-- src/
|   |-- App.js
|   |-- index.js
|   |-- serviceWorkerRegistration.js
|   |-- components/
|   |   |-- common/
|   |   |   |-- Header.jsx
|   |   |   |-- Footer.jsx
|   |   |   |-- Loader.jsx
|   |   |-- home/
|   |   |   |-- DestinationCard.jsx
|   |   |-- packages/
|   |   |   |-- PackageCard.jsx
|   |   |   |-- PackageList.jsx
|   |   |-- booking/
|   |   |   |-- BookingForm.jsx
|   |-- pages/
|   |   |-- HomePage.jsx
|   |   |-- PackagesPage.jsx
|   |   |-- BookingPage.jsx
|   |   |-- ContactPage.jsx
|   |   |-- NotFoundPage.jsx
|   |-- routes/
|   |   |-- AppRoutes.jsx
|   |-- context/
|   |   |-- BookingContext.jsx
|   |   |-- bookingReducer.js
|   |-- hooks/
|   |   |-- useBookingSubmission.js
|   |-- services/
|   |   |-- api.js
|   |-- validation/
|   |   |-- bookingSchema.js
|   |-- error/
|   |   |-- ErrorBoundary.jsx
|   |-- data/
|   |   |-- featuredDestinations.js
```

## User Story 1 - Homepage and Destination Showcase
Implemented items:
- Functional components for Header, DestinationCard, and Footer
- JSX with props for destination card rendering
- Wishlist button with React state handling (managed through Context API so count is shared globally)
- Bootstrap based responsive layout

Output behavior:
- Home page shows featured destinations
- User can add or remove destination from wishlist
- Wishlist count updates in navbar

## User Story 2 - Packages and Routing with Data Integration
Implemented items:
- React Router setup for `/home`, `/packages`, `/contact`, `/booking`
- Data fetching from json-server using Axios
- `useEffect` used for lifecycle based package loading
- Dynamic package rendering through reusable `PackageList` and `PackageCard` components
- Route transition effect through CSS animation
- PropTypes validation in reusable card/list components

Output behavior:
- Packages page loads package list from API
- "Book Now" selects package and redirects to booking page

## User Story 3 - Booking Form and Advanced State Handling
Implemented items:
- Form built using Formik
- Validation rules implemented using Yup
- Global app state managed through Context API and reducer
- Custom hook `useBookingSubmission` for booking submit logic
- Error Boundary to catch component render errors
- PWA support with manifest updates and service worker registration logic

Output behavior:
- Booking form validates all required fields
- Selected package details are used in booking form
- Booking saved to `/bookings` in json-server

## Global State Design
Context stores:
- `wishlist`
- `selectedPackage`
- `bookings`

Reducer actions:
- `TOGGLE_WISHLIST`
- `SET_SELECTED_PACKAGE`
- `ADD_BOOKING`
- `CLEAR_SELECTED_PACKAGE`

This allows clean data flow between pages without prop drilling.

## API Design (db.json)
Collections used:
- `packages`
- `bookings`

`packages` is fetched in Packages page.  
`bookings` is updated when user submits booking form.

## Reusability and Code Quality
Code is split into:
- Page components for route-level screens
- Reusable UI components for cards, header, footer, loader
- Dedicated files for API, validation, context, hook, and reducer

This keeps the project modular and easy to read.

## Troubleshooting Notes
If json-server does not start:
1. Check if port 4000 is already in use.
2. Stop the process using:
   - `taskkill /PID <pid> /F`
3. Start again:
   - `npm run server`

If React page is blank:
1. Confirm `npm start` is running from correct folder.
2. Open `http://localhost:3000/home` directly.
3. Check browser console for runtime errors.

## Summary
This project meets all three user stories in a single integrated React app.  
It includes shared architecture, reusable components, routing, API integration, form validation, global state management, and PWA-ready setup.
