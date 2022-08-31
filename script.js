let alex = document.getElementById('alex');
let ivo = document.getElementById('ivo')
let agustin = document.getElementById('agustin')
let pelaez = document.getElementById('pelaez')


function alexClick(){
    alert('Alex Ferguson: "Aguinaga es mejor que Kross"')
}

function ivoClick() {
    alert('Johann Cruyff: "Ivo cabeceaba mejor que Cristiano Ronaldo"')
}

function agustinClick() {
    alert('Lionel Messi: "preferiría tener al Tín Delgado de compañero que a MBappé"')
}

function pelaezClick() {
    alert('Josep Guardiola: "Ricardo es como Ibrahimovic pero más atlético"')
}

alex.addEventListener('click', alexClick)
ivo.addEventListener('click', ivoClick)
agustin.addEventListener('click', agustinClick)
pelaez.addEventListener('click', pelaezClick)