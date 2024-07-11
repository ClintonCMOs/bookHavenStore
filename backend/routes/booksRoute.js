import express from "express";
import mongoose from "mongoose";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route for saving a new book
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.isbn ||
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.price ||
      !req.body.imageUrl
    ) {
      return res.status(400).send({
        message: "Send all required fields:",
      });
    }

    const newBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
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
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for getting one book from the database
router.get("/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const books = await Book.findOne({ isbn: isbn });

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for updating a book by ISBN
router.put("/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;

    if (
      !req.body.isbn ||
      !req.body.title ||
      !req.body.author ||
      !req.body.publishYear ||
      !req.body.price ||
      !req.body.imageUrl
    ) {
      return res.status(400).send({
        message: "Send all required fields:",
      });
    }

    const result = await Book.findOneAndUpdate({ isbn }, req.body, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res
      .status(200)
      .json({ message: "Book updated successfully", book: result });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

// Route for deleting a book by ISBN
router.delete("/:isbn", async (req, res) => {
  try {
    const { isbn } = req.params;
    const result = await Book.findOneAndDelete({ isbn });

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

export default router;
