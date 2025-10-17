const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRslHAOULPcsb3bzeybnlq8q5y9PT7R2jXHZVGZELZWzLzJbMMLQbAeVKh7Jq3qT3HW4C9uN6Zc8zz-/pub?gid=0&single=true&output=csv";

let dadosJSON = [];

// Carregar dados do Google Sheets e salvar em variável
export async function carregarDados() {
  const response = await fetch(url);
  const texto = await response.text();

  const linhas = texto.split("\n").map((l) => l.split(","));

  // Cabeçalho
  const cabecalho = linhas[0].map((h) => h.trim());

  // Transformar em objetos JSON
  dadosJSON = linhas.slice(1).map((linha) => {
    let obj = {};
    cabecalho.forEach((coluna, i) => {
      obj[coluna] = linha[i] ? linha[i].trim() : "";
    });
    return obj;
  });

  console.log("JSON final:", dadosJSON);
  return dadosJSON;
}

// Função para filtrar por categoria
export function filtrarPorCategoria(categoria) {
  return dadosJSON.filter(
    (item) => item["categoria"]?.toLowerCase() === categoria.toLowerCase()
  );
}

// Retornar todos os dados armazenados
export function getDados() {
  return dadosJSON;
}
