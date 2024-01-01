class Carro{
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM= gastoMedioPorKM;
    }

    calcularGastoDeViagem (valorDaGasolina, distancia) {
        return distancia * this.gastoMedioPorKM * valorDaGasolina;
    }
}

const carro1 = new Carro('Ferrari', 'Vermelho', 1 / 20);
console.log(carro1);
console.log(carro1.calcularGastoDeViagem(5, 100));
