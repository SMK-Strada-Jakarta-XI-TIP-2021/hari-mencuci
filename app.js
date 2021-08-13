// Tulis Kode Kamu di bawah ini
function nyuci (nama,baju) {
    for(var x = 1; x <= baju; x++) {
        console.log('Pakaian dicuci oleh ' + nama + ' sebanyak ' + x + ' lembar dan dimasukan ke dalam mesin cuci');
        if (x === baju) {
            console.log('Tombol power pada mesin cuci akan menyala secara otomatis jika semua pakaian ' + nama + ' sudah masuk ke dalam mesin cuci.');
        }
    }
}
nyuci("Gabrielle",25)