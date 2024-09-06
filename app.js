function pesquisar() {
   // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
   let section = document.getElementById("resultados-pesquisa");

   let campoPesquisa = document.getElementById("campo-pesquisa").value;

   if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você não fez uma busca por um atlerta</p>";
      return;
   }

   campoPesquisa = campoPesquisa.toLowerCase();
   console.log(campoPesquisa);

   // Inicializa uma string vazia para armazenar os resultados formatados.
   let resultados = "";
   let titulo = "";
   let descricao = "";
   let posicao = "";

   // Itera sobre cada item de dados (assumindo que 'dados' é um array de objetos).
   for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      posicao = dado.posicao.toLowerCase();
      if (
         titulo.includes(campoPesquisa) ||
         descricao.includes(campoPesquisa) ||
         posicao.includes(campoPesquisa)
      ) {
         // Concatena uma nova div com as informações do dado atual à string 'resultados'.
         // A div representa um item de resultado na lista de resultados.
         resultados += `
         <div>
            <a href="jogador.html?id=${dado.id}"><img src=${dado.imagem} alt="img-jogador"></a>
            <h2>${dado.titulo}</h2>
            <p>${dado.posicao}</p>
         </div>
   `;
      }
   }

   if (!resultados){
      resultados = "<p>Item não encontrado</p>"
   }

   // Atribui o conteúdo da string 'resultados' ao HTML da seção,
   // substituindo o conteúdo anterior.
   section.innerHTML = resultados;
}
