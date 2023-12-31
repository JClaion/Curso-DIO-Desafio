const valorTotal = 100;
const tipoDePagamento = "Nada";
const totalDeVezesPagamento = 3;

if (tipoDePagamento === "Débito"){
    const valorFinal =(valorTotal) - valorTotal * 0.1;
    console.log(valorFinal);
} else if(tipoDePagamento === "Dinheiro" || tipoDePagamento === "Pix"){
    const valorFinal =(valorTotal) - valorTotal * 0.15;
    console.log(valorFinal);
} else if (totalDeVezesPagamento === 2) {
    const valorFinal =(valorTotal)
    console.log(valorFinal);
} else {
    const valorFinal =(valorTotal) + valorTotal * 0.1;
    console.log(valorFinal);
}