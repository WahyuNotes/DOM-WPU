const hapus = document.querySelector(".close");
const container = document.querySelector(".container");
const card = container.querySelector(".card");
hapus.addEventListener("click", (e) => {
  container.removeChild(card);

  //cara pak dhika itu kek gini
  //card.style.display = "none";
});
