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
    console.log('In scrollTriger()!');

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

    // find how far right was scrolled through outer-wrapper-scroll div
    var curPos = document.getElementById('outer-wrapper-scroll').scrollTop;
    console.log('curPos: ' + curPos);
    
    return (elmPos >= curPos) ? true : false;
}