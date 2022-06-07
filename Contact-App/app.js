// console.log(process.argv);
const { argv } = require("process");
const yargs = require("yargs");
const contacts = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "No Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

//menampilkan daftar semua nama dan no hp contact

yargs.command({
  command: "list",
  describe: "menampilkan daftar semua nama & no hp contact",
  handler() {
    contacts.listContact();
  },
});

//menampil detail sebuah kontak
yargs.command({
  command: "detail",
  describe: "menampilkan detail sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.detailContact(argv.nama);
  },
});

//menghapus sebuah kontak
yargs.command({
  command: "delete",
  describe: "delete sebuah kontak berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    contacts.deleteContact(argv.nama);
  },
});
yargs.parse();
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
