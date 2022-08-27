const komputer = document.querySelector(".komputer");
const tombol = document.querySelectorAll("button");
const jumlah = document.querySelector(".jumlah");
const nyerah = document.querySelector("h3");
const judul = document.querySelector("h1");
var counter = 1;
const nama = prompt("masukkan nama anda");
alert("selamat datang " + nama);
judul.innerHTML = `Welkom du de hell ${nama}, yu kan bit mi hahaha....`;
tombol.forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (counter >= 4) {
      nyerah.innerHTML = `Yang bener kenapa mencetnya. ${nama} tangannya bau kali nih, mending cuci kaki, cuci tangan dlu trus coba lagi dah sampe menang`;
      nyerah.style.color = "skyblue";
    }
    if (counter >= 6) {
      nyerah.innerHTML = `Abis ini menang pasti`;
      nyerah.style.color = "yellow";
    }
    if (counter >= 7) {
      nyerah.innerHTML = `Main suit aja ${nama} gak berbakat, mending cuci kaki, cuci tangan trus tidur`;
      nyerah.style.color = "red";
    }
    if (e.target.classList[0] == "gunting") {
      komputer.innerHTML = "Pilihan Komputer adalah batu";
      jumlah.innerHTML = "jumlah kekalahan anda adalah = " + counter;
      counter++;
    } else if (e.target.classList[0] == "batu") {
      komputer.innerHTML = "Pilihan Komputer adalah kertas";
      jumlah.innerHTML = "jumlah kekalahan anda adalah = " + counter;
      counter++;
    } else if (e.target.classList[0] == "kertas") {
      komputer.innerHTML = "Pilihan Komputer adalah gunting";
      jumlah.innerHTML = "jumlah kekalahan anda adalah = " + counter;
      counter++;
    }
  });
});
