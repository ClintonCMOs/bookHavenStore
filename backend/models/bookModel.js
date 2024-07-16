const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  isbn: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishYear: { type: Number, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
