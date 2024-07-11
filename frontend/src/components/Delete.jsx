import React, { useState } from "react";
import axios from "axios";
import BACKEND_URL from "../apiConfig";

const Delete = () => {
  const [bookIsbn, setbookIsbn] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setbookIsbn(e.target.value);
    setMessage("");
  };

  const handleDelete = async () => {
    if (!bookIsbn.trim()) {
      setMessage("Please enter a valid book Isbn");
      return;
    }

    try {
      await axios.delete(`${BACKEND_URL}/books/${bookIsbn}`);
      setMessage(`Book with Isbn "${bookIsbn}" has been deleted successfully.`);
      setbookIsbn("");
    } catch (error) {
      console.error("Error deleting book:", error);
      setMessage(
        `Error: ${
          error.response?.data?.message || "Could not delete the book."
        }`
      );
    }
  };

  const handleBack = () => {
    // Implement navigation back to the book list or previous page
    console.log("Navigate back");
    // If using react-router, you would use navigate(-1) here
  };

  return (
    <div className="delete-book-container">
      <div className="form-group">
        <label htmlFor="book-isbn">Book ISBN</label>
        <input
          type="text"
          id="book-isbn"
          name="book-isbn"
          value={bookIsbn}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="button-group">
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
        <button onClick={handleBack} className="btn btn-secondary">
          Back
        </button>
      </div>
      {message && (
        <p
          className={
            message.includes("Error") ? "error-message" : "success-message"
          }
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Delete;
