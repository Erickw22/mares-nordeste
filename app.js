function pesquisar() {
    let termoPesquisa = document.getElementById("termo-pesquisa").value.toLowerCase();
    let section = document.getElementById("resultados-pesquisa");

    let resultadosFiltrados = dados.filter(dado => {
        return dado.titulo.toLowerCase().includes(termoPesquisa) ||
               dado.descricao.toLowerCase().includes(termoPesquisa);
    });

    let resultados = "";

    for (let dado of resultadosFiltrados) {
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank"> **>Mais informações<**</a>
        </div>
        `;
    }

    section.innerHTML = resultados;
}