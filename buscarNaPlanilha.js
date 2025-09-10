      const url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRslHAOULPcsb3bzeybnlq8q5y9PT7R2jXHZVGZELZWzLzJbMMLQbAeVKh7Jq3qT3HW4C9uN6Zc8zz-/pub?gid=0&single=true&output=csv"; // link gerado no passo 2


export async function carregarDados() {
      const response = await fetch(url);
      const texto = await response.text();

      const linhas = texto.split("\n").map(l => l.split(","));

      let tabela = document.getElementById("tabela");
      tabela.innerHTML = "";
        console.log(tabela);
    
      linhas.forEach((linha, i) => {
        let tr = document.createElement("tr");
        linha.forEach(celula => {
          let td = document.createElement(i === 0 ? "th" : "td");
          td.textContent = celula;
          tr.appendChild(td);
        });
        tabela.appendChild(tr);
      });
    }

    carregarDados();

export async function carregarCSV() {
      const response = await fetch(url);
      const texto = await response.text();

      // Mostra o conteúdo bruto no log
      console.log("Conteúdo bruto do CSV:");
      console.log(texto);

      // Quebra em linhas
      const linhas = texto.split("\n");
      console.log("Linhas do CSV:");
      console.log(linhas);

      // Opcional: quebrar cada linha em colunas
      const dados = linhas.map(l => l.split(","));
      console.log("Dados em formato de array:");
      console.log(dados);
    }

    carregarCSV();