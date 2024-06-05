var numeroProdutos = prompt('Quantos produtos deseja?')
var produtos = []
for(var i = 0; i < numeroProdutos; i++){
    produtos.push({ nome: 'Produto ' + (i+1), 
    descricao: 'Descrição do Produto ' + (i+1),
    imagem: 'https://via.placeholder.com/150',
    valor: 19.99 })
}

var conteudoPrincipal = document.getElementById('conteudo-principal')

for(var produto of produtos){
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = 'conteudo-produto'

    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)

    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var valor = document.createElement('h4')
    valor.textContent = produto.valor
    conteudoProduto.appendChild(valor)

    var botoes = document.createElement('div')
    botoes.className = 'botoes'

    var comprar = document.createElement('button')
    comprar.className = 'btn'
    comprar.textContent = 'Comprar'
    botoes.appendChild(comprar)

    var detalhes = document.createElement('button')
    detalhes.className = 'btn'
    detalhes.textContent = 'Detalhes'
    botoes.appendChild(detalhes)

    conteudoProduto.appendChild(botoes)

    conteudoPrincipal.appendChild(conteudoProduto)
}