const images = ['bromo.jpg', 'pure.jpg', 'pantai.jpg']; // Add more image paths if needed
let currentImageIndex = 1;
const bodyElement = document.body;

function changeBackgroundImage() {
    bodyElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change background image every 5 seconds (adjust as needed)
setInterval(changeBackgroundImage, 10000);