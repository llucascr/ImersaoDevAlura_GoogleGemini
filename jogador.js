const searchParams = new URLSearchParams(window.location.search);

let id = window.location.search;

let title = document.getElementById("title");
let section = document.getElementById("descricao-jogador");

conteudoTitle = "";
conteudoSection = "";

for (let dado of dados) {
   if (dado.id == id.replace("?id=", "")) {
      conteudoTitle = `Seleção Basquete | ${dado.titulo}`;
      conteudoSection = `            
        <div>
            <h2>Seleção Masculina</h2>
            <img src=${dado.imagem} alt="img-jogaddor">
        </div>
        <div>
            <h2>${dado.titulo}</h2>
            <p id="posicao">${dado.posicao}</p>
            <p id="descricao">${dado.descricao}</p>
            <a href=${dado.linkSelecao}>link Seleção</a>
            <a href=${dado.linkWiki}>link Wiki</a>
        </div>`;
   }
}

title.innerHTML = conteudoTitle;
section.innerHTML = conteudoSection;
