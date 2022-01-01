// // membuat variabel
// let myNumber = 16;
// let myString = "Hello"
// let myBoolean = true
// const phi = 3.14
// // menampilkan informasi ke console
// console.log(myNumber)
// console.log(myString)
// console.log(myBoolean)
// console.log(phi)
// // menampilkan informasi dalam bentuk alert pada window
// window.alert("Angka favorit saya adalah : " + myNumber)
// window.alert('Angka favorit saya adalah : ' + myNumber)
// window.alert(`Angka favorit saya adalah : ${myNumber}`)

// let x = 7
// let y = 2
// console.log(x, y)
// console.log('x + y =', x + y)
// console.log('x - y =', x - y)
// console.log('x * y =', x * y)
// console.log('x / y =', x / y)
// console.log('x % y =', x % y)
// console.log('x++ =', x++)
// console.log('++x =', ++x)
// console.log('x-- =', x--)
// console.log('--x =', --x)

// // Latihan 5.2: Melakukan operasi sederhana dengan operator aritmatika

// let a = 7
// let b = 2
// console.log(a, b)
// console.log('a > b =', a > b)
// console.log('a < b =', a < b)
// console.log('a >= b =', a >= b)
// console.log('a <= b =', a <= b)
// console.log('a == b =', a == b)
// console.log('a != b =', a != b)
// console.log('a === b =', a === b)
// console.log('a !== b =', a !== b)

// Latihan 5.3: Melakukan operasi sederhana dengan operator perbandingan

// console.log('true && true =', true && true)
// console.log('true && false =', true && false)
// console.log('false && true =', false && true)
// console.log('false && false =', false && false)
// console.log('true || true =', true || true)
// console.log('true || false =', true || false)
// console.log('false || true =', false || true)
// console.log('false || false =', false || false)
// console.log('!true =', !true)
// console.log('!false =', !false)

// //Latihan 5.4: Melakukan operasi sederhana dengan operator logika

//fungsi luas persegi
// function luas_persegi(s){
//     return s * s
// }

// //fungsi luar segitiga
// function luas_segitiga (a, t){
//     return 0.5 * a * t
// }

// //fungsi volume blok 
// function volume_balok(p,l,t){
//     return p * l * t
// }

// //menampilkan hasil ke consol
// console.log("luas persegi = " + luas_persegi(7))
// console.log("luas segitiga = " + luas_segitiga(4,7))
// console.log("volume baok = " + volume_balok(2,9,4))

// //Latihan 5.5. Membuat Fungsi


// array dengan nama-nama hewan
var animals = ["kucing", "harimau", "gajah", "burung", "ikan paus"];

// menampilkan array
console.log("data array belum diubah")
console.log(animals)

// ganti elemen array di index 1
animals[1] = "merpati";

// menampilkan array ke console
console.log("data array setelah diubah")
console.log(animals)

// menambahkan item baru ke array
animals.push("tikus")

// menampilkan array ke console
console.log("item baru ditambahkan")
console.log(animals)

console.log("menghilangkan data")
console.log(animals.pop())
console.log(animals)
console.log("jumlah data = "+ animals.length)

// menambahkan data array menggunakan unshift()
animals.unshift("kerbau")

// menampilkan data array
console.log("menampilkan data array menggunakan unshift()")
console.log(animals)

// menghilangkan data pertama array menggunakan shift()
console.log("menghilangkan data pertama menggunakan shift")
console.log(animals.shift())

// mengurutkan data array menggunakan sort()
console.log("mengurutkan data array menggunakan sort")
console.log(animals.sort())

// mengurutkan data array tapi terbalik menggunakan reverse()
console.log("mengurutkan data array menggunakan reverse")
console.log(animals.reverse())

// menampilkan data array
console.log("data array")
console.log(animals)

//Latihan 5.6: Bermain dengan array