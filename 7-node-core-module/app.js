// Core module
// File System

const fs = require("fs");

// console.log(fs);

// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous!");
// } catch (e) {
//   console.log(e);
// }

// menuliskan file secara async

// fs.writeFile("data/test.txt", "hello world seraca asyncronous", (e) => {
//   console.log(e);
// });

//membaca file secara synchronous

// const data = fs.readFileSync("data/test.txt", "utf-8");
// console.log(data);

//membaca file secara Asynchronous

// fs.readFile("data/test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// ReadLine

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("masukan nama anda : ", (nama) => {
  rl.question("masukan umur anda : ", (umur) => {
    console.log(`terimakasih ${nama}`);
    console.log(`anda berumur ${umur} tahun`);
    rl.close();
  });
});
