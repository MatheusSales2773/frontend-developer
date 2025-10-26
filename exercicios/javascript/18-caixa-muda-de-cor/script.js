const caixa = document.querySelector("#caixa");

caixa.addEventListener("mouseover", ()=>{
    caixa.style.backgroundColor = '#2c3e50';
    caixa.textContent = 'Azul';
})

caixa.addEventListener("mouseout", ()=>{
    caixa.style.backgroundColor = '';
    caixa.textContent = 'Passe o mouse';
})

caixa.addEventListener("click", ()=>{
    caixa.style.backgroundColor = 'yellow';
    caixa.textContent = 'Easter egg encontrado, nice';
})