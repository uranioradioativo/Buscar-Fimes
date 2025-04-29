function BuscarFilme() {
    const nomeFilme = document.getElementById("inputFilme").value;
    const chaveAPI = "6881d8f3";

    if (!nomeFilme.trim()) {
        document.getElementById("resultado").innerHTML = "<p>Digite o nome de um filme.</p>";
        return;
    }

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(nomeFilme)}&apikey=${chaveAPI}&plot=full`;

    fetch(url)
    .then(res => res.json())
    .then(dados => {
        if (dados.Response === "False") { 
            document.getElementById("resultado").innerHTML = "<p>Filme não encontrado.</p>";
            return;
        }

        document.getElementById("resultado").innerHTML = `
            <h2>${dados.Title} (${dados.Year})</h2>
            <img src="${dados.Poster}" alt="Pôster do filme" style="max-width: 300px;">
            <p><strong>Diretor:</strong> ${dados.Director}</p>
            <p><strong>Gênero:</strong> ${dados.Genre}</p>
            <p><strong>Sinopse:</strong> ${dados.Plot}</p>
        `;
    })
    .catch(erro => {
        document.getElementById('resultado').innerHTML = `<p>Erro ao buscar o filme.</p>`;
        console.error(erro);
    });
}
