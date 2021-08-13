// Tulis Kode Kamu di bawah ini
// membuat function
// function mesinCuci(nama, jmlhpakaian) {
    // membuat perulangan
//     for (let x = 1; x <= jmlhpakaian; x++) {
        // console.log(nama + ' sedang memasukan pakaian sebanyak ' + x + ' lembar.');
        // membuat kondisi
//         if (x === jmlhpakaian) {
//             console.log('ini sudah pakaian terakhir dan power mesin cuci akan otomatis menyala.');
//         }
//     }
// }

// mesinCuci("max", 50);

// membuat function
function mesinCuci(nama, jmlhpakaian) {
    // membuat perulangan dengan while
    let x = 1;
    while (x < jmlhpakaian) {
        console.log(nama + ' sedang memasukan pakaian sebanyak ' + x + ' lembar.');
        x++;
    }

    console.log(nama + ' sedang memasukan pakaian yang terakhir ke ' + x + ' lembar dan mesin cuci otomatis akan menyala.');
}

mesinCuci('max', 50);