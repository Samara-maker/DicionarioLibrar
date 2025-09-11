import { carregarDados, filtrarPorCategoria } from "./buscarNaPlanilha.js";
carregarDados();

// Captura o parâmetro "categoria" da URL
function getCategoriaDaURL() {
  const params = new URLSearchParams(window.location.search);
  const categoria = params.get("categoria");
  return categoria ? decodeURIComponent(categoria) : null;
}

// Cria os vídeos na página
function criarVideos(videos) {
  const container = document.querySelector(".grid-videos");
  container.innerHTML = "";

  videos.forEach(video => {
    const videoId = video.link.split("/").pop();

    const div = document.createElement("div");
    div.className = "grid-videos-item";

    const h2 = document.createElement("h2");
    h2.textContent = video.nome;

    const videoImagemLink = video.imagem
      .replace("https://drive.google.com/file/d/", "")
      .replace("/view?usp=drive_link", "");

    const img = document.createElement("img");
    img.src = `https://drive.google.com/thumbnail?id=${videoImagemLink}`;

    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(iframe);
    container.appendChild(div);
  });
}

// Inicializa tudo
async function init() {
  await carregarDados();

  const categoriaAtual = getCategoriaDaURL();
  if (!categoriaAtual) {
    console.warn("Categoria não informada na URL");
    return;
  }

  const videosFiltrados = filtrarPorCategoria(categoriaAtual);
  console.log("Vídeos filtrados:", videosFiltrados);

  criarVideos(videosFiltrados);
}

init();








document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll(".grid-videos-item");

  videos.forEach(function (elm) {
    elm.addEventListener("click", function handler(e) {
      // ignora clique no h2 (para não apagar)
      if (e.target.tagName === "H2") return;

      var conts = elm.childNodes;
      var ifr = null;

      for (var i = 0; i < conts.length; i++) {
        if (conts[i].nodeType === 8) { // comentário
          ifr = conts[i].textContent;
        }
      }

      if (ifr) {
        elm.classList.add("player");

        // remove a <img> mas mantém o <h2>
        var img = elm.querySelector("img");
        if (img) img.remove();

        // adiciona o iframe logo depois do h2
        elm.insertAdjacentHTML("beforeend", ifr);

        elm.removeEventListener("click", handler);
      }
    });
  });
});

let links = [];

fetch("links.json") // arquivo deve estar na mesma pasta do seu .html
  .then(response => response.json())
  .then(data => {
    links = data;
    // console.log("JSON carregado:", links);
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));
const barraPesquisa = document.querySelector(".search-container #busca")

barraPesquisa.addEventListener("input", pesquisaDinamica)
console.log(links.nome)
function pesquisaDinamica(event) {
  const item = links.filter(item =>
    (event.target.value.toLowerCase().includes(item.nome.toLowerCase())))



}