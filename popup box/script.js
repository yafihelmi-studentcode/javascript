alert('Hello World!');
var nama = prompt('nama kamu siapa?');
var tes = confirm('yakin???');
if (tes === true) {
    alert('user menekan OK!')
} else {
    alert('user menekan CENCEL!')
}
var lagi = true;
while ( lagi === true ) {
    var nama = prompt('masukan nama:');
    alert('halo ' + nama)

    lagi = confirm('coba lagi?')
}

alert('terima kasih')