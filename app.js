// Tulis Kode Kamu di bawah ini
function mesinCuci(nama, jmlhpakaian) {
    for (let x = 1; x <= jmlhpakaian; x++) {
        console.log(nama + ' sedang memasukan pakaian sebanyak ' + x + ' lembar.');
        if (x === jmlhpakaian) {
            console.log('ini sudah pakaian terakhir dan power mesin cuci akan otomatis menyala.');
        }
    }
}

mesinCuci("tegar", 30);