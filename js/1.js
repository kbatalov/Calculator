document.getElementsByTagName('input')[0].onkeypress = function(e) {
    if (e.keyCode < 12 || e.keyCode > 112) return false;
}

document.onkeyup = function(e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        c(eval(document.getElementById("display").value));
    }
}

function inv() {
    document.getElementById("display").value = document.getElementById("display").value * -1;
    document.getElementById("display").value = val;
}

function c(val) {
    document.getElementById("display").value = val;
}

function math(val) {
    document.getElementById("display").value += val;
}

function e() {
    try {
        c(eval(document.getElementById("display").value))
    } catch (e) {
        c('Error')
    }
}