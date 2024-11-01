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

document.addEventListener('DOMContentLoaded', typeWriter);

// Automatically update the year
document.getElementById('year').textContent = new Date().getFullYear();
