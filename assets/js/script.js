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

document.addEventListener('scrollEnd', scrollTrigger);

function setMain(thumbnailImage) {

    // change the main image to the thumbnail that was clicked
    var mainImage = document.getElementById("imageBox");
    mainImage.src = thumbnailImage.src;

    var childImages = document.getElementsByClassName("lb-thumbnail");
    var i;

    // clear all other borders
    for ( i = 0; i < childImages.length; i++ ) {
        childImages[i].style.border = "";
    }

    // add border to the thumbnail that was clicked
    thumbnailImage.style.border = "0.5px solid #333";
}

function openModal(img) {

    // change the modal image to the thumbnail that was clicked
    var modalImage = document.getElementById("modalImage");
    modalImage.src = img.src;

    // make modal visible
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {

    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function dotstyleNav(clickedDot) {

    var allDots = document.getElementsByClassName("current");
    var i;

    // clear all other dots
    for ( i = 0; i < allDots.length; i++ ) {
        allDots[i].className = '';
    }

    // fill in dot that was clicked
    clickedDot.className = "current";
}

function scrollTrigger() {

    var marinade_pos = document.getElementById('one');
    var freak_pos = document.getElementById('two');
    var nm_pos = document.getElementById('three');

    if (checkVisible(marinade_pos)) {
        dotstyleNav(document.getElementById("one-dot"));   
    }
    else if (checkVisible(freak_pos)) {
        dotstyleNav(document.getElementById("two-dot"));
    }
    else if (checkVisible(nm_pos)) {
        dotstyleNav(document.getElementById("three-dot"));
    }
}

function checkVisible(element) {
    console.log('In checkVisible()!');

    var elmPos = element.offsetLeft + (element.offsetWidth/2);
    console.log(element);
    console.log('elmPos: ' + elmPos);

    // find how far right was scrolled through wrapper-scroll div
    var curPos = document.getElementById('outer-wrapper-scroll').scrollTop;
    console.log('curPos: ' + curPos);
    
    return (elmPos > curPos) ? true : false;
}

