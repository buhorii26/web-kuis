// mendeklarasikan variable
const greeting = "Hello World!";
const nama_depan="Buhori";
const nama_belakang="Ganteng";
const nama_lengkap = nama_depan + ' ' + nama_belakang;
const usia = "26";
const status = "Single";
const pekerjaan = "Magang";

//Menampilkan data yg ada di variable menggunakan Template Manual yg bawah
console.log(greeting.replace('World', 'Ther') +' '+ 'nama saya' + ' ' + nama_lengkap + ' ' + 'umur saya' +' '+ usia +'. status saya' + ' ' +status+ ' ' +'pekerjaan'+' ' +pekerjaan);

//Menampilkan data yg ada di variable menggunakan Template Literals
console.log(`${greeting.replace('World', 'There')} Nama saya ${nama_lengkap} umur saya ${usia}. status saya ${status} pekerjaan ${pekerjaan}`);

//pembatas
console.log("----------------------------------------------------------------------------------------------------------");

//object math phi
console.log('ini adalah nilai PHI'+ ' ' +Math.PI);

//Object Math E
console.log('ini adalah nilai E'+ ' ' +Math.E);

//Nilai Math Absolute
console.log('ini adalah nilai Absolute dari -123'+ ' ' +Math.abs(-123));

//floor pembulatan ke bawah
console.log('ini adalah nilai floor 5.9 yg dibulatkan ke bawah menjadi'+ ' ' +Math.floor(5.9));

//round pembulatan ke atas
console.log('ini adalah nilai round 5.9 yg dibulatkan ke atas menjadi'+ ' ' +Math.round(5.9));

//nilai tan
console.log('nilai tan 10 adalah'+ ' ' +Math.sin(10));

//memunculkan nilai random
console.log('ini adalah nilai random 1'+ ' '+Math.random());
//memunculkan nilai random
console.log('ini adalah nilai random 2'+ ' '+Math.random());

//operator pembanding
console.log('apakah nilai 1 lebih besar dari 3?'+ ' ' + (1>3));

console.log('apakah nilai 1 lebih kecil dari 3?'+ ' ' + (1<3));

//function warning
console.warn("hati hati");


//code belajar
/*console.log(nama_lengkap.trim());
console.log(nama_lengkap.length);
console.log(typeof nama_lengkap);
console.log(nama_lengkap.indexOf("h"));
console.log(nama_lengkap.slice(7));
console.log(nama_lengkap.toUpperCase());*/
/*console.log(nama_lengkap[0]);
console.log(nama_lengkap[1]);
console.log(nama_lengkap[2]);
console.log(nama_lengkap[3]);
console.log(nama_lengkap[4]);
console.log(nama_lengkap[5]);
console.log(nama_lengkap[6]);*/
