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
function konversi2() {
    let rupiah = document.getElementById("rupiah").value
    let dolar = 1;

    let hasil = parseFloat(rupiah) / dolar;

    document.getElementById("keluaran").innerText =
    "Hasil konversi: " + hasil.toLocaleString("en-EN", {
    // style: "currency",
    currency: "USD"
    });

}

function dr() {
    document.getElementById("cont2").style.display="none";
    document.getElementById("cont").style.display="flex";
}
function rd() {
    document.getElementById("cont2").style.display="none";
    document.getElementById("contrd").style.display="flex";
}