// Tulis Kode Kamu di bawah ini
function mesinCuci(nama, jumlahPakaian) {
    // membuat perulangan dengan while
    var i = 0;
    while (i < jumlahPakaian)  {
        i++;  
        console.log(nama + ' sedang memasukan pakaian ke dalam mesin cuci ' + i + ' lembar.');
    }
    console.log(nama + ' sudah memasukan semua pakaian ' + i + ' lembar dan mesin cuci otomatis menyala.');
}

mesinCuci('Joaquin', 30);