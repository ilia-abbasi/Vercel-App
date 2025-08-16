const http = require("http");
const port = 4000;
const server = http.createServer(handleRequest);

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

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
