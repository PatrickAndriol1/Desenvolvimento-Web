/* function comparaNumeros(n1, n2) {
    if(n1 === n2){
        console.log(true)
    } else {
        console.log(false)
    }
} */


var numero1 = document.getElementById('n1')
var numero2 = document.getElementById('n2')

var resultado = document.getElementById('resultado')

function compararValores(){
    if(Number(numero1.value) === Number(numero2.value)){
        resultado.textContent = true
    } else {
        resultado.textContent = false
    }
}

function somar(){
    var soma = Number(numero1.value) + Number(numero2.value)
    resultado.textContent = soma
}