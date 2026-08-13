const BODY = document.querySelector("body");
let NABIZ = 2000;
var windowSize = {
    w: window.outerWidth,
    h: window.outerHeight,
    iw: window.innerWidth,
    ih: window.innerHeight
};

var randomWidth = () => {
    let x = 0;
    if (detectMob()) {
        x = getRndInteger(60,85);
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


function detectMob() {
    return window.innerWidth <= 900 && window.innerHeight <= 900;
}


function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}