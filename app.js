// Tulis Kode Kamu di bawah ini
function mesinCuci (nama, jumlahBaju) {
    for (i = 1; i <= jumlahBaju; i++) {
        console.log(nama + " " + 'Anda sudah memasukan' + " " + jumlahBaju + " " + 'lembar pakaian');
        if (i === jumlahBaju) {
            console.log ("mesin cuci terhenti !");
            break;
        }
    }   
}

mesinCuci("Adri",10);