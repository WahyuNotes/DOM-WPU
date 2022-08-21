//DOM Selection
//document.getElementById() -> Mengembalikan element
// const judul = document.getElementById("judul");
// judul.style.color = "red";
// judul.style.backgroundColor = "#ccc";
// judul.innerHTML = "Wahyu Ramadhan";

//document.getElementsByTagName()
// -> HTMLCollection
// const p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

// const h1 = document.getElementsByTagName("h1")[0];
// h1.style.fontSize = "50px";

//document.getElementsByClassName()
// -> HTMLCollection
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "Ini diubah dari Javascript";

//document.querySelector() -> menghasilkan element
// const p4 = document.querySelector("#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

//query selector bisa mendapatkan elemen secara spesifik sedangkan getElementsByTagName tidak. Pengambilan index/posisi juga berbeda
// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "orange";

// const p = document.querySelector("p");
// p.innerHTML = "Ini diubah melalui Javascript";

// const p = document.querySelectorAll("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "lightblue";
// }

/*
DOM Manipulation
Pertemuan 5 = Manipulasi Elemenet
*/

/*
const p4 = document.getElementsByTagName("p");
p4[3].style.backgroundColor = "lightblue";

scopenya di ganti scopenya, yang awalnya node root (document) menjadi
*/

//untuk mencari hanya pada scope sectionB
// const sectionB = document.getElementById("b");
// const sectionB = document.querySelector("section#b");
// const p4 = sectionB.getElementsByTagName("p")[0];
// p4.style.backgroundColor = "orange";

// const judul = document.getElementById("judul");
// judul.innerHTML = "<em>Wahyu Ramadhan</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "Hello World!";

// const judul = document.querySelector("#judul");
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// const judul = document.getElementsByTagName("h1")[0];
// judul.setAttribute("name", "wahyu");

// const a = document.querySelector("section#a a");

// const p2 = document.querySelector(".p2");

/*
DOM Manipulation
Pertemuan 6 = Manipulasi Node

buat element baru
*/
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");

//lalu simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

//simpan pBaru di akhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru); //simpan ke akhir dari sebuah parrent

// menyisipkan node
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("Item Baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

//cara menghapus node
const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru");

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = "lightgreen";
li.style.backgroundColor = "lightgreen";
h2.style.backgroundColor = "lightgreen";
