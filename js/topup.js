document.addEventListener('DOMContentLoaded', () => {
  const btnPlus = document.querySelector('.btn-plus');
  const btnMinus = document.querySelector('.btn-minus');
  const inputJumlah = document.querySelector('input[name="jumlah"]');
  const pesanBtn = document.getElementById('pesanBtn');

  // Tombol + dan - berfungsi
  btnPlus?.addEventListener('click', (e) => {
    e.preventDefault();
    inputJumlah.value = Number(inputJumlah.value) + 1;
  });

  btnMinus?.addEventListener('click', (e) => {
    e.preventDefault();
    if (Number(inputJumlah.value) > 1) {
      inputJumlah.value = Number(inputJumlah.value) - 1;
    }
  });

  // Tombol "Pesan Sekarang!" diklik
  pesanBtn?.addEventListener('click', (e) => {
    // Optional: jika ingin pakai JS redirect (bukan form submit)
    // e.preventDefault();

    const userId = document.getElementById('userId')?.value.trim();
    const server = document.getElementById('server')?.value.trim(); // Ada hanya di ML
    const whatsapp = document.getElementById('whatsapp')?.value.trim();
    const jumlah = inputJumlah?.value;
    const nominal = document.querySelector('input[name="nominal"]:checked')?.value;
    const metode = document.querySelector('input[name="metode"]:checked')?.value;

    if (!userId || !whatsapp || !jumlah || !nominal || !metode) {
      alert('Tolong lengkapi semua data sebelum memesan.');
      return;
    }

    const dataTransaksi = {
      game: document.querySelector('input[name="game"]').value,
      nominal,
      jumlah,
      metode,
      userId,
      server: server || '-',
      whatsapp
    };

    localStorage.setItem('transaksiData', JSON.stringify(dataTransaksi));
    // window.location.href = 'transaksi.html'; // Kalau pakai JS-only
  });
});
