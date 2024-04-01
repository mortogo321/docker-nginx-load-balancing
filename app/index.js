const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is the server's response...");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Port ${port} Listening...`);
});
