var item = prompt('masukkan nama makanan / minuman: \n (contoh: nasi, daging, susu)')

switch (item) {
    case 'nasi':  
    case 'daging':
    case 'susu':
        alert('makanan Sehat');
        break;
    default:
        alert('kami tidak tahu, sorry yoo');
        break;
}