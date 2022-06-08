const fs = require("fs");
const http = require("http");

const port = 3000;

const renderHtml = (path, res) => {
  fs.readFile(path, (e, data) => {
    if (e) {
      res.writeHead(404);
      res.write("error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    const url = req.url;

    switch (url) {
      case "/about":
        renderHtml("./about.html", res);
        break;
      case "/contact":
        renderHtml("./contact.html", res);
        break;
      default:
        renderHtml("./index.html", res);
        break;
    }

    // if (url === "/about") {
    //   renderHtml("./about.html", res);
    //   res.end();
    // } else if (url === "/contact") {
    //   renderHtml("./contact.html", res);
    //   res.end();
    // } else {
    //   renderHtml("./index.html", res);
    // }
  })
  .listen(port, () => {
    console.log(`server is listening on port ${port}...`);
  });
