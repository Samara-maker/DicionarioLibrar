mostrarMenu();//pra não ter que ficar entrando toda hora

const dados = [ //EXEMPLOS TÁ PESSOAL???  SIM, VAMOS TER QUE INSERIR MANUALMENTE
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

