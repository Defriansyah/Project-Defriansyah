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
function luas_persegi(s){
    return s * s
}

//fungsi luar segitiga
function luas_segitiga (a, t){
    return 0.5 * a * t
}

//fungsi volume blok 
function volume_balok(p,l,t){
    return p * l * t
}

//menampilkan hasil ke consol
console.log("luas persegi = " + luas_persegi(7))
console.log("luas segitiga = " + luas_segitiga(4,7))
console.log("volume baok = " + volume_balok(2,9,4))