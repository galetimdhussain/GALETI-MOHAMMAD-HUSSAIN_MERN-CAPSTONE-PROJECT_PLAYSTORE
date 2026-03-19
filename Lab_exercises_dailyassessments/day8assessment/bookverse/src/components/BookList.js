import React, { useState } from "react";
import BookCard from "./BookCard";

function BookList() {

  const booksData = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho", price: 399 },
    { id: 2, title: "Atomic Habits", author: "James Clear", price: 499 },
    { id: 3, title: "Ikigai", author: "Hector Garcia", price: 299 },
    { id: 4, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 450 },
    { id: 5, title: "Wings of Fire", author: "A.P.J Abdul Kalam", price: 350 },
    { id: 6, title: "The Power of Now", author: "Eckhart Tolle", price: 399 },
    { id: 7, title: "The power of your subconscious mind", author: "Joseph Murphy", price: 299 },
    { id: 8, title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", price: 499 },
    { id: 9, title: "The art of war", author: "Sun Tzu", price: 599 }
  ];

  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = booksData.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Featured Books</h2>

      <input
        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setViewMode("grid")}>Grid View</button>
        <button onClick={() => setViewMode("list")}>List View</button>
      </div>

      <div className={viewMode === "grid" ? "grid-container" : "list-container"}>
        {filteredBooks.map(book => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            viewMode={viewMode}
          />
        ))}
      </div>
    </div>
  );
}

export default BookList;