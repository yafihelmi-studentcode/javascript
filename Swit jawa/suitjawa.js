var tanya = true;
while ( tanya) {
    //menangkap pilihan pleyer
    var p = prompt('pilih: gajah, semut, orang');

    // menangkap pilihan komputer
    //membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34 ) {
        comp = "Gajah";
    } else if(comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }
    var hasil = '';

    // menentukan rules

    if( p == comp) {
        hasil = 'seri'
    } else if(p == 'gajah') {
        if(comp == 'orang'){
            hasil = 'menang';
        } else {
            hasil = 'kalah';
        }
    } else if( p == 'orang') {
        if( comp == 'gajah'){
            hasil = 'kalah';
        } else {
            hasil = 'menang';
        } 
    }
        else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'kalah' : 'menang';
        } else if( p == 'semut') {
            hasil = (comp == 'orang') ? 'kalah' : 'menang';
        } else {
            hasil = 'memasukkan pilihan yang salah'
        }


    //penampilan hasil
    alert('kamu memilih : ' + p + ' dan komputer memilih : ' + comp + '\n maka hasilnya : ' + hasil);
    tanya = confirm('lagi?'); 
}

alert('sukron')