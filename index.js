const http = require("http");

const server = http.createServer(handleRequest).listen(4000);

function handleRequest(req, res) {
  if (req.url === "/") {
    res.end("homepage");
    return;
  }
  if (req.url === "/about") {
    res.end("abbout");
    return;
  }
  res.write("404");
  res.end();
}
