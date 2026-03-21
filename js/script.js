/* ========================= */
/* FADE-IN ANIMATION (CLEAN) */
/* ========================= */

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade, .about-card").forEach(el => {
  observer.observe(el);
});


/* ========================= */
/* HERO SLIDER */
/* ========================= */

const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showNextSlide() {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}

setInterval(showNextSlide, 5000);


/* ========================= */
/* MOBILE MENU */
/* ========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
};


/* ========================= */
/* HEADER SCROLL EFFECT */
/* ========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});


/* ========================= */
/* LIGHTBOX */
/* ========================= */

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};


/* ========================= */
/* COUNTER (ON SCROLL) */
/* ========================= */

const counters = document.querySelectorAll(".counter");
const statsSection = document.getElementById("stats");

let counted = false;

function runCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    function update() {
      const increment = target / 80;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    }

    update();
  });
}

window.addEventListener("scroll", () => {
  if (!statsSection || counted) return;

  const rect = statsSection.getBoundingClientRect();

  if (rect.top < window.innerHeight - 100) {
    runCounters();
    counted = true;
  }
});