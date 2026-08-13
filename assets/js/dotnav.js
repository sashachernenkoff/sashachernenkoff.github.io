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
    var slideIds = ['one', 'two', 'three', 'four', 'five'];
    for (var i = 0; i < slideIds.length; i++) {
        var el = document.getElementById(slideIds[i]);
        if (!el) continue;
        var dotEl = document.getElementById(slideIds[i] + '-dot');
        if (!dotEl) continue;
        if (checkVisible(el)) {
            dotstyleNav(dotEl);
            break;
        }
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