let operacoes = require('./operacoes_node')

let n1 = 10
let n2 = 5

let soma = operacoes.somar(n1, n2)
let sub = operacoes.subtrair(n1, n2)
let mult = operacoes.multiplicar(n1, n2)
let div = operacoes.dividir(n1, n2)

console.log('O resultado da soma eh: ' + soma)
console.log('O resultado da subtracao eh: ' + sub)
console.log('O resultado da multiplicacao eh: ' + mult)
console.log('O resultado da divisao eh: ' + div)