import React from "react";

function BookCard({ title, author, price, viewMode }) {
  return (
    <div className={viewMode === "grid" ? "book-card-grid" : "book-card-list"}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Price:</strong> ₹{price}</p>
    </div>
  );
}

export default BookCard;