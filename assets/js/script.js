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


//init object to store window properties
// window.addEventListener("resize", function() {
//     if (window.outerWidth !== windowSize.w || window.outerHeight !== windowSize.h) {
//         windowSize.w = window.outerWidth; // update object with current window properties
//         windowSize.h = window.outerHeight;
//         windowSize.iw = window.innerWidth;
//         windowSize.ih = window.innerHeight;
//         BODY.style.background = getRandomColor(98);
//     }
//     //if the window doesn't resize but the content inside does by + or - 5%
//     else if (window.innerWidth + window.innerWidth * .05 < windowSize.iw
//                 || window.innerWidth - window.innerWidth * .05 > windowSize.iw) {
//         windowSize.iw = window.innerWidth;
//         BODY.style.background = getRandomColor(98);
//   }
// }, false)

