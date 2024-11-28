











































// JavaScript to swap images
const smallImages = document.querySelectorAll('.small_img'); // Collect all small images
const productImg = document.getElementById('ProductImg');  // Main product image

// Add click event to each small image
smallImages.forEach(image => {
    image.addEventListener('click', function() {
        // Change the main image source when a small image is clicked
        productImg.src = this.src;
    });
});
