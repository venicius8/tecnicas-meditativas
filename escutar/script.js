function toggle(audio, filho) {
    let som = document.getElementById(audio);
    let ajuste = document.querySelector(`.${audio} .ajuste`);

    if (som.paused) {
        som.play();
        filho.innerHTML = '&#9208';
        ajuste.classList.toggle('ajusteOn');
    } else {
        som.pause();
        filho.innerHTML = '&#9654';
        ajuste.classList.toggle('ajusteOn');
    }
}