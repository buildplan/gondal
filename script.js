// Typing animation
const text = 'Welcome to Gondals';
let i = 0;
const speed = 150;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("welcome-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            document.getElementById("welcome-text").innerHTML += '<span class="blinking-cursor">|</span>';
        }, speed);
    }
}
document.addEventListener('DOMContentLoaded', typeWriter);

// Automatically update the year
document.getElementById('year').textContent = new Date().getFullYear();
