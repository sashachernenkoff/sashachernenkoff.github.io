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