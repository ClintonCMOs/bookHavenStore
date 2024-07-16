const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/bookModel.js");
const User = require("./models/userModel.js");
const booksRoute = require("./routes/booksRoute.js");
const usersRoute = require("./routes/usersRoute.js");

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

//middleware for parsing request body
app.use(express.json());
// Middleware for enabling CORS
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to BookHaven website");
});

app.use("/books", booksRoute);
app.use("/users", usersRoute);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("Connected to Database");
    // listen is a function of Express to start a server and listen to
    // incoming connections with a callback function as second argument that gets
    // executed when server starts
    app.listen(process.env.PORT, () => {
      console.log(`App is running on port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
