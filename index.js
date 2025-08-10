const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 4000;

const rootHTMLPath = path.join(__dirname, "html_files/rootHTML.html");

app.get("/home", (req, res) => {
  res.status(200).send("Home sweet Home sweet !");
});

app.get("/", (req, res) => {
  const content = fs.readFileSync(rootHTMLPath, "utf8");
  res.status(200).type("html").send(content);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
