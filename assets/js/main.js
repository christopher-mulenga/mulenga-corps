/* ==========================================================================
   Mulenga Corps — main.js
   Features: page-load animation, mobile menu, active nav link, smooth
   scrolling, scroll reveal, animated counters, portfolio lightbox,
   contact form, back-to-top button, header shadow, lazy image fade-in.
   Plain (vanilla) JavaScript — no libraries.
   ========================================================================== */

/* Everything sits inside this one function so that our variables stay
   private and cannot clash with other scripts on the page. */
(function () {
  "use strict"; // tells the browser to warn us about common mistakes

  /* ======================================================================
     1. PAGE-LOAD ANIMATION
     ====================================================================== */

  // While the page is still being built, mark the body as "loading".
  document.body.classList.add("page-loading");

  // When the HTML is ready, switch to the "loaded" state and fade in
  // every element that has a data-animate attribute, one after another.
  window.addEventListener("DOMContentLoaded", function () {
    document.body.classList.remove("page-loading");
    document.body.classList.add("page-loaded");

    const animatedItems = document.querySelectorAll("[data-animate]");

    animatedItems.forEach(function (item, index) {
      item.classList.add("pl-item");
      item.style.animationDelay = (index * 0.08) + "s"; // 0.08s stagger
    });
  });

  /* ======================================================================
     2. MOBILE NAVIGATION (hamburger menu)
     ====================================================================== */

  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".main-nav");

  // Small helper so the same three "close" lines are written only once.
  function closeMenu() {
    if (!menu || !hamburger) return;
    menu.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  if (hamburger && menu) {
    // Open or close the menu when the hamburger button is clicked.
    hamburger.addEventListener("click", function () {
      const isOpen = menu.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu after the visitor picks a navigation link.
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close the menu when the visitor clicks anywhere outside the header.
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".site-header")) {
        closeMenu();
      }
    });
  }

  /* ======================================================================
     3. ACTIVE NAVIGATION LINK
     ====================================================================== */

  // "/portfolio.html" becomes "portfolio.html". If the URL ends with "/",
  // we treat the page as index.html.
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* ======================================================================
     4. SMOOTH SCROLLING FOR IN-PAGE LINKS
     ====================================================================== */

  const header = document.querySelector(".site-header");
  const pageAnchors = document.querySelectorAll('a[href^="#"]');

  pageAnchors.forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
      const targetId = anchor.getAttribute("href").slice(1); // drop the "#"
      const target = document.getElementById(targetId);

      if (!target) return; // not a real section here — let the browser handle it

      event.preventDefault(); // stop the instant jump

      let headerHeight = 0;
      if (header) {
        headerHeight = header.offsetHeight;
      }

      // Where the section is, minus the fixed header, minus a small gap.
      const targetTop =
        target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;

      window.scrollTo({ top: targetTop, behavior: "smooth" });
    });
  });

  /* ======================================================================
     5. SCROLL-REVEAL ANIMATIONS
     ====================================================================== */

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealItems.length > 0) {
    // IntersectionObserver tells us when an element enters the screen.
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in"); // the CSS animates this class
          revealObserver.unobserve(entry.target); // stop watching it
        }
      });
    }, { threshold: 0.15 });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    // Older browser: just show everything immediately.
    revealItems.forEach(function (item) {
      item.classList.add("in");
    });
  }

  /* ======================================================================
     6. ANIMATED NUMBER COUNTERS
     ====================================================================== */

  const counters = document.querySelectorAll("[data-counter]");

  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-counter"), 10) || 0;
    const duration = 1600;          // total time in milliseconds
    const steps = 60;               // how many times the number changes
    const stepTime = duration / steps;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(function () {
      current = current + increment;

      if (current >= target) {
        counter.textContent = target.toLocaleString(); // exact final value
        clearInterval(timer);                          // stop the timer
      } else {
        counter.textContent = Math.floor(current).toLocaleString();
      }
    }, stepTime);
  }

  if (counters.length > 0) {
    if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target); // run only once
          }
        });
      }, { threshold: 0.4 });

      counters.forEach(function (counter) {
        counterObserver.observe(counter);
      });
    } else {
      // Older browser: count straight away.
      counters.forEach(function (counter) {
        animateCounter(counter);
      });
    }
  }

  /* ======================================================================
     7. PORTFOLIO LIGHTBOX
     ====================================================================== */

  function initLightbox() {
    const triggers = document.querySelectorAll("[data-lightbox]");

    if (triggers.length === 0) return; // this page has no portfolio images

    // 1. Collect the image address and caption of every trigger.
    const items = [];
    triggers.forEach(function (trigger) {
      items.push({
        src: trigger.getAttribute("data-lightbox"),
        caption: trigger.getAttribute("data-caption") || ""
      });
    });

    // 2. Build the overlay once and add it to the page.
    const overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Image viewer");

    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Close image viewer">&times;</button>' +
      '<button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#10094;</button>' +
      "<div>" +
        '<img alt="">' +
        '<p class="lightbox-caption"></p>' +
      "</div>" +
      '<button class="lightbox-nav lightbox-next" aria-label="Next image">&#10095;</button>';

    document.body.appendChild(overlay);

    const bigImage = overlay.querySelector("img");
    const captionText = overlay.querySelector(".lightbox-caption");
    const closeButton = overlay.querySelector(".lightbox-close");
    const nextButton = overlay.querySelector(".lightbox-next");
    const prevButton = overlay.querySelector(".lightbox-prev");

    let currentIndex = 0;

    // 3. Helper functions.
    function openLightbox(index) {
      currentIndex = index;
      const item = items[currentIndex];

      bigImage.src = item.src;
      bigImage.alt = item.caption;
      captionText.textContent = item.caption;

      overlay.classList.add("open");
      document.body.style.overflow = "hidden"; // stop background scrolling
      closeButton.focus();                     // let keyboard users in
    }

    function closeLightbox() {
      overlay.classList.remove("open");
      document.body.style.overflow = "";       // give scrolling back (bug fix)
    }

    function showNextImage() {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= items.length) nextIndex = 0; // wrap around to the first
      openLightbox(nextIndex);
    }

    function showPreviousImage() {
      let prevIndex = currentIndex - 1;
      if (prevIndex < 0) prevIndex = items.length - 1; // wrap around to the last
      openLightbox(prevIndex);
    }

    // 4. Click events.
    triggers.forEach(function (trigger, index) {
      trigger.style.cursor = "pointer";
      trigger.addEventListener("click", function (event) {
        event.preventDefault();
        openLightbox(index);
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPreviousImage);

    // Clicking the dark background (not the image) also closes it.
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) closeLightbox();
    });

    // 5. Keyboard controls.
    document.addEventListener("keydown", function (event) {
      if (!overlay.classList.contains("open")) return;

      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPreviousImage();
    });
  }

  initLightbox();

  /* ======================================================================
     8. CONTACT FORM — VALIDATION AND SUBMISSION
     ====================================================================== */

  function initContactForm() {
    const contactForm = document.getElementById("contact-form");

    if (!contactForm) return; // this page has no contact form

    const formEndpoint = contactForm.getAttribute("action"); // real endpoint
    const messageBox = document.getElementById("form-message");
    const sendErrorMessage =
      "We could not send your message right now. Please try again, or " +
      "contact us directly at mulengachristopher00@gmail.com.";

    // ---- Small helpers -------------------------------------------------

    function showMessage(type, text) {
      if (!messageBox) return;
      messageBox.textContent = text;
      messageBox.className = "form-msg show " + type;
    }

    function setFieldError(field, message) {
      const group = field.closest(".form-group");
      if (!group) return;
      group.classList.add("error");
      const errorText = group.querySelector(".field-error");
      if (errorText) errorText.textContent = message;
    }

    function clearFieldError(field) {
      const group = field.closest(".form-group");
      if (!group) return;
      group.classList.remove("error");
    }

    function isValidEmail(value) {
      // Something, then @, then something, then a dot, then something.
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function validateForm() {
      let valid = true;
      const requiredFields = contactForm.querySelectorAll("[required]");

      requiredFields.forEach(function (field) {
        clearFieldError(field);
        const value = field.value.trim();

        if (value === "") {
          setFieldError(field, "This field is required.");
          valid = false;
        } else if (field.type === "email" && !isValidEmail(value)) {
          setFieldError(field, "Please enter a valid email address.");
          valid = false;
        }
      });

      return valid;
    }

    // ---- Clear a field's error as soon as the visitor edits it ----------

    const fields = contactForm.querySelectorAll("input, textarea");
    fields.forEach(function (field) {
      field.addEventListener("input", function () {
        clearFieldError(field);
      });
    });

    // ---- Submit ---------------------------------------------------------

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // stop the normal page reload

      if (!validateForm()) {
        showMessage("error", "Please correct the highlighted fields and try again.");
        return;
      }

      // Safety check: never post to a made-up address.
      if (!formEndpoint) {
        showMessage(
          "error",
          "Sorry, the contact form is not connected yet. Please email us " +
          "directly at mulengachristopher00@gmail.com."
        );
        return;
      }

      const submitButton = contactForm.querySelector('button[type="submit"]');
      let originalButtonText = "";

      if (submitButton) {
        originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = "Sending…";
      }

      const formData = new FormData(contactForm);

      fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            showMessage(
              "success",
              "Thank you. Your message has been received and our team " +
              "will respond shortly."
            );
            contactForm.reset(); // only clear the form after success
          } else {
            showMessage("error", sendErrorMessage);
          }
        })
        .catch(function () {
          // Network problem, no internet, server unreachable…
          showMessage("error", sendErrorMessage);
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
          }
        });
    });
  }

  initContactForm();

  /* ======================================================================
     9. BACK-TO-TOP BUTTON
     ====================================================================== */

  const backToTopButton = document.getElementById("back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 480) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ======================================================================
     10. HEADER SHADOW WHILE SCROLLING
     ====================================================================== */

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 12) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  /* ======================================================================
     11. LAZY IMAGE FADE-IN
     ====================================================================== */

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');

  lazyImages.forEach(function (image) {
    if (image.complete) {
      // The picture was already in the cache before we checked.
      image.classList.add("loaded");
    } else {
      image.addEventListener("load", function () {
        image.classList.add("loaded");
      });
    }
  });
})();