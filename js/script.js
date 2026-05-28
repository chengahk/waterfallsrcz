document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     ELEMENTS
  ========================= */

  const header = document.querySelector(".header");
  const progressBar = document.querySelector(".scroll-progress");

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav-links a");

  const slides = document.querySelectorAll(".slide");

  const fadeElements = document.querySelectorAll(".fade, .about-card");

  const counters = document.querySelectorAll(".counter");
  const statsSection = document.getElementById("stats");

  const galleryImages = document.querySelectorAll(".gallery-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close");

  const form = document.querySelector(".contact-form");
  const status = document.getElementById("form-status");

  const toggleCalendarBtn = document.getElementById("toggleCalendarBtn");
  const calendarWrapper = document.getElementById("calendarWrapper");

  const ministriesCarousel = document.querySelector(".ministries-carousel");


  /* =========================
     HERO SLIDER
  ========================= */

  if (slides.length > 0) {

    let currentSlide = 0;

    setInterval(() => {

      slides[currentSlide].classList.remove("active");

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.add("active");

    }, 5000);

  }


  /* =========================
     MOBILE MENU
  ========================= */

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");

      document.body.classList.toggle("menu-open");

    });

    navItems.forEach(link => {

      link.addEventListener("click", () => {

        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");

        document.body.classList.remove("menu-open");

      });

    });

  }


  /* =========================
     FADE-IN OBSERVER
  ========================= */

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  }, {
    threshold: 0.15
  });

  fadeElements.forEach(el => observer.observe(el));


  /* =========================
     COUNTER ANIMATION
  ========================= */

  let counterStarted = false;

  function startCounters() {

    if (counterStarted) return;

    counterStarted = true;

    counters.forEach(counter => {

      const target = +counter.dataset.target;

      let current = 0;

      const increment = target / 60;

      function updateCounter() {

        current += increment;

        if (current < target) {

          counter.innerText = Math.ceil(current);

          requestAnimationFrame(updateCounter);

        } else {

          counter.innerText = target;

        }

      }

      updateCounter();

    });

  }


  /* =========================
     LIGHTBOX
  ========================= */

  if (galleryImages.length && lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(img => {

      img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

      });

    });

    closeBtn.addEventListener("click", () => {

      lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

      if (e.target === lightbox) {

        lightbox.style.display = "none";

      }

    });

  }


  /* =========================
     CONTACT FORM
  ========================= */

  if (form && status) {

    form.addEventListener("submit", async (e) => {

      e.preventDefault();

      const data = new FormData(form);

      try {

        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {

          status.innerHTML = "✅ Message sent successfully!";
          form.reset();

        } else {

          status.innerHTML = "❌ Something went wrong.";

        }

      } catch (error) {

        status.innerHTML = "❌ Network error.";

      }

    });

  }


  /* =========================
     CALENDAR TOGGLE
  ========================= */

  if (toggleCalendarBtn && calendarWrapper) {

    toggleCalendarBtn.addEventListener("click", () => {

      calendarWrapper.classList.toggle("calendar-show");
      calendarWrapper.classList.toggle("calendar-hidden");

      const isVisible =
        calendarWrapper.classList.contains("calendar-show");

      toggleCalendarBtn.textContent = isVisible
        ? "Hide Calendar"
        : "View Full Church Calendar";

      if (isVisible) {

        calendarWrapper.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  }


  /* =========================
     MINISTRIES CAROUSEL
  ========================= */

  if (ministriesCarousel) {

    ministriesCarousel.style.scrollBehavior = "smooth";

    /* DUPLICATE ITEMS FOR LOOP EFFECT */

    const originalItems =
      Array.from(ministriesCarousel.children);

    originalItems.forEach(item => {

      const clone = item.cloneNode(true);

      ministriesCarousel.appendChild(clone);

    });

    /* START POSITION */

    requestAnimationFrame(() => {

      ministriesCarousel.scrollLeft =
        ministriesCarousel.scrollWidth / 4;

      updateActiveMinistryCard();

    });

    /* ACTIVE CENTER CARD */

    function updateActiveMinistryCard() {

      const cards =
        ministriesCarousel.querySelectorAll(".ministries-item");

      const center =
        ministriesCarousel.scrollLeft +
        ministriesCarousel.offsetWidth / 2;

      cards.forEach(card => {

        const cardCenter =
          card.offsetLeft + card.offsetWidth / 2;

        const distance =
          Math.abs(center - cardCenter);

        if (distance < card.offsetWidth / 2) {

          card.classList.add("active");

        } else {

          card.classList.remove("active");

        }

      });

    }

    /* LOOP + ACTIVE CARD */

    let carouselTicking = false;

    ministriesCarousel.addEventListener("scroll", () => {

      if (!carouselTicking) {

        requestAnimationFrame(() => {

          const maxScroll =
            ministriesCarousel.scrollWidth -
            ministriesCarousel.clientWidth;

          if (ministriesCarousel.scrollLeft <= 0) {

            ministriesCarousel.scrollLeft =
              maxScroll / 2;

          }

          if (ministriesCarousel.scrollLeft >= maxScroll) {

            ministriesCarousel.scrollLeft =
              maxScroll / 2;

          }

          updateActiveMinistryCard();

          carouselTicking = false;

        });

        carouselTicking = true;

      }

    }, {
      passive: true
    });

  }

  /* =========================
   ABOUT CARDS SNAP EFFECT
========================= */

const aboutGrid = document.querySelector(".about-grid");

if (aboutGrid) {

  const aboutCards =
    aboutGrid.querySelectorAll(".about-card");

  function updateActiveAboutCard() {

    const center =
      aboutGrid.scrollLeft +
      aboutGrid.offsetWidth / 2;

    aboutCards.forEach(card => {

      const cardCenter =
        card.offsetLeft + card.offsetWidth / 2;

      const distance =
        Math.abs(center - cardCenter);

      if (distance < card.offsetWidth / 2) {

        card.classList.add("active");

      } else {

        card.classList.remove("active");

      }

    });

  }

  aboutGrid.addEventListener(
    "scroll",
    updateActiveAboutCard,
    { passive: true }
  );

  updateActiveAboutCard();

}

  /* =========================
     OPTIMIZED SCROLL HANDLER
  ========================= */

  let ticking = false;

  function handleScroll() {

    const scrollY = window.scrollY;


    /* HEADER EFFECT */

    if (header) {

      header.classList.toggle("scrolled", scrollY > 50);

    }


    /* PROGRESS BAR */

    if (progressBar) {

      const docHeight =
        document.body.scrollHeight - window.innerHeight;

      const progress =
        (scrollY / docHeight) * 100;

      progressBar.style.width =
        progress + "%";

    }


    /* ACTIVE NAVIGATION */

    let currentSection = "";

    sections.forEach(section => {

      const sectionTop =
        section.offsetTop - 140;

      const sectionHeight =
        section.offsetHeight;

      if (
        scrollY >= sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {

        currentSection =
          section.getAttribute("id");

      }

    });

    navItems.forEach(link => {

      link.classList.remove("active");

      if (
        link.getAttribute("href") ===
        `#${currentSection}`
      ) {

        link.classList.add("active");

      }

    });


    /* COUNTER START */

    if (statsSection && !counterStarted) {

      const rect =
        statsSection.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {

        startCounters();

      }

    }

    ticking = false;

  }


  window.addEventListener("scroll", () => {

    if (!ticking) {

      requestAnimationFrame(handleScroll);

      ticking = true;

    }

  }, {
    passive: true
  });


  /* =========================
     INITIAL RUN
  ========================= */

  handleScroll();

});