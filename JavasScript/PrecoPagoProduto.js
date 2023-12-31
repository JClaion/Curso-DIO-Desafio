function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros/100)));
}

function main(){
    const valorTotal = 100;
    const tipoDePagamento = "Credito";
    const totalDeVezesPagamento = 2;

    if (tipoDePagamento === "Débito"){
        console.log(aplicarDesconto(valorTotal, 10));
    } else if(tipoDePagamento === "Dinheiro" || tipoDePagamento === "Pix"){
        console.log(aplicarDesconto(valorTotal, 15));
    } else if (totalDeVezesPagamento === 2) {
        console.log(valorTotal);
    } else {
        console.log(aplicarJuros(valorTotal, 10));
    }
}
main();