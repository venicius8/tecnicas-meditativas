function print(fase) {
    document.getElementById("fase").innerHTML = fase;
}

function esperar(seg, funcao) {
    setTimeout(funcao, seg*1000);
}


function segure1() {
    print("Segure");
    esperar(4, inspire);
}

function inspire() {
    print("Inspire");
    esperar(6, segure2);
}

function segure2() {
    print("Segure");
    esperar(4, expire);
}

function expire() {
    print("Expire");
    esperar(6, segure1);
}

esperar(2, inspire);
