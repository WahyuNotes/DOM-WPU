/*
cara Wahyu
const jumbo = document.querySelector(".jumbo");
const thumb = document.querySelectorAll(".thumb");

thumb.forEach((el) => {
  el.addEventListener("click", (e) => {
    jumbo.src = e.target.src;
  });
});
*/

// cara pak Sandhika
const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", (e) => {
  //cek yang di klik adalah thumb
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(() => {
      jumbo.classList.remove("fade");
    }, 400);

    thumbs.forEach(function (thumb) {
      //   if (thumb.classList.contains("active")) {
      //     thumb.classList.remove("active");
      //   }
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
