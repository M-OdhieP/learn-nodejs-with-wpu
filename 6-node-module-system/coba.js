// const nama = "odhie";
// const umur = 23;
// const sayHello = (nama, umur) => {
//   console.log(`Hi, nama saya ${nama}, dan berumur ${umur} tahun. `);
// };

const cetakNama = (nama) => `Hi nama Saya ${nama}`;

const pi = 3.14;

const mahasiswa = {
  nama: "Muhamad Odhie Prasetio",
  umur: 23,
  cetakMhs() {
    return `halo, nama saya ${this.nama}, dan saya berumur ${this.umur} tahun`;
  },
};

class Odhie {
  constructor() {
    console.log("Object Odhie Telah dibuat!!");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.pi = pi;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Odhie = Odhie;

module.exports = {
  cetakNama,
  pi,
  mahasiswa,
  Odhie,
};
