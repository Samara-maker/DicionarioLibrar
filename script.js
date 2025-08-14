
const dados = [ //EXEMPLOS TÁ PESSOAL???  SIM, VAMOS TER QUE INSERIR MANUALMENTE
  { palavra: "A", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA A.mp4"},
  { palavra: "B", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA B.mp4"},
  { palavra: "C", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA C.mp4"},
  { palavra: "D", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA D.mp4"},
  { palavra: "E", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA E.mp4"},
  { palavra: "F", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA F.mp4"},
  { palavra: "G", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA G.mp4"},
  { palavra: "H", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA H.mp4"},
  { palavra: "I", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA I.mp4"},
  { palavra: "J", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA J.mp4"},
  { palavra: "K", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA K.mp4"},
  { palavra: "L", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA L.mp4"},
  { palavra: "M", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA M.mp4"},
  { palavra: "N", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA N.mp4"},
  { palavra: "O", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA O.mp4"},
  { palavra: "P", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA P.mp4"},
  { palavra: "Q", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA Q.mp4"},
  { palavra: "R", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA R.mp4"},
  { palavra: "S", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA S.mp4"},
  { palavra: "T", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA T.mp4"},
  { palavra: "U", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA U.mp4"},
  { palavra: "V", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA V.mp4"},
  { palavra: "W", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA W.mp4"},
  { palavra: "X", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA X.mp4"},
  { palavra: "Y", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA Y.mp4"},
  { palavra: "Z", categoria: "Alfabeto", video:"videos/ALFABETO - VIDEOS/LETRA Z.mp4"},

  
  { palavra: "maçã", categoria: "frutas", video: "videos/maca.mp4" },
  { palavra: "banana", categoria: "frutas", video: "videos/banana.mp4" },
  { palavra: "cachorro", categoria: "animais", video: "videos/cachorro.mp4" },
  { palavra: "gato", categoria: "animais", video: "videos/gato.mp4" },
  { palavra: "vermelho", categoria: "cores", video: "videos/vermelho.mp4" }
];

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

