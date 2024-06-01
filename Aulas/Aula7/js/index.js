var bancoDados = [
  {
    nome: "Bolo de chocolate",
    valor: 18.5,
    imagem: "https://via.placeholder.com/150",
  },
  {
    nome: "Bolo de cenoura",
    valor: 20.0,
    imagem: "https://via.placeholder.com/150",
  },
  {
    nome: "Bolo de ninho com morango",
    valor: 25.99,
    imagem: "https://via.placeholder.com/150",
  },
];

var conteudoPrincipal = document.getElementById("conteudo-principal");

for (var produto of bancoDados) {
  var conteudoProduto = document.createElement("div");
  conteudoProduto.className = "conteudo-produto";

  var imagem = document.createElement("img");
  imagem.src = produto.imagem;
  conteudoProduto.appendChild(imagem);

  var nomeProduto = document.createElement("h4");
  nomeProduto.textContent = produto.nome;
  conteudoProduto.appendChild(nomeProduto);

  var valor = document.createElement("p");
  valor.textContent = produto.valor;
  conteudoProduto.appendChild(valor);

  var button = document.createElement("div");

  conteudoPrincipal.appendChild(conteudoProduto);
}
