function prosesDaftar() {
    const nama = document.getElementById('nama').value.trim();
    const nik = document.getElementById('nik').value.trim();
    const jalur = document.getElementById('jalur').value;
    const jurusan = document.getElementById('jurusan').value;

    if (!nama || !nik || !jalur || !jurusan) {
        showToast("⚠️ Semua kolom wajib untuk diisi !", "#e74c3c");
        return;
    }

    if (!/^\d+$/.test(nik) || nik.length !== 16) {
        showToast("❌ NIK harus tepat 16 digit angka !", "#f39c12");
        return;
    }

    showToast("✅ Berhasil dikirim Terimakasih !", "#27ae60");
    document.getElementById('ppdbForm').reset();
}

function showToast(message, color) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.style.backgroundColor = color;
    toast.className = "show";
    setTimeout(() => { 
        toast.className = toast.className.replace("show", ""); 
    }, 3000);
}