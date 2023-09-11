const valorProduto = 5000
const parcelas = 13
const comDesconto = valorProduto - (valorProduto * 10 / 100)
const comAcrecemo = valorProduto * Math.pow(1 + 0.01, parcelas)  //M = C * Math.pow((1 + i), n); J = M - C; tv c/m-1=i


if (parcelas === 1) {
    console.log(`
    Pagamento a vista, recebeu um desconto de 10% valor a pago é R$ ${comDesconto.toFixed(2)}
    `);
} else if (parcelas < 7) {
    console.log(`
    Parcelando em ${parcelas} o valor pago é R$ ${(valorProduto / parcelas).toFixed(2)} sem juros
    `);
} else if (parcelas > 6 && parcelas < 13) {
    console.log(`
    Parcelando em ${parcelas} o valor pago é R$ ${(comAcrecemo / parcelas).toFixed(2)} com juros 10%
    `);
} else {
    console.log(`Valor de parcelas incompatível`);
}


// console.log(comAcrecimo);

// com ternario

// const desconto = parcelas === 1 ?
//     `Pagamento a vista, recebeu um desconto de 10% valor a pago é R$ ${(valorProduto - (valorProduto * 10) / 100).toFixed(2)}` :
//     parcelas < 7 ?
//         `Parcelando em ${parcelas} o valor pago é R$ ${(valorProduto / parcelas).toFixed(2)} sem juros` :
//         `Parcelando em ${parcelas} o valor pago é R$ ${((valorProduto + (valorProduto * 10) / 100) / parcelas).toFixed(2)} com juros 10%`

// console.log(`
// Na compra de um Produto no valor de ${(valorProduto).toFixed(2)},
// ${desconto}`);