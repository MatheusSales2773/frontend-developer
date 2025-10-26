const container = document.getElementById("container");
const botaoInicio = document.getElementById("botaoInicio")
const botaoFim = document.getElementById("botaoFim")

botaoInicio.addEventListener("click", ()=>{
    const textoTopo = document.createElement("p");
    textoTopo.textContent = "Inserido no topo";
    
    textoTopo.style.color = "blue";
    textoTopo.style.fontWeight = "bold";

    container.prepend(textoTopo);
}
);

botaoFim.addEventListener("click", ()=>{
    const textoFim = document.createElement("p")
    textoFim.textContent = "Inserido no fim";
    
    textoFim.style.color = "green";
    textoFim.style.fontWeight = "bold";

    container.append(textoFim);
}
);
