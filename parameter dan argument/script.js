function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b
}

var a = parseInt(prompt('masukkan nilai a: '));
var b = parseInt(prompt('masukkan nilai b: '));
var hasil = kali(tambah(a, b), tambah(3,4));

console.log(hasil)