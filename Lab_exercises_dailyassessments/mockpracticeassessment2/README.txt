MockPracticeAssessment2 - Travel Booking Platform (Integrated React App)

Setup:
1. Open terminal in this project folder.
2. Install dependencies:
   npm install
3. Start JSON server (Terminal 1):
   npm run server
4. Start React app (Terminal 2):
   npm start

Routes:
- /home
- /packages
- /booking
- /contact

Main Features:
- Homepage with featured destinations and wishlist actions
- Packages page with API fetch (json-server)
- Booking form using Formik + Yup
- Global state via Context API (wishlist, selected package, bookings)
- Custom hook for booking submission
- Error boundary fallback UI
- PWA support with manifest + service worker registration
