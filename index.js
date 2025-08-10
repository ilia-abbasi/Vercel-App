const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 4000;

// HTML file paths

const rootHTMLPath = path.join(__dirname, "html_files/root.html");
const ssimionHTMLPath = path.join(__dirname, "html_files/ssimion.html");
const theHTMLPath = path.join(__dirname, "html_files/the.html");
const path2HTMLPath = path.join(__dirname, "html_files/path2.html");
const facilityHTMLPath = path.join(__dirname, "html_files/facility.html");

// Handling different routes

app.get("/", (req, res) => {
  const content = fs.readFileSync(rootHTMLPath, "utf8");
  res.status(200).type("html").send(content);
});

app.get("/ssimion", (req, res) => {
  const content = fs.readFileSync(ssimionHTMLPath, "utf8");
  res.status(200).type("html").send(content);
});

app.get("/the", (req, res) => {
  const content = fs.readFileSync(theHTMLPath, "utf8");
  res.status(200).type("html").send(content);
});

app.get("/path2", (req, res) => {
  const content = fs.readFileSync(path2HTMLPath, "utf8");
  res.status(404).type("html").send(content);
});

app.get("/totallynotasecretfacility", (req, res) => {
  const content = fs.readFileSync(facilityHTMLPath, "utf8");
  res.status(404).type("html").send(content);
});

// Log to show server is running

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Handling 404 responses

app.use((req, res, next) => {
  res
    .status(404)
    .type("html")
    .send(
      "<h1>404 - Page Not Found</h1><p>The page you requested does not exist.</p>"
    );
});

module.exports = app;
