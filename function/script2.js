function jumlahvolumeduakubus(a, b) {
    var volumea;
    var volumeb;

    volumea = a * a * a;
    volumeb = b * b * b;

    total = volumea + volumeb;

    return total;
}

console.log(jumlahvolumeduakubus(8, 3))
console.log(jumlahvolumeduakubus(6431, 9999999999999))