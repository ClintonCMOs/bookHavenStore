import express from "express";
import mongoose from "mongoose";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route for saving a new book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.isbn ||
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear ||
      !request.body.price ||
      !request.body.imageUrl
    ) {
      return response.status(400).send({
        message: "Send all required fields:",
      });
    }

    const newBook = {
      isbn: request.body.isbn,
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      price: request.body.price,
      imageUrl: request.body.imageUrl,
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for GET all books from the database
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for getting one book from the database
router.get("/:isbn", async (request, response) => {
  try {
    const { isbn } = request.params;
    const books = await Book.findOne({ isbn: isbn });

    return response.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for updating a book by ISBN
router.put("/:isbn", async (request, response) => {
  try {
    const { isbn } = request.params;

    if (
      !request.body.isbn ||
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear ||
      !request.body.price ||
      !request.body.imageUrl
    ) {
      return response.status(400).send({
        message: "Send all required fields:",
      });
    }

    const result = await Book.findOneAndUpdate({ isbn }, request.body, {
      new: true,
    });

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }

    return response
      .status(200)
      .json({ message: "Book updated successfully", book: result });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for deleting a book by ISBN
router.delete("/:isbn", async (request, response) => {
  try {
    const { isbn } = request.params;
    const result = await Book.findOneAndDelete({ isbn });

    if (!result) {
      return response.status(404).json({ message: "Book not found" });
    }
    return response.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

export default router;
