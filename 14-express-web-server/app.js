const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.sendFile("./index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br> Category ID : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send(`<h1>404</h1> page not found`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// const fs = require("fs");
// const http = require("http");

// const port = 3000;

// const renderHtml = (path, res) => {
//   fs.readFile(path, (e, data) => {
//     if (e) {
//       res.writeHead(404);
//       res.write("error: file not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-type": "text/html",
//     });

//     const url = req.url;

//     switch (url) {
//       case "/about":
//         renderHtml("./about.html", res);
//         break;
//       case "/contact":
//         renderHtml("./contact.html", res);
//         break;
//       default:
//         renderHtml("./index.html", res);
//         break;
//     }

//     // if (url === "/about") {
//     //   renderHtml("./about.html", res);
//     //   res.end();
//     // } else if (url === "/contact") {
//     //   renderHtml("./contact.html", res);
//     //   res.end();
//     // } else {
//     //   renderHtml("./index.html", res);
//     // }
//   })
//   .listen(port, () => {
//     console.log(`server is listening on port ${port}...`);
//   });
