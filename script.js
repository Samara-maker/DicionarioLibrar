

const dados = []


function mostrarMenu() {
  document.getElementById("telaInicial").style.display = "none";
  document.getElementById("menu").classList.remove("oculto");
  exibirTodos();
}

function exibirTodos() {
  mostrarResultados(dados);
}

function buscar() {
  const termo = document.getElementById("busca").value.toLowerCase();
  const filtrados = dados.filter(item =>
    item.palavra.toLowerCase().includes(termo)
  );
  mostrarResultados(filtrados);
}

function filtrarCategoria(categoria) {
  if (categoria === "todos") {
    exibirTodos();
  } else {
    const filtrados = dados.filter(item => item.categoria === categoria);
    mostrarResultados(filtrados);
  }
}

function mostrarResultados(lista) {
  const container = document.getElementById("resultados");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    return;
  }

  lista.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("video-item");

    div.innerHTML = `
      <h3>${item.palavra}</h3>
      <video controls src="${item.video}"></video>
    `;

    container.appendChild(div);
  });
}

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
    console.log("JSON carregado:", links);
  })
  .catch(error => console.error("Erro ao carregar JSON:", error));
const barraPesquisa = document.querySelector(".search-container #busca")

barraPesquisa.addEventListener("input", pesquisaDinamica)
console.log(links.nome)
function pesquisaDinamica(event) {
  const item = links.filter(item => 
    (event.target.value.toLowerCase().includes(item.nome.toLowerCase())))
    
  

}