// console.log('Sebelum pembanding');
// if (1 + 1 === 3){
//     console.log('Perhitungannya Masih betul');
// }
// console.log('Setelah pembanding');

// const angka=Math.random();
// console.log(angka);

// if(angka >=0.5){
//     console.log("angka lebih besar dari 0.5");
// }
// if(angka <=0.5){
//     console.log("angka lebih kecil dari 0.5");
// }

/*const HariIni = prompt("Isikan hari ini").toLowerCase();

if(HariIni === "Senin") {
    console.log("Selamat Bekerja");
} else if (HariIni === "Sabtu"){
    console.log("Jangan cepat berlalu");
} else {
    console.log("b aja");
}*/

/*const nilai ="80";
if (nilai<30){
    console.log('Nilai E');
} else if (nilai<50){
    console.log('Nilai D');
} else if (nilai<70){
    console.log('Nilai C');
} else if (nilai<80){
    console.log('Nilai B');
} else if (nilai<99){
    console.log('Nilai A');
}*/

//const Password = prompt("masukkan password");
// //Password harus sepanjang 6 karakter
// if(Password.length >= 6){
//     if (Password.indexOf(' ')=== -1){
//         console.log("Password valid");
//        // console.log("Password tidak ada spasi");
//     } else {
//         console.log("Password tidak boleh ada spasi");
//     }
// } else{
//     console.log("Password harus 6 karakter");
// }

//operator logika AND
//const Password = prompt("masukkan password");
// if(Password.length >=6 && Password.indexOf(' ') === -1){
//     console.log("Password Valid");
// } else {
//     console.log("Password tidak memenuhi syarat");
// }

//operator logika OR
// const role = prompt("Masukan role akun");
// if(role === "admin" || role === "spv"){
//     console.log("bisa akses");
// }else{
//     console.log("akses ditolak");
// }

//operator logika NOT
// const role = prompt("Masukan role akun");
// if(role !== "Admin"){
//     console.log("Akses ditolak");
// }else {
//     console.log("akses diterima");
// }

//Switch Pada javascript
// const Makanan = prompt("input makanan kesukaan");
// switch(Makanan){
// case "nasi goreng":
//     console.log("saya suka nasi goreng");
//     break;
// case "bakmi":
//         console.log("saya juga mie ayam");
//         break;
//         case "sushi":
//         console.log("saya juga sushi");
//         break;
//         case "takoyaki":
//         console.log("saya juga takoyaki");
//         break;
//         default:
//             console.log("bukan makanan kesukaan saya");
// }
// const board = [ [null, null, 'O'],
//                 ['X', 'O', null],
//                 ['O', null, 'X'] ];

//                 console.log(board[1][0]);

//membuat sebuah object
// const product = {
//     judul: 'Sepatu',
//     harga: 700000,
//     inStock:true,
//     size: ['38',39,40,41,42],
//     locationStock:{
//         indonesia:5000,
//         singapore:2000
//     }
// }

// console.log(product.locationStock.indonesia); //memanggil object dengan sepisifikasi tertentu
// console.log(product.merk = 'adidas');
// console.log(product.madeIn = {
//     asia:'china',
//     eropa:'france'
// });
// console.log(product);

// const shoppingCart = [
//     {
//         product: 'sepatu',
//         merk: 'adidas',
//         price: 500000,
//         qty: 10
//     },
//     {
//         product: 'sepatu',
//         merk: 'nike',
//         price: 700000,
//         qty: 8
//     },
//     {
//         product: 'sepatu',
//         merk: 'puma',
//         price: 800000,
//         qty: 12
//     },
// ]

// console.log(shoppingCart[0].product,shoppingCart[0].merk,shoppingCart[0].price); //memanggil object didalam array
// console.log(shoppingCart[1].product,shoppingCart[1].merk,shoppingCart[1].price); //memanggil object didalam array
// console.log(shoppingCart);

//sintaks pengulangan for
// for(let i =1; i <=10; i++){
//     console.log(i);
//     console.log('saya ada di dalam loop');
// }
// for(let i =0; i <=20; i +=10){
//     console.log(i);
// }
// const animals = ["kucing", "anjing", "ayam", "gajah", "burung"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }

// const pilihan = "abcd";
// for (let i = 1; i <= 20; i++) {
//   console.log(`${i}. Soal nomor ${i}:`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(` ${pilihan[j]}. Pilihan Jawaban`);
//   }
// }

// let angka =0;
// while (angka < 10){
//     console.log(angka);
//     angka++;
// }

// const PASSWORD="Pass123";
// let guess = prompt("Masukkan Password");
// while(guess !==PASSWORD) {
//     guess = prompt("Masukkan Password");
// }
// alert("Sukses!Password sama");

// let input = prompt("hei, something");
// while (true) {
//   input = prompt(input);
//   if (input === "Stop") break;
// }

// alert("Ok Success");

// let maksimal = parseInt(prompt("Masukkan Nilai Maksimal!"));
// while (!maksimal) {
//   maksimal = parseInt(prompt("Masukkan Nilai Maksimal!"));
// }

// const targetNum = Math.floor(Math.random() * maksimal) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Isi tebakan pertama kamu !"));
// let percobaan = 1;

// while (parseInt(guess) !== targetNum) {
//   percobaan++;
//   if (guess > targetNum) {
//     guess = parseInt(prompt("Terlalu Tinggi! coba tebak lagi:"));
//   } else {
//     guess = parseInt(prompt("Terlalu Rendah! coba tebak lagi:"));
//   }
// }

// alert(`Selamat Tebakkan Anda Benar! Dalam percobaan yang ke ${percobaan} kali`);

// const PASSWORD="Pass123";
// let guess = prompt("Masukkan Password");
// while(guess !==PASSWORD) {
//     guess = prompt("Masukkan Password");
// }
// alert("Sukses!Password sama");

const PresidenASList = [
  [
    "Bill Clinton",
    "George W. Bush",
    "Barack Obama",
    "Donald Trump",
    "Joe Biden",
  ],
];
// for (let i = 0; i < PresidenASList.length; i++) {
//   const row = PresidenASList[i];
//   console.log(`HeroList #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     alert(`   ${row[j]}`);
//   }
// }
for (let row of PresidenASList) {
  for (let Presiden of row) {
    alert(Presiden);
  }
}
const PresidenAS = "Barack Obama";
console.log(PresidenAS);
let guess = prompt(
  "Presiden Amerika Serikat yg ke 44 siapa hayo. *Perhatikan huruf besar dan kecilnya harus sesuai."
);
let percobaan = 1;
while (guess !== PresidenAS) {
  guess = prompt("salah! coba tebak lagi!");
  percobaan++;
}
alert(`Selamat Tebakkan Kamu Benar! Dalam percobaan yang ke ${percobaan} kali`);
