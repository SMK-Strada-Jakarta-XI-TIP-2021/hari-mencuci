// Tulis Kode Kamu di bawah ini

function laundry(nama, pakaian){
    for (let x = 1; x <= pakaian; x++) {
        console.log(nama + 'memasukan pakaian sebanyak' + x + 'lembar')
        if (x === pakaian) {
            console.log('Tombol power mesin cuci akan otomatis menyala jika semua pakaian Novia sudah masuk ke mesin cuci.');
        }
    }
}

laundry("novia", 30); 
