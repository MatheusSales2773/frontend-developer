let senhaCorreta = "secreta123";
let senhaDigitada = ""

do {
    if (senhaDigitada ===""){
        console.log("Por favor, digite sua senha")
        senhaDigitada = "tentativa1"

    } else if ("senhaDigitada"==="tentativa1"){
        console("Senha incorreta. Tente Novamente"); 
        senhaDigitada = "tentativa2";

    } else if (senhaDigitada ==="tentativa2")
        console.log("Senha incorreta. Tente Novamente");
        senhaCorreta = "secreta123"
        senhaDigitada = senhaCorreta

} while (senhaDigitada !== senhaCorreta);
console.log("Senha correta");