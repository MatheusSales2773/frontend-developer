const textoOriginal = document.getElementById("textoOriginal");
const botaoTrocar = document.getElementById("botaoTrocar");

botaoTrocar.addEventListener("click", () => {

    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Texto substituído dinamicamente!";

    novoParagrafo.style.transition = "opacity 0.4s";
    
    novoParagrafo.style.opacity = 0;

    textoOriginal.replaceWith(novoParagrafo);

    setTimeout(() => {
        novoParagrafo.style.opacity = 1;
    }, 0);
    
    botaoTrocar.disabled = true;
    botaoTrocar.textContent = "Trocado!";
});