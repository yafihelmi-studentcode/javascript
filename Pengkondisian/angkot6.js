var jumlahangkot = 10;
var angkotberoprasi = 6;

for (var noangkot = 1; noangkot <= jumlahangkot; noangkot++) {
    if (noangkot <= 6 && noangkot !== 5) {
        console.log('Angkot No. ' + noangkot + ' beroprasi dengan baik.');
    } else if (noangkot === 8 || noangkot === 10 || noangkot === 5) {
        console.log('angkot no.' + noangkot + ' sedang lembur coy');
    }else {
        console.log('Angkot No. ' + noangkot + ' sedang tidak beroprasi.');
    }
}