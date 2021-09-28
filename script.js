var vetorImagemFilmes = [];
var vetorNomeFilmes = [];

function adicionarFilme() {
  var linkFilme = document.getElementById("imagemFilme").value;
  var nomeFilme = document.getElementById("nomeFilme").value;
  vetorNomeFilmes.push(nomeFilme);
  vetorImagemFilmes.push(linkFilme);
  if (linkFilme.endsWith(".jpg")) {
    listarFilmesNaTela(linkFilme, nomeFilme);
  } else {
    console.error("Endereço de imagem inválido");
  }

  document.getElementById("imagemFilme").value = "";
  document.getElementById("nomeFilme").value = "";
}

function listarFilmesNaTela(filme, nome) {
  for (var i = 0; i < vetorImagemFilmes.length; i++) {
    var elementoFilmeFavorito =
      "<p>" +
      vetorNomeFilmes[i] +
      "</p>" +
      "<img src=" +
      vetorImagemFilmes[i] +
      ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  }

  /*var elementoFilmeFavorito = "<img src=" + filme + ">";
  var elementoNome = nome;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoNome;*/
}