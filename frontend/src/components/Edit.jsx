import React, { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../apiConfig";

const Edit = () => {
  const [isbn, setIsbn] = useState("");
  const [book, setBook] = useState({
    isbn: "",
    title: "",
    author: "",
    publishYear: "",
    price: "",
    imageUrl: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle form input changes
  const handleChange = (event) => {
    const { id, value } = event.target;
    setBook({ ...book, [id]: value });
  };

  // Function to handle ISBN search
  const handleSearch = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/books/${isbn}`);
      setBook(response.data);
    } catch (error) {
      console.error("Error fetching book:", error);
      setErrorMessage("Book not found");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5555/books/${book.isbn}`,
        book
      );
      console.log("Book updated successfully:", response.data);
      // Update the success message
      setSuccessMessage("Book updated successfully!");
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
      console.error("Error updating book:", error);
      setErrorMessage(error.response?.data?.message || "Error updating book");
      // Clear the error message after 5 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="isbn-search">Search by ISBN</label>
        <input
          className="isbn-search-bar"
          type="text"
          id="isbn-search"
          name="isbn-search"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
        <button type="button" className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {errorMessage && <span className="error-message">{errorMessage}</span>}
      <form id="edit-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="isbn">ISBN</label>
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
          <label htmlFor="title">Title</label>
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
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="publishYear">Publish Year</label>
          <input
            type="month"
            id="publishYear"
            name="publishYear"
            value={book.publishYear}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            value={book.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={book.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          Update Book
        </button>
        {successMessage && (
          <span className="success-message">{successMessage}</span>
        )}
      </form>
    </div>
  );
};

export default Edit;
