// console.log(process.argv);

const { argv } = require("process");
const yargs = require("yargs");

yargs.command(
  "add",
  "Menambahkan Contact Baru",
  () => {},
  (argv) => {}
);

console.log(yargs.argv);

// const contacts = require("./contacts");

// const main = async () => {
//   const nama = await contacts.tulisPertanyaan("Masukan Nama Anda : ");
//   const email = await contacts.tulisPertanyaan("Masukan Email Anda : ");
//   const noHp = await contacts.tulisPertanyaan(
//     "Masukan Nomer Telephone Anda : "
//   );

//   contacts.simpanContact(nama, email, noHp);
// };

// main();
