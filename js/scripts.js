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

  artigos.forEach((artigo) => {
    if (artigo.style.display === "block") {
      artigo.style.display = "none";
    } else {
      artigo.style.display = "block";
    }
  });
}
