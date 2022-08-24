const genero = document.querySelector("#genero");
const musica = document.querySelector(".musica");
const escolheMusica = document.querySelector("#musica")

genero.addEventListener("change", (event) => {
  const select = event.target;
  musica.classList.add("show");

  if (select.value === "edm") {
    escolheMusica.value = "Kasino - Can't Get Over";
  }
  if (select.value === "jpop") {
    escolheMusica.value = "Liella! - Unison";
  }
  if (select.value === "metal") {
    escolheMusica.value = "NanowaR of Steel - Valhalleluja";
  }
  if (select.value === "") {
    musica.classList.remove("show");
  }
})