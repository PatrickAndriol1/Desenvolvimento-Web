var pix = {
    chavePix: '11940028922',
    valorTransferencia: 1000.00,
    dataTransacao: '25/05/24',
    descricaoPagamento: 'descricao',
    pagador: {
        nome: 'Fulano',
        documento: '123.456.789-10'
    },
    recebedor: {
        nome: 'Ciclano',
        documento: '100.200.300-40'
    },
    transacoes: [
        {
            data: '24/05/24',
            valor: 500.00,
            descricao: 'descricao'
        },
        {
            data: '23/05/24',
            valor: 499.99,
            descricao: 'descricao'
        }
    ]
}

console.log(pix)