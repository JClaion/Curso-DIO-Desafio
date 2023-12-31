const ValueGas = 5.79;
const EtanolValue = 6;
const VeicicleGasType = "Etanol";
const KmG = 12;
const Distance = 1580;

let value = 0;
if (VeicicleGasType === "Gas")
{
    value = (Distance / KmG) * ValueGas;
    console.log(value.toFixed(2));
}
else if (VeicicleGasType === "Etanol"){
    value = (Distance / KmG) * EtanolValue;
    console.log(value.toFixed(2));
}
else {
    console.log("Error in Type");
    console.log(value.toFixed(2));
}