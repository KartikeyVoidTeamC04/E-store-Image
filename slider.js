// Auto-like functionality
function autoLike() {
    // Implement your auto-like logic here
    // This function will be called automatically to like the images
  }
  
  // Image slider functionality
  document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll("#imageSlider img");
    var currentImageIndex = 0;
  
    function showImage(index) {
      for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("active");
      }
      images[index].classList.add("active");
    }
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
      autoLike(); // Call auto-like function after changing the image
    }
  
    // Change image every 5 seconds (adjust the interval as needed)
    setInterval(nextImage, 2000);
  });
  