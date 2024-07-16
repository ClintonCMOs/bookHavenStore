const express = require("express");
const { Book } = require("../models/bookModel.js");
const router = express.Router();

// Route for saving a new book
router.post("/", async (req, res) => {
  try {
    const { isbn, title, author, publishYear, price, imageUrl } = req.body;
    if (!isbn || !title || !author || !publishYear || !price || !imageUrl) {
      return res.status(400).send({ message: "Send all required fields" });
    }
    const newBook = await Book.create(req.body);
    return res.status(201).send(newBook);
  } catch (error) {
    console.error("Error Saving a new book:", error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for GET all books from the database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.error("Error fetching books:", error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for getting one book from the database
router.get("/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const book = await Book.findOne({ isbn });

    if (!book) {
      return res.status(404).json({ message: "Book not found." });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.error("Error fetching book:", error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for updating a book by ISBN
router.put("/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const { title, author, publishYear, price, imageUrl } = req.body;

    if (!isbn || !title || !author || !publishYear || !price || !imageUrl) {
      return res.status(400).send({
        message: "Send all required fields:",
      });
    }

    const updatedBook = await Book.findOneAndUpdate({ isbn }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found." });
    }

    return res
      .status(200)
      .json({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error("Error updating book:", error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for deleting a book by ISBN
router.delete("/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const deletedBook = await Book.findOneAndDelete({ isbn });

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found." });
    }

    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error.message);
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
