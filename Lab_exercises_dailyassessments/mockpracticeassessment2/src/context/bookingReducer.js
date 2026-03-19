export const initialBookingState = {
  wishlist: [],
  selectedPackage: null,
  bookings: [],
};

function isSameItem(left, right) {
  return String(left.id) === String(right.id);
}

export default function bookingReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_WISHLIST": {
      const item = action.payload;
      const exists = state.wishlist.some((wishItem) => isSameItem(wishItem, item));
      return {
        ...state,
        wishlist: exists
          ? state.wishlist.filter((wishItem) => !isSameItem(wishItem, item))
          : [...state.wishlist, item],
      };
    }
    case "SET_SELECTED_PACKAGE":
      return {
        ...state,
        selectedPackage: action.payload,
      };
    case "ADD_BOOKING":
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    case "CLEAR_SELECTED_PACKAGE":
      return {
        ...state,
        selectedPackage: null,
      };
    default:
      return state;
  }
}
