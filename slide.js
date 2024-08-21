let nextButton = document.getElementById('nxt');
let prevButton = document.getElementById('prv');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

let autoRotate;

// Function to start auto-rotation
const startAutoRotate = () => {
    autoRotate = setInterval(() => {
        showSlider('nxt');
    }, 5000); // Adjust the timing as necessary
};

// Function to stop auto-rotation
const stopAutoRotate = () => {
    clearInterval(autoRotate);
};

// Initial auto-rotation
startAutoRotate();

nextButton.onclick = function() {
    showSlider('nxt');
};

prevButton.onclick = function() {
    showSlider('prv');
};

let unAcceppClick;

const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('nxt', 'prv');
    let items = document.querySelectorAll('.carousel .list .item');
    
    if(type === 'nxt'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('nxt');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prv');
    }

    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

seeMoreButtons.forEach((button) => {
    button.onclick = function() {
        stopAutoRotate(); // Stop auto-slide
        carousel.classList.remove('nxt', 'prv');
        carousel.classList.add('showDetail');
    };
});

backButton.onclick = function() {
    carousel.classList.remove('showDetail');
    startAutoRotate(); // Restart auto-slide
};