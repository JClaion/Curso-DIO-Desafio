class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalcularIMC () {
        return this.peso / Math.pow(this.altura, 2);
    }

    ClassificarIMC () {
        const IMC = this.CalcularIMC();
        if(IMC < 18.5){
            return "Abaixo do peso";
        }
        else if(IMC <= 25){
            return "Peso normal";
        }
        else if(IMC <= 30){
            return "Acima do peso";
        }
        else if(IMC <= 40){
            return "Obeso";
        }
        else {
            return "Obsidade Grave";
        }
    }
}

const pessoa1 = new Pessoa("Fabricio", 35, 1.58);
console.log(pessoa1.ClassificarIMC());