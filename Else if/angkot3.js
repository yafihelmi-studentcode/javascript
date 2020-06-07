var jumlahangkot = 10;
var angkotberoprasi = 6;

for (var noangkot = 1; noangkot <= jumlahangkot; noangkot++) {
    if (noangkot <= 6) {
        console.log('Angkot No. ' + noangkot + ' beroprasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noangkot + ' sedang tidak beroprasi.');
    }
}

var angka = prompt('Masukkan Angka')
if (angka % 2 === 0) {
    alert(angka + ' adalah bilangan genap')
} else if ( angka % 2 === 1) {
    alert(angka + ' adalah bilangan ganjil')
} else {
    alert('yang anda masukkan bukan angka coyyy, bego amat')
}