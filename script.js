function tampilkan_luar() {
    alert('Ini adalah JavasScript dari luar!')
}
function tampilkanTombol() { 
    // Membuat elemen tombol baru 
    const tombolBaru = document.createElement("button"); 
    // Menambahkan teks pada tombol baru 
    tombolBaru.innerText = "Tombol Baru"; 
    // Menambahkan fungsi klik ke tombol baru 
    tombolBaru.onclick = function() { alert("Anda mengklik tombol baru!"); }; 
    // Menambahkan tombol baru ke dalam body 
    document.body.appendChild(tombolBaru); 
    }