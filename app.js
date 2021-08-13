// Tulis Kode Kamu di bawah ini

mencuci("Michelle", 30);

function mencuci(nama, pakaian) {
  for (let x = 1; x <= pakaian; x++) {
    console.log(nama + ' ' + 'memasukan pakaian' + ' ' + x + ' ' + 'lembar kedalam mesin cusi');
    if (x === pakaian) {
      console.log('Tombol power mesin cuci akan otomatis menyala jika semua pakaian sudah masuk ke mesin cuci');
    }
  }
}