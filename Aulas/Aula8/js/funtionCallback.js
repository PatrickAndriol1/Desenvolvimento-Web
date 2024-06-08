function ImprimirNome(nome, callback) {
  console.log(nome);
  callback("Andrioli");
}

function ImprimirSobrenome(sobrenome) {
  console.log(sobrenome);
}

ImprimirNome("Patrick", ImprimirSobrenome);
