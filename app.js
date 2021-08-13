// Tulis Kode Kamu di bawah ini

function mesinCuci(nama, jumlahBaju) {
    for (let x  = 1; x <= jumlahBaju; x++) {
        console.log(nama + ' ' + 'memasukan pakaian sebanyak' + ' ' + jumlahBaju + ' ' + 'lembar')
        if (x === jumlahBaju) {
            console.log('Tombol power mesin cuci akan otomatis menyala jika semua pakaian Novia sudah masuk ke mesin cuci')
        }
    }
}


mesinCuci('Novia', 30);



