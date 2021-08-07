// Tulis Kode Kamu di bawah ini
function nyuci(nama,baju) {
    for(var x=1; x <= baju; x++) {
        console.log('Pakaian yang dicuci oleh ' + nama + ' sebanyak ' + x + ' lembar dan dimasukkan ke dalam mesin cuci.');
        if (x === baju) {
            console.log('Tombol power mesin cuci akan otomatis menyala jika semua pakaian ' + nama + ' sudah masuk ke dalam mesin cuci.');
        }
    }
}
nyuci("sulthan",50);