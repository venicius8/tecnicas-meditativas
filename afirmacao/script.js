import { afirmacoes } from "./afirmacoes-modulo.js";
let afirmacao = document.getElementById("afirmacao");
let tempoMudar = true;

document.body.addEventListener("click", () => {
    if (tempoMudar) {
        tempoMudar = false;

        afirmacao.classList.toggle("h1On");
        setTimeout(() => {
            let aleatorio = Math.floor(Math.random() * afirmacoes.length);
            afirmacao.innerText = afirmacoes[aleatorio];
            afirmacao.classList.toggle("h1On");
        }, 1200);

        setTimeout(() => {
            tempoMudar = true;
        }, 2200);
    }
});
