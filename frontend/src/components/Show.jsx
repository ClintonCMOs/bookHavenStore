import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Show = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5555/books")
      .then((response) => response.json())
      .then((data) => setBooks(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="books-container">
      <div className="books-header">
        <p className="books-count">Total Books: {books.length}</p>
      </div>
      <table className="book-table">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Isbn</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>
                <img
                  src={book.coverImage || "../src/assets/bookcover1.png"}
                  alt={book.title}
                  className="book-cover"
                />
              </td>
              <td className="book-title">{book.title}</td>
              <td className="book-author">{book.author}</td>
              <td className="book-category">{book.isbn}</td>
              <td className="book-year">{book.publishYear.slice(0, 4)}</td>
              <td>
                <Link to="#" className="view-book">
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Show;
