function setMain1(thumbnailImage) {

    // change the main image to the thumbnail that was clicked
    var mainImage = document.getElementById("imageBox-1");
    mainImage.src = thumbnailImage.src;

    var childImages = document.getElementsByClassName("lb-thumbnail-1");
    var i;

    // clear all other borders
    for ( i = 0; i < childImages.length; i++ ) {
        childImages[i].style.border = "";
    }

    // add border to the thumbnail that was clicked
    thumbnailImage.style.border = "0.5px solid #333";
}

function setMain2(thumbnailImage) {

    // change the main image to the thumbnail that was clicked
    var mainImage = document.getElementById("imageBox-2");
    mainImage.src = thumbnailImage.src;

    var childImages = document.getElementsByClassName("lb-thumbnail-2");
    var i;

    // clear all other borders
    for ( i = 0; i < childImages.length; i++ ) {
        childImages[i].style.border = "";
    }

    // add border to the thumbnail that was clicked
    thumbnailImage.style.border = "0.5px solid #333";
}

function setMain3(thumbnailImage) {

    // change the main image to the thumbnail that was clicked
    var mainImage = document.getElementById("imageBox-3");
    mainImage.src = thumbnailImage.src;

    var childImages = document.getElementsByClassName("lb-thumbnail-3");
    var i;

    // clear all other borders
    for ( i = 0; i < childImages.length; i++ ) {
        childImages[i].style.border = "";
    }

    // add border to the thumbnail that was clicked
    thumbnailImage.style.border = "0.5px solid #333";
}

function setMain5(thumbnailImage) {

    // change the main image to the thumbnail that was clicked
    var mainImage = document.getElementById("imageBox-5");
    mainImage.src = thumbnailImage.src;

    var childImages = document.getElementsByClassName("lb-thumbnail-5");
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