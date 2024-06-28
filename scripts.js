// Get the modal
var modal = document.getElementById('modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById('modal-img');
var captionText = document.getElementById('caption');
var artPieces = document.querySelectorAll('.art-piece img');

// Function to open modal and handle rotation for SprayPaint1 and SprayPaint2
function openModal(img) {
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    
    // Check if the clicked image is SprayPaint1 or SprayPaint2
    if (img.id === 'sprayPaint1') {
        modalImg.classList.add('rotate-90-modal');
        modalImg.classList.remove('rotate-90-left'); // Ensure no conflicting classes
    } else if (img.id === 'sprayPaint2') {
        modalImg.classList.add('rotate-90-left');
        modalImg.classList.remove('rotate-90-modal'); // Ensure no conflicting classes
    } else {
        modalImg.classList.remove('rotate-90-modal', 'rotate-90-left');
    }
}

// Add event listeners to all art pieces
artPieces.forEach(img => {
    img.onclick = function(event){
        event.stopPropagation(); // Prevent the default click behavior
        openModal(img);
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
    modalImg.classList.remove('rotate-90-modal', 'rotate-90-left'); // Remove rotation when closing the modal
}
