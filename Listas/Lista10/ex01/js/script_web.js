import { dividir, multiplicar, somar, subtrair } from "./operacoes_web.js"

const n1 = parseFloat(document.getElementById('n1').value)
const n2 = parseFloat(document.getElementById('n2').value)
let resultado = document.getElementById('resultado')

const botaoSomar = document.getElementById('somar')
botaoSomar.addEventListener('click', () => {
    resultado.textContent = 'Resultado: ' + somar(n1, n2)
})
const botaoSubtrair = document.getElementById('subtrair')
botaoSubtrair.addEventListener('click', () => {
    resultado.textContent = 'Resultado: ' + subtrair(n1, n2)
})
const botaoMultiplicar = document.getElementById('multiplicar')
botaoMultiplicar.addEventListener('click', () => {
    resultado.textContent = 'Resultado:' + multiplicar(n1, n2)
})
const botaoDividir = document.getElementById('dividir')
botaoDividir.addEventListener('click', () => {
    resultado.textContent = 'Resultado: ' + dividir(n1, n2)
})
