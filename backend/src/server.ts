import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.json({ test: "Hello World" });
});

server.listen(3000, () => console.log("Listening on port 3000..."));

