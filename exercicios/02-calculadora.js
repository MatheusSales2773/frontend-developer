let num1 = 10;
let num2 = 0;
let operacao = "dividir";

switch (operacao) {
    case "somar":
        console.log(`A soma dos números vai ser ${resultado = num1 + num2}`);
        break;
    case "subtrair":
        console.log(`A subtração dos números vai ser ${resultado = num1 - num2}`);
        break;
    case "multiplicar":
        console.log(`A multiplicação dos números vai ser ${resultado = num1 * num2}`);
        break;
    case "dividir":
        if (num2 !== 0) {
            console.log(`A divisão dos números vai ser ${resultado = num1 / num3}`);
        } else {
            console.log("Os números não podem ser dividos por zero");
        }
        break;
    default:
        console.log("Operação inválida.");
} 