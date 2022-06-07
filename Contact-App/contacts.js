const fs = require("fs");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (email) => {
      resolve(email);
    });
  });
};

const simpanContact = (nama, email, noHp) => {
  const contact = { nama, email, noHp };

  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  contacts.push(contact);
  try {
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  } catch (e) {
    console.log(e);
  }

  console.log("Terima Kasih Telah Memasukan Data");

  console.log(contacts);

  rl.close();
};

module.exports = {
  tulisPertanyaan,
  simpanContact,
};
