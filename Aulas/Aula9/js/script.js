let teclas = document.getElementById('teclas')
let result = document.getElementById('result')
let digitado = ''

let criarBotao = (id, classe, valor, texto) => {
    let button = document.createElement('button')
    button.id = id
    button.className = classe
    button.value = valor
    button.textContent = texto
    teclas.appendChild(button)
}

for(let numero = 0; numero < 10; numero++){
    let button = document.createElement('button')
    button.textContent = numero
    button.value = numero
    button.id = `btn-${numero}`
    button.className = 'num btn'

    button.addEventListener('click', (evento) => {
        if(result.textContent != 0){
            digitado = evento.target.value
            result.textContent += digitado
        } else {
            result.textContent = evento.target.value
        }
    })
    teclas.appendChild(button)
}

criarBotao('soma', 'btn calculo', ' + ', '+')
criarBotao('sub', 'btn calculo', ' - ', '-')
criarBotao('mult', 'btn calculo', ' * ', '×')
criarBotao('div', 'btn calculo', ' / ', '÷')
criarBotao('igual', 'btn', '', '=')

soma.addEventListener('click', (evento) => {
    digitado = evento.target.value
    result.textContent += digitado
})
document.getElementById('clean').addEventListener('click', (evento) => {
    result.textContent = digitado = 0
})
sub.addEventListener('click', (evento) => {
    digitado = evento.target.value
    result.textContent += digitado
})
mult.addEventListener('click', (evento) => {
    digitado = evento.target.value
    result.textContent += digitado
})
div.addEventListener('click', (evento) => {
    digitado = evento.target.value
    result.textContent += digitado
})
igual.addEventListener('click', (evento) => {
    result.textContent = eval(result.textContent)
})