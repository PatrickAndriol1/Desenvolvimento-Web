var nomes = ["Eu", "tu", "nos"] // declarar array ou lista
console.log(nomes)

nomes.push("Ele", "ela", "Voces") // adicionar elemento a lista
console.log(nomes)

nomes.pop() // remove o ultimo elemento do array
console.log(nomes)

nomes.reverse() // inverte o array
console.log(nomes)

nomes.shift() // remove o primeiro elemento
console.log(nomes)

nomes.sort() // organiza o array em ordem alfabetica
console.log(nomes)

var posicao = nomes.indexOf("Eu") // encontrar posicao de um elemento
console.log(posicao + 1)

nomes.splice(0, 1) // 0 = posicao, 1 = quantidade de numeros para remover
console.log(nomes)

var nomes = new Array("Patrick", "Davi", "Miguel") // instancia nova lista (passar elementos *opicional)
console.log(nomes)

nomes[1] = 'John' // aceita qlqr posicao e substitui
console.log(nomes)

