document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'img/img01.jpg',
        'img/img02.jpg',
        'img/img03.jpg',
        'img/img04.jpg',
        'img/img05.jpg',
        'img/img06.jpg',
        'img/img07.jpg',
        'img/img08.jpg'
    ];
    
    let currentIndex = 0;
    const container = document.querySelector('.slideshow-container');

    // Function to preload and display the next image
    function preloadNextImage() {
        if (currentIndex < images.length) {
            const img = new Image();
            img.src = images[currentIndex];
            img.onload = function () {
                container.style.backgroundImage = `url('${images[currentIndex]}')`;
                container.classList.add('show');
                currentIndex++;
                setTimeout(() => {
                    container.classList.remove('show');
                    preloadNextImage();
                }, 5000); // Display time for each image
            };
        } else {
            currentIndex = 0; // Reset the index to create a loop
            preloadNextImage();
        }
    }

    // Start preloading images
    preloadNextImage();

    // Typing animation
    const text = 'Welcome to Gondals';
    let i = 0;
    const speed = 200; // Slower typing speed
    const typeIndicator = '<span class="blinking-cursor">|</span>';

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("welcome-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("welcome-text").innerHTML += typeIndicator;
        }
    }

    typeWriter();

    // Automatically update the year
    document.getElementById('year').textContent = new Date().getFullYear();
});
