const BODY = document.querySelector("body");
let NABIZ = 2000;
var windowSize = {
    w: window.outerWidth,
    h: window.outerHeight,
    iw: window.innerWidth,
    ih: window.innerHeight
};

let paused = false;

var randomWidth = () => {
    if (paused) return;
    let x = 0;
    if (detectMob()) {
        x = getRndInteger(65,81);
        document.querySelector(".container-box-home").style.width = x + "%";
        document.querySelector(".container-box-home").setAttribute("data-value", x+ "%");

        // x = getRndInteger(5, AGE);
        // document.querySelector(".container-box-home").style.paddingBottom = x/2+"%";
        // document.querySelector(".container-box-home").setAttribute("data-value",  x+"%");
    }
    else {
        x = getRndInteger(30, 70);
        document.querySelector(".container-box-home").style.width = x + "%";
        document.querySelector(".container-box-home").setAttribute("data-value", x+ "%");
    }
};


var getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};


randomWidth();

var interval = setInterval(() => {
    randomWidth();
}, NABIZ);

// pause the resizing while the pointer is over the terminal window
var terminalBox = document.querySelector(".container-box-home");
if (terminalBox) {
    terminalBox.addEventListener("mouseenter", function () {
        paused = true;
        // freeze at the current width so an in-progress transition doesn't
        // slide the window out from under the pointer
        var parentW = terminalBox.parentElement.getBoundingClientRect().width;
        var pct = (terminalBox.getBoundingClientRect().width / parentW) * 100;
        terminalBox.style.width = pct + "%";
    });
    terminalBox.addEventListener("mouseleave", function () { paused = false; });
}


function detectMob() {
    return window.innerWidth <= 900;
}


function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}