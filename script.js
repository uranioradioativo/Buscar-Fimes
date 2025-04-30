function BuscarFilme() {
    const nomeFilme = document.getElementById("inputFilme").value.trim();
    const chaveAPI = "6881d8f3";

    const resultadoDiv = document.getElementById("resultado");

    if (!nomeFilme) {
        resultadoDiv.innerHTML = "<p>Por favor, digite o nome de um filme.</p>";
        return;
    }

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(nomeFilme)}&apikey=${chaveAPI}&plot=full`;

    resultadoDiv.innerHTML = `<p>Carregando...</p>`; 

    fetch(url)
        .then(res => res.json())
        .then(dados => {
            if (dados.Response === "False") {
                resultadoDiv.innerHTML = "<p>Filme não encontrado. Tente novamente.</p>";
                return;
            }

         
            resultadoDiv.innerHTML = `
                <div class="filme-info">
                    <h2>${dados.Title} (${dados.Year})</h2>
                    <div class="filme-detalhes">
                        <img src="${dados.Poster}" alt="Pôster do filme" class="filme-poster">
                        <div class="detalhes-texto">
                            <p><strong>Diretor:</strong> ${dados.Director}</p>
                            <p><strong>Gênero:</strong> ${dados.Genre}</p>
                            <p><strong>Sinopse:</strong> ${dados.Plot}</p>
                        </div>
                    </div>
                </div>
            `;
        })
        .catch(erro => {
            resultadoDiv.innerHTML = `<p>Ocorreu um erro ao buscar o filme. Tente novamente.</p>`;
            console.error("Erro ao buscar filme:", erro);
        });
}
