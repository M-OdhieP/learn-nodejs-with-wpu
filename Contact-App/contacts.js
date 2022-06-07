const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// const tulisPertanyaan = (pertanyaan) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaan, (email) => {
//       resolve(email);
//     });
//   });
// };
const messages = (messege) => {
  console.log(chalk.red.inverse.bold(messege));
};

const loadContact = () => {
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };

  const contacts = loadContact();
  //   const file = fs.readFileSync("data/contacts.json", "utf-8");
  //   const contacts = JSON.parse(file);

  //cet duplikat
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    messages("contact sudah terdaftar, gunakan nama lain!");
    return false;
  }

  //cek Email
  if (email) {
    if (!validator.isEmail(email)) {
      messages("Email tidak valid!, silahkan coba lagi");
      return false;
    }
  }

  //cek NoHp
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    messages("Format Nomer HP tidak Valid!");
    return false;
  }

  contacts.push(contact);
  try {
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  } catch (e) {
    console.log(e);
  }

  console.log(chalk.green.inverse.bold("Terima Kasih Telah Memasukan Data"));
  console.log(contacts);
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.blue.inverse.bold("Daftar Kontak : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHp}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red.inverse.bold(`${nama} contact Tidak Ditemukan`));
    return false;
  }
  console.log(`${contact.nama} - ${contact.noHp}`);
  if (contact.email) {
    console.log(contact.email);
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();
  const newContact = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contacts.length === newContact.length) {
    console.log(
      chalk.red.inverse.bold(`${nama} yang ingin dihapus Tidak Ditemukan`)
    );
    return false;
  }
  try {
    fs.writeFileSync("data/contacts.json", JSON.stringify(newContact));
  } catch (e) {
    console.log(e);
  }

  console.log(chalk.green.inverse.bold(`${nama}, berhasil dihapus`));
  console.log(newContact);
};

module.exports = {
  simpanContact,
  listContact,
  detailContact,
  deleteContact,
};
