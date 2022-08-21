/*
//cara 'mendengarkan' event dengan eventHandler
const p3 = document.querySelector(".p3");
p3.onclick = ubahWarnaP3;

function ubahWarnaP2() {
  p2.style.backgroundColor = "lightblue";
}
function ubahWarnaP3() {
  p3.style.backgroundColor = "lightblue";
}

const p2 = document.querySelector(".p2");
p2.onclick = ubahWarnaP2;

//cara 'mendengarkan' event dengan addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  let person = prompt("Please enter your name");
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode(person);
  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});
*/

//perbedaan antara eventHandler dengan addEventListener

const p3 = document.querySelector(".p3");
/*//<!--Dengan eventHandler--->
p3.onclick = function () {
  p3.style.backgroundColor = "lightblue";
};

p3.onclick = function () {
  p3.style.color = "red";
};*/

//<!--Dengan addEventListener--->
p3.addEventListener("click", function () {
  p3.style.backgroundColor = "lightblue";
});
p3.addEventListener("click", function () {
  p3.style.color = "red";
});
