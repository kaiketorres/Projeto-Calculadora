let tela = document.querySelector("#display")

window.addEventListener('keydown', teclaPressionada);

function teclaPressionada(evento) {
    let tecla = evento.key;

    switch (tecla) {
        case '0':
            numero_0();
            break;
        case '1':
            numero_1();
            break;
        case '2':
            numero_2();
            break;
        case '3':
            numero_3();
            break;
        case '4':
            numero_4();
            break;
        case '5':
            numero_5();
            break;
        case '6':
            numero_6();
            break;
        case '7':
            numero_7();
            break;
        case '8':
            numero_8();
            break;
        case '9':
            numero_9(); 
            break;
        case '+':
            mais();
            break;
        case '-':
            menos(); 
            break;
        case 'Enter': 
            enter();
            break
        case 'Backspace':
            apagarUmValor();
            break
            case ',':
           virgula();
    }
}


function numero_0() {
    tela.innerHTML += 0
}

function numero_1() {
    tela.innerHTML += 1
}

function numero_2() {
    tela.innerHTML += 2
}

function numero_3() {
    tela.innerHTML += 3
}

function numero_4() {
    tela.innerHTML += 4
}

function numero_5() {
    tela.innerHTML += 5
}

function numero_6() {
    tela.innerHTML += 6
}

function numero_7() {
    tela.innerHTML += 7
}

function numero_8() {
    tela.innerHTML += 8
}

function numero_9() {
    tela.innerHTML += 9
}

function mais() {
    tela.innerHTML += "+"
}

function menos() {
    tela.innerHTML += "-"
}

function virgula() {
    tela.innerHTML += ","
}

function dividir() {
    tela.innerHTML += "/"
}

function multi() {
    tela.innerHTML += "*"
}


function apagar() {
    tela.innerHTML = ""
}

function enter() {

    let expresao = tela.innerHTML

    let resultado = eval(expresao)

    tela.innerHTML = resultado

}

function apagarUmValor() {

    let expresao = tela.innerHTML

    let novaExpresao = expresao.slice(0, -1);

    tela.innerHTML = novaExpresao



}





