const peso = 50;
const altura = 1.5;
const IMC = peso / Math.pow(altura, 2);
console.log("Seu IMC é: "+IMC.toFixed(2));
if(IMC < 18.5){
    console.log("Abaixo do peso");
}
else if(IMC <= 25){
    console.log("Peso normal");
}
else if(IMC <= 30){
    console.log("Acima do peso");
}
else if(IMC <= 40){
    console.log("Obeso");
}
else {
    console.log("Obsidade Grave");
}