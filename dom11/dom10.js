/*
const hapus = document.querySelector(".close");
const container = document.querySelector(".container");
const card = container.querySelector(".card");
hapus.addEventListener("click", (e) => {
  container.removeChild(card);

  //cara pak dhika itu kek gini
  //card.style.display = "none";
});
*/

//buat DOM Transversal
const close = document.querySelectorAll(".close");
// const container = document.querySelectorAll("container");
// const card = document.querySelectorAll(".card");

/* Menggunakan fungsi for biasa
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", (e) => {
    //cara non-DOM Transversal
    // card[i].parentElement.removeChild(card[i]); //cara sendiri
    // card[i].style.display = "none"; //cara pak sandhika

    // close[i].parentElement.style.display = "none";

    e.target.parentElement.style.display = "none";
  });
}*/

//Menggunakan forEach
close.forEach((el) => {
  el.addEventListener("click", (e) => {
    //menelusuri mentransversal element
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  });
});

// const nama = document.querySelector(".nama");
// console.log(nama.parentElement.parentElement);
// console.log(nama.nextElementSibling.nextElementSibling);
