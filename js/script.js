/* ========================= */
/* FADE-IN ANIMATION (CLEAN) */
/* ========================= 

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
/* ========================= 

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
/* ========================= 

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.onclick = () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
};


/* ========================= */
/* HEADER SCROLL EFFECT */
/* ========================= 

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});


/* ========================= */
/* LIGHTBOX */
/* ========================= 

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
/* =========================

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

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;

  document.querySelector(".scroll-progress").style.width = progress + "%";
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  let offset = window.scrollY;
  hero.style.backgroundPositionY = offset * 0.5 + "px";
});

const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    status.innerHTML = "✅ Message sent successfully!";
    form.reset();
  } else {
    status.innerHTML = "❌ Oops! Something went wrong.";
  }
});

menuToggle.classList.toggle("active");
navLinks.classList.toggle("active"); */


document.addEventListener("DOMContentLoaded", () => {

/* ========================= */
/* FADE-IN ANIMATION */
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

if (slides.length > 0) {
  setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }, 5000);
}


/* ========================= */
/* MOBILE MENU */
/* ========================= */

const menu = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      document.body.classList.remove("menu-open");
    });
  });
}


/* ========================= */
/* HEADER SCROLL EFFECT */
/* ========================= */

const header = document.querySelector(".header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 50);
  });
}


/* ========================= */
/* LIGHTBOX */
/* ========================= */

const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (images.length && lightbox && lightboxImg && closeBtn) {
  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.onclick = () => {
    lightbox.style.display = "none";
  };
}


/* ========================= */
/* COUNTER */
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

if (statsSection) {
  window.addEventListener("scroll", () => {
    if (counted) return;

    const rect = statsSection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      runCounters();
      counted = true;
    }
  });
}


/* ========================= */
/* SCROLL PROGRESS */
/* ========================= */

const progressBar = document.querySelector(".scroll-progress");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";
  });
}


/* ========================= */
/* ACTIVE NAV LINK */
/* ========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


/* ========================= */
/* PARALLAX HERO */
/* ========================= */

const hero = document.querySelector(".hero");

if (hero) {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
  });
}


/* ========================= */
/* CONTACT FORM */
/* ========================= */

const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

if (form && status) {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.innerHTML = "✅ Message sent successfully!";
      form.reset();
    } else {
      status.innerHTML = "❌ Oops! Something went wrong.";
    }
  });
}

});