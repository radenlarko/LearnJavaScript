// const kursus = {
//     paket : 'seo',
//     harga : 10000
// }

// console.log(kursus);
// console.log(kursus.harga);

function kursus() {
    this.paket = 'seo';
}

const seo = new kursus();
const digital = new kursus();

console.log(digital);