var button = document.createElement('button');
button.textContent = 'Lorenzo';

function nomear()
{
    document.body.appendChild(button)
}

window.addEventListener("load", nomear)

function sobrenomear()
{
    button.textContent = 'Lorenzo Ferreira';
}

button.addEventListener("mouseover", sobrenomear)

function ultimoNomear()
{
    button.textContent = 'Lorenzo Ferreira Martinez';
}

button.addEventListener("click", ultimoNomear)

function intensificar()
{
    button.textContent = 'Lorenzo Ferreira Martinez!!'
}

button.addEventListener('mousedown', intensificar)

function normalizar()
{
    button.textContent = 'Lorenzo'
}

button.addEventListener('mouseout', normalizar)