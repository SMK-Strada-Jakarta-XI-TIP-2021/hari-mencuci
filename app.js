// Tulis Kode Kamu di bawah ini
function mesinCuci(nama, jmlhpakaian) {
    for (let x = 1; x <= jmlhpakaian; x++) {
        console.log(nama + ' sudah memsukan ' + x + ' lembar pakaian.');
        if (x === jmlhpakaian) {
            console.log('ini sudah pakaian terakhir power mesin cuci akan otomatis menyala.');
            break;
        }
    }
}

mesinCuci("Novia", 30);