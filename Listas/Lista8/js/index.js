document.getElementById('conta').textContent = 0

function escrever(num){
    var num1 = document.getElementById('conta').textContent
    if(num1 != 0){
        document.getElementById('conta').textContent = num1 + num
    } else {
        document.getElementById('conta').textContent = num
    }
}

function exibirResultado(){
    var resultado = document.getElementById('conta').textContent
    document.getElementById('conta').textContent = eval(resultado)
}