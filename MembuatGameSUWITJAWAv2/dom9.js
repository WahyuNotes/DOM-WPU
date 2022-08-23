const getPilihanComputer = () => {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
};

const getHasil = (comp, player) => {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
};

const putar = () => {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
};

//untuk wadah skor
var totalSkorAnda = 0;
var totalSkorKomputer = 0;
var jumlahSeri = 0;

//cara pendek
const pilihan = document.querySelectorAll("li img");
pilihan.forEach((pil) => {
  pil.addEventListener("click", () => {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    //untuk perhitungan skor
    const skorAnda = document.querySelector(".skor-anda");
    const skorKomputer = document.querySelector(".skor-komputer");
    const skorseri = document.querySelector(".skorseri");
    setTimeout(() => {
      const info = document.body.querySelector(".info");
      info.innerHTML = hasil;

      if (hasil == "MENANG!") totalSkorAnda++;
      if (hasil == "KALAH!") totalSkorKomputer++;
      if (hasil == "SERI!") jumlahSeri++;
      skorAnda.innerHTML = "Total Skor Anda :" + totalSkorAnda;
      skorKomputer.innerHTML = "Total Skor Komputer :" + totalSkorKomputer;
      skorseri.innerHTML = "Draw ke-" + jumlahSeri;

      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilihanComputer + ".png");
    }, 200);
  });
});

/*//cara panjang
const pGajah = document.querySelector(".gajah");
pGajah.addEventListener("click", () => {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pGajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const info = document.body.querySelector(".info");
  info.innerHTML = hasil;

  const imgKomputer = document.querySelector(".img-komputer");
  imgKomputer.setAttribute("src", "img/" + pilihanComputer + ".png");
});

const pOrang = document.querySelector(".orang");
pOrang.addEventListener("click", () => {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pOrang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const info = document.body.querySelector(".info");
  info.innerHTML = hasil;

  const imgKomputer = document.querySelector(".img-komputer");
  imgKomputer.setAttribute("src", "img/" + pilihanComputer + ".png");
});

const pSemut = document.querySelector(".semut");
pSemut.addEventListener("click", () => {
  const pilihanComputer = getPilihanComputer();
  const pilihanPlayer = pSemut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const info = document.body.querySelector(".info");
  info.innerHTML = hasil;

  const imgKomputer = document.querySelector(".img-komputer");
  imgKomputer.setAttribute("src", "img/" + pilihanComputer + ".png");
});
*/
