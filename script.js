function konversi() {
    let dolar = document.getElementById("dolar").value
    let rupiah = 16246;

    let hasil = parseFloat(dolar) * rupiah;

document.getElementById("output").innerText =
  "Hasil konversi: " + hasil.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR"
  });

}