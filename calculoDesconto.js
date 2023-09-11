const valorProduto = 88
const parcelas = 1
const comDesconto = valorProduto - (valorProduto * 10 / 100)
const comAcrecimo = valorProduto + (valorProduto * 10 / 100)

if (parcelas === 1) {
    console.log(`
    Pagamento a vista, recebeu um desconto de 10% valor a pago é R$ ${comDesconto.toFixed(2)}
    `);
} else if (parcelas < 7) {
    console.log(`
    Parcelando em ${parcelas} o valor pago é R$ ${(valorProduto / parcelas).toFixed(2)} sem juros
    `);
} else {
    console.log(`
    Parcelando em ${parcelas} o valor pago é R$ ${(comAcrecimo / parcelas).toFixed(2)} com juros 10%
    `);
}

// com ternario

// const desconto = parcelas === 1 ?
//     `Pagamento a vista, recebeu um desconto de 10% valor a pago é R$ ${(valorProduto - (valorProduto * 10) / 100).toFixed(2)}` :
//     parcelas < 7 ?
//         `Parcelando em ${parcelas} o valor pago é R$ ${(valorProduto / parcelas).toFixed(2)} sem juros` :
//         `Parcelando em ${parcelas} o valor pago é R$ ${((valorProduto + (valorProduto * 10) / 100) / parcelas).toFixed(2)} com juros 10%`

// console.log(`
// Na compra de um Produto no valor de ${(valorProduto).toFixed(2)},
// ${desconto}`);