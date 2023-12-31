const nota1 = 5;
const nota2 = 5;
const nota3 = 5;

const media = (nota1 + nota2 + nota3)/3;

console.log("Sua média foi de : "+ media)

if (media < 5)
{
    console.log("Reprovado");
} else if (media <= 7) {
    console.log("Recuperação");
}else {
    console.log("Aprovado");
}