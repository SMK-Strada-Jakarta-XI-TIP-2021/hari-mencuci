// Tulis Kode Kamu di bawah ini
function mesinCuci (nama, totalBaju) {
    for (i = 1; i <= totalBaju; i++) {
        console.log(nama + " " + 'memasukan baju ==>' + " " + totalBaju + " " + 'lembar pakaian');
        if (i === totalBaju) {
            console.log ("mesin cuci terhenti !");
            break;
        }
    }   
}

mesinCuci("Adri",30);