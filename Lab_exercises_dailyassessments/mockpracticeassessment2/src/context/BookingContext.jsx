import { createContext, useContext, useMemo, useReducer } from "react";
import bookingReducer, { initialBookingState } from "./bookingReducer";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [state, dispatch] = useReducer(bookingReducer, initialBookingState);

  const value = useMemo(
    () => ({
      ...state,
      toggleWishlist: (item) =>
        dispatch({ type: "TOGGLE_WISHLIST", payload: item }),
      setSelectedPackage: (selectedPackage) =>
        dispatch({ type: "SET_SELECTED_PACKAGE", payload: selectedPackage }),
      addBooking: (bookingData) =>
        dispatch({ type: "ADD_BOOKING", payload: bookingData }),
      clearSelectedPackage: () => dispatch({ type: "CLEAR_SELECTED_PACKAGE" }),
    }),
    [state]
  );

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }
  return context;
}
