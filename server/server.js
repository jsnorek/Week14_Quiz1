const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("build"));

const items = [
  {
    name: "Laptop",
    price: 500,
  },
  {
    name: "Desktop",
    price: 700,
  },
];

app.get("/api/items", (req, res) => {
  res.send(items);
});

app.listen(PORT, () => console.log("Server started"));