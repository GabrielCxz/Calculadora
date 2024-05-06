var display = document.getElementById("display");
var display2 = document.getElementById("display2");
var validarponto = 0;
var ultimo = "+";
var bloqueado = "0";


function c() {
    display.innerText = "";
    display2.innerText = "";
    ultimo = "+"
    validarponto = 0;
    bloqueado = "0";
}

function b0() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 0;
    }

}
function b1() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 1;
    }
}

function b2() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 2;
    }
}

function b3() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 3;
    }
}

function b4() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 4;
    }
}

function b5() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 5;
    }
}

function b6() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 6;
    }
}

function b7() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 7;
    }
}

function b8() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 8;
    }
}

function b9() {
    if (bloqueado == "1") {
        c();
    }
    if (display.innerText.length < 10) {
        display.innerText += 9;
    }
}
function ponto() {
    if (display.innerText.length < 10 && validarponto == 0 && display.innerText.length != 0) {
        display.innerText += '.';
        validarponto++;
    }
}

function apagar() {
    if (bloqueado == "0") {
        var aux = display.innerText;
        display.innerText = aux.slice(0, -1);;
    }
}

function negativo() {
    if (bloqueado == "0" && display.innerText != "") {
        display.innerText = Number(display.innerText) * -1;
    }
}

function igual() {
    bloqueado = "1";
    if (ultimo == "+") {
        display.innerText = Number(display2.innerText) + Number(display.innerText);
        display2.innerText = "";
    }
    if (ultimo == "-") {
        var aux = Number(display2.innerText);
        if (display2.innerText == "") {
            aux = Number(display.innerText) * 2;
        }
        display.innerText = Number(aux) - Number(display.innerText);
        display2.innerText = "";
    }
    if (ultimo == "*") {
        var aux = Number(display2.innerText);
        if (display2.innerText == "") {
            aux = 1;
        }
        display.innerText = Number(aux) * Number(display.innerText);
        display2.innerText = "";
    }
    if (ultimo == "/") {
        var aux = Number(display2.innerText);
        if (display2.innerText == "") {
            aux = Number(display.innerText) ** 2;
        }
        display.innerText = Number(aux) / Number(display.innerText);
        display2.innerText = "";
    }
    if (ultimo == "%") {
        var aux = Number(display2.innerText);
        if (display2.innerText == "") {
            aux = 100;
        }
        display.innerText = Number(display.innerText) / 100 * Number(aux);
        display2.innerText = "";
    }
    if (display.innerText.length > 10) {
        display.innerText = "N/A"
        display2.innerText = "";
    }
}

function soma() {
    igual();
    display2.innerText = display.innerText;
    display.innerText = "";
    ultimo = "+";
    bloqueado = "0"
}

function subtracao() {
    igual();
    display2.innerText = display.innerText;
    display.innerText = "";
    ultimo = "-";
    bloqueado = "0"
}

function multiplicacao() {
    igual();
    display2.innerText = display.innerText;
    display.innerText = "";
    ultimo = "*";
    bloqueado = "0"
}
function divisao() {
    igual();
    display2.innerText = display.innerText;
    display.innerText = "";
    ultimo = "/";
    bloqueado = "0"
}
function porcentagem() {
    igual();
    display2.innerText = display.innerText;
    display.innerText = "";
    ultimo = "%";
    bloqueado = "0"
}

//Suporte teclado
const teclasParaFuncoes = {
    "0": b0,
    "1": b1,
    "2": b2,
    "3": b3,
    "4": b4,
    "5": b5,
    "6": b6,
    "7": b7,
    "8": b8,
    "9": b9,
    "-": subtracao,
    "+": soma,
    "*": multiplicacao,
    "/": divisao,
    "=": igual,
    "x": multiplicacao,
    ".": ponto,
    ",": ponto,
    "x": multiplicacao,
    "enter": igual,
    "backspace": apagar,
    "%": porcentagem,
};

document.addEventListener("keydown", function (event) {
    const teclaPressionada = event.key.toLowerCase();
    if (teclaPressionada in teclasParaFuncoes) {
        teclasParaFuncoes[teclaPressionada]();
    }
});
