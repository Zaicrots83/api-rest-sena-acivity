import Book from "../models/books.js";
import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
  res.send("Route working")
})

router.post("/books", async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

router.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.put("/books/:id", async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(book);
});

router.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.send("Libro eliminado");
});

export default router;