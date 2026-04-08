function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

let titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 220 * i);
  });
}

//const bntVerMais = document.getElementsByTagName(".bnt-vermais");

//bntVerMais.addEventListener("click", toggleDiv);

function toggleArticle() {
  const artigos = document.querySelectorAll(".projetos-escondidos");
  let bntVerMais = document.querySelector(".bnt-vermais");

  artigos.forEach((artigo) => {
    if (artigo.style.display === "block") {
      artigo.style.display = "none";
      bntVerMais.innerHTML = "Ver Mais";
    } else {
      artigo.style.display = "block";
      bntVerMais.innerHTML = "Ver Menos";
    }
  });
}

const menuLinks = document.querySelectorAll('#nav-header a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 115;
  nativeScroll(distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});
