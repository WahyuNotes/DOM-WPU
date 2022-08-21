//fungsi untuk tombol ubah warna yang sudah ada pada HTML
const tUbahWarna = document.getElementById("tUbahWarna");
const body = document.getElementsByTagName("body")[0];
tUbahWarna.onclick = function () {
  //   body.style.backgroundColor = "#082c6c";
  //   document.body.setAttribute("class", "biru-darkmode");
  document.body.classList.toggle("biru-darkmode");
};

//pembuatan tombol acak warna virtual
const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("AcakWarna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
tUbahWarna.after(tAcakWarna);

//untuk tombol acak warna virtual
tAcakWarna.addEventListener("click", function () {
  const r = Math.random() * 255 + 1;
  const g = Math.random() * 255 + 1;
  const b = Math.random() * 255 + 1;
  body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

//untuk slider pengubah warna
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
});

sHijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g}, 100)`;
});
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = `rgb(${r}, ${g},${b})`;
});
