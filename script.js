document.querySelector(".choose button").addEventListener("click", function() {
  let select = document.querySelector("select");
  if (select.value === "") {
    document.querySelector(".choose p").style.display="flex";
    document.querySelector(".choose p").style.color="red";
    document.querySelector(".choose p").textContent="Choose your currency!"; 
  }
  else if (select.value === "USD-IDR") {
    dr();
  }
  else if (select.value === "IDR-USD") {
    rd();
  }
});


// api 

// global variable get from api
let rate = 0;

fetch("https://api.frankfurter.app/latest?amount=1&from=USD&to=IDR")
  .then(res => res.json())
  .then(data => {
    rate = data.rates.IDR;
    document.getElementById("idrRate").innerText = rate.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR"
    });
});

function usdIDR() {
  let dolar = document.getElementById("dolar").value;
  let rupiah = rate;
  let hasil = parseFloat(dolar) * rupiah;

  if(dolar === "") {
    document.getElementById("output").innerText="input cannot blank";
    document.getElementById("output").style.color="red";
  }
  else {
    document.getElementById("output").innerText =`$ ${dolar} = ` + hasil.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR"
    });
    document.getElementById("output").style.color="black";
  }
}

function idrUSD() {
  let rupiah = document.getElementById("rupiah").value;
  let dolar = rate; // 1 USD = 16.246 IDR (kurs)

  let hasil = parseFloat(rupiah) / dolar;

  if(dolar === "") {
    document.getElementById("keluaran").innerText="input cannot blank";
    document.getElementById("keluaran").style.color="red";
  }
  else {
    document.getElementById("keluaran").innerText =
    `Rp.${rupiah} = ` + hasil.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
  document.getElementById("keluaran").style.color="black";
  } 
}





function dr() {
    setTimeout(() =>{
      document.querySelector(".choose").style.display="none";
      document.querySelector(".usdIDR").style.display="flex";
    },400)
}
function rd() {
    setTimeout(() => {
      document.querySelector(".choose").style.display="none";
      document.getElementById("idrUSD").style.display="flex";
    },400)
}


// counting when enter clicked
let cont = document.querySelector(".cont");
let contrd = document.querySelector(".contrd");

document.getElementById("dolar").addEventListener("keydown", function (event) {
if (event.key === "Enter" && getComputedStyle(cont).display === "flex"){
  konversi();
}


if (event.key === "Enter" && getComputedStyle(contrd).display === "flex"){
  konversi2();
}
});


