import express, { response } from "express";

import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();
const app = express();
//middleware for parsing request body
app.use(express.json());
app.use(cors());
const PORT = 5555;

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome to my BookHaven website");
});

app.use("/books", booksRoute);

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log("Connected to Database");
    // listen is a function of Express to start a server and listen to
    // incoming connections with a callback function as second argument that gets
    // executed when server starts
    app.listen(PORT, () => {
      console.log(`App is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
