function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
  
    // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos).
    for (let dado of dados) {
      // Concatena uma nova div com as informações do dado atual à string 'resultados'.
      // A div representa um item de resultado na lista de resultados.
      resultados += `
      <div class="item-resultado">
              <h2>
                  <a href=${dado.linkSelecao} target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.linkWiki} target="_blank">Mais informações</a>
      </div>
      `;
    }
  
    // Atribui o conteúdo da string 'resultados' ao HTML da seção,
    // substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }