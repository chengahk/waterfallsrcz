const elements = document.querySelectorAll('.fade');

function reveal(){

const trigger = window.innerHeight * 0.85;

elements.forEach(el => {

const top = el.getBoundingClientRect().top;

if(top < trigger){
el.classList.add('show');
}

});

}

window.addEventListener('scroll', reveal);
reveal();


// LIGHTBOX

const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const close = document.getElementById('close');

images.forEach(img => {

img.addEventListener('click', () => {

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});

});

close.onclick = () => {
lightbox.style.display = "none";
};


// HERO SLIDER

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide(){

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){
currentSlide = 0;
}

slides[currentSlide].classList.add("active");

}

setInterval(nextSlide, 5000);


// MOBILE MENU

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {

nav.classList.toggle("open");

});

// COUNTER ANIMATION

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");
const c = +counter.innerText;

const increment = target / 200;

if(c < target){
counter.innerText = `${Math.ceil(c + increment)}`;
setTimeout(updateCounter,10);
}else{
counter.innerText = target;
}

};

updateCounter();

});

const faders = document.querySelectorAll('.fade');

const appearOptions = {
threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
entries.forEach(entry => {
if(!entry.isIntersecting){
return;
}else{
entry.target.classList.add('show');
observer.unobserve(entry.target);
}
});
}, appearOptions);

faders.forEach(fader => {
appearOnScroll.observe(fader);
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
navMenu.classList.toggle('active');
});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active");
});