const sentences = [
    "Yash Vardhan Rajpoot",
    "Full Stack Web Developer",
    "Creating Beautiful Websites",
    "Building Modern Applications",
    "Turning Ideas into Reality"
];

const aboutme = document.querySelector("#aboutme");
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentSentence = sentences[sentenceIndex];
    
    if (isDeleting) {
        // Deleting text
        aboutme.innerHTML = currentSentence.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeText, 30);
    } else {
        // Typing text
        aboutme.innerHTML = currentSentence.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, 60);
    }

    // When typing is complete
    if (!isDeleting && charIndex === currentSentence.length) {
        // Wait before starting to delete
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    }

    // When deleting is complete
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // Move to next sentence
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
}

// Start the animation
typeText();

// Add mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const rightMenu = document.querySelector('.right');

menuToggle.addEventListener('click', () => {
    rightMenu.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!rightMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        rightMenu.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const photo = document.querySelector('.photo');
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    // Touch events
    photo.addEventListener('touchstart', dragStart, false);
    document.addEventListener('touchend', dragEnd, false);
    document.addEventListener('touchmove', drag, false);

    // Mouse events
    photo.addEventListener('mousedown', dragStart, false);
    document.addEventListener('mouseup', dragEnd, false);
    document.addEventListener('mousemove', drag, false);

    function dragStart(e) {
        if (e.type === 'touchstart') {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === photo) {
            isDragging = true;
            photo.classList.add('dragging');
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        photo.classList.remove('dragging');
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();

            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, photo);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    // Reset position when window is resized
    window.addEventListener('resize', function() {
        xOffset = 0;
        yOffset = 0;
        setTranslate(0, 0, photo);
    });
});
