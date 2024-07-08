import React, { useState, useEffect } from "react";
import axios from "axios";
const Add = () => {
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    author: "",
    publishYear: "",
    price: "",
    imageUrl: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  // Function to handle form input changes
  const handleChange = (event) => {
    const { id, value } = event.target;
    setBook({ ...book, [id]: value });
  };
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5555/books", book);
      console.log("Book added successfully:", response.data);
      // Update the success message
      setSuccessMessage("Book added successfully!");
      // Clear the form
      setBook({
        isbn: "",
        title: "",
        author: "",
        publishYear: "",
        price: "",
        imageUrl: "",
      });

      // Set a timer to clear the success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <form id="add-book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="isbn">isbn</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={book.isbn}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={book.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="publishYear">publishYear</label>
        <input
          type="Month"
          id="publishYear"
          name="publishYear"
          value={book.publishYear}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="price">price</label>
        <input
          type="text"
          id="price"
          name="price"
          value={book.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">imageUrl</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={book.imageUrl}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn">
        Add Book
      </button>
      {successMessage && (
        <span className="success-message">{successMessage}</span>
      )}
    </form>
  );
};

export default Add;
