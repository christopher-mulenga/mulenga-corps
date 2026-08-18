/* ==========================================================================
   Mulenga Corps — main.js
   Handles: page-load animation, mobile nav, active link highlighting,
   scroll reveal, animated counters, portfolio lightbox, contact form
   validation + submission feedback, back-to-top, lazy image loading.
   Vanilla JS only — no dependencies.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------
     1. PAGE LOAD ANIMATION
     Fades the page in and staggers a gentle upward-fade on elements
     tagged with [data-animate] as soon as the DOM is ready.
  ------------------------------------------------------------------ */
  document.body.classList.add("page-loading");

  window.addEventListener("DOMContentLoaded", function () {
    document.body.classList.remove("page-loading");
    document.body.classList.add("page-loaded");

    var animatedEls = document.querySelectorAll("[data-animate]");
    animatedEls.forEach(function (el, i) {
      el.classList.add("pl-item");
      el.style.animationDelay = (i * 0.08) + "s";
    });
  });

  /* ------------------------------------------------------------------
     2. MOBILE NAVIGATION (hamburger menu)
  ------------------------------------------------------------------ */
  var hamburger = document.querySelector(".hamburger");
  var mainNav = document.querySelector(".main-nav");

  if (hamburger && mainNav) {
    hamburger.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("open");
      hamburger.classList.toggle("open", isOpen);
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when a nav link is tapped (mobile)
    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside the header
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".site-header")) {
        mainNav.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------------------------------------------------
     3. ACTIVE NAVIGATION LINK HIGHLIGHTING
     Marks the nav link matching the current page filename as active.
  ------------------------------------------------------------------ */
  (function highlightActiveLink() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav a").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === path || (path === "" && href === "index.html")) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  })();

  /* ------------------------------------------------------------------
     4. SMOOTH SCROLLING for in-page anchor links
     (CSS handles most of it; this adds an offset for the fixed header
     and works for browsers where scroll-behavior is patchy.)
  ------------------------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId.length < 2) return;
      var target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      var headerH = document.querySelector(".site-header")
        ? document.querySelector(".site-header").offsetHeight
        : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 10;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ------------------------------------------------------------------
     5. SCROLL REVEAL ANIMATIONS
     Elements with class "reveal" fade/slide up into view.
  ------------------------------------------------------------------ */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ------------------------------------------------------------------
     6. ANIMATED NUMBER COUNTERS
     Counts up any [data-counter] element from 0 to its target value
     once it scrolls into view.
  ------------------------------------------------------------------ */
  var counters = document.querySelectorAll("[data-counter]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-counter"), 10) || 0;
    var duration = 1600;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var value = Math.floor(eased * target);
      el.textContent = value.toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString();
      }
    }
    window.requestAnimationFrame(step);
  }

  if (counters.length) {
    if ("IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach(function (el) { counterObserver.observe(el); });
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* ------------------------------------------------------------------
     7. PORTFOLIO LIGHTBOX
     Builds a single lightbox overlay and wires up any [data-lightbox]
     images on the page, with keyboard and prev/next navigation.
  ------------------------------------------------------------------ */
  (function initLightbox() {
    var triggers = document.querySelectorAll("[data-lightbox]");
    if (!triggers.length) return;

    var items = Array.prototype.map.call(triggers, function (t) {
      return {
        src: t.getAttribute("data-lightbox"),
        caption: t.getAttribute("data-caption") || ""
      };
    });

    var overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Image viewer");
    overlay.innerHTML =
      '<button class="lightbox-close" aria-label="Close image viewer">&times;</button>' +
      '<button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#10094;</button>' +
      '<div>' +
        '<img src="" alt="" />' +
        '<p class="lightbox-caption"></p>' +
      '</div>' +
      '<button class="lightbox-nav lightbox-next" aria-label="Next image">&#10095;</button>';
    document.body.appendChild(overlay);

    var imgEl = overlay.querySelector("img");
    var captionEl = overlay.querySelector(".lightbox-caption");
    var currentIndex = 0;

    function openLightbox(index) {
      currentIndex = index;
      var item = items[currentIndex];
      imgEl.src = item.src;
      imgEl.alt = item.caption;
      captionEl.textContent = item.caption;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      overlay.classList.remove("open");
      
    }

    function showNext() { openLightbox((currentIndex + 1) % items.length); }
    function showPrev() { openLightbox((currentIndex - 1 + items.length) % items.length); }

    triggers.forEach(function (trigger, i) {
      trigger.style.cursor = "pointer";
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        openLightbox(i);
      });
    });

    overlay.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    overlay.querySelector(".lightbox-next").addEventListener("click", showNext);
    overlay.querySelector(".lightbox-prev").addEventListener("click", showPrev);
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    });
  })();

  /* ------------------------------------------------------------------
     8. CONTACT FORM VALIDATION + SUBMISSION FEEDBACK
     Validates required fields client-side, then submits to the
     Formspree-compatible endpoint via fetch (no page reload).
     Replace FORM_ENDPOINT with your organisation's own endpoint.
  ------------------------------------------------------------------ */
  (function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var FORM_ENDPOINT = form.getAttribute("action") || "https://formspree.io/f/your-form-id";
    var msgBox = document.getElementById("form-message");

    function setFieldError(field, message) {
      var group = field.closest(".form-group");
      if (!group) return;
      group.classList.add("error");
      var errEl = group.querySelector(".field-error");
      if (errEl) errEl.textContent = message;
    }

    function clearFieldError(field) {
      var group = field.closest(".form-group");
      if (!group) return;
      group.classList.remove("error");
    }

    function isValidEmail(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function validateForm() {
      var valid = true;
      var required = form.querySelectorAll("[required]");
      required.forEach(function (field) {
        clearFieldError(field);
        var value = field.value.trim();
        if (!value) {
          setFieldError(field, "This field is required.");
          valid = false;
        } else if (field.type === "email" && !isValidEmail(value)) {
          setFieldError(field, "Please enter a valid email address.");
          valid = false;
        }
      });
      return valid;
    }

    form.querySelectorAll("input, textarea").forEach(function (field) {
      field.addEventListener("input", function () { clearFieldError(field); });
    });

    function showMessage(type, text) {
      if (!msgBox) return;
      msgBox.textContent = text;
      msgBox.className = "form-msg show " + type;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validateForm()) {
        showMessage("error", "Please correct the highlighted fields and try again.");
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      var formData = new FormData(form);

      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            showMessage("success", "Thank you. Your message has been received and our team will respond shortly.");
            form.reset();
          } else {
            return response.json().then(function (data) {
              throw new Error((data && data.error) || "Submission failed.");
            });
          }
        })
        .catch(function () {
          showMessage(
            "error",
            "We could not send your message right now. Please try again, or contact us directly at mulengachristopher00@gmail.com."
          );
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
          }
        });
    });
  })();

  /* ------------------------------------------------------------------
     9. BACK-TO-TOP BUTTON
  ------------------------------------------------------------------ */
  (function initBackToTop() {
    var btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", function () {
      btn.classList.toggle("show", window.scrollY > 480);
    });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  })();

  /* ------------------------------------------------------------------
     10. HEADER SHADOW ON SCROLL
  ------------------------------------------------------------------ */
  (function initHeaderShadow() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    window.addEventListener("scroll", function () {
      if (window.scrollY > 12) {
        header.style.boxShadow = "0 4px 20px rgba(10,61,98,.16)";
      } else {
        header.style.boxShadow = "0 2px 14px rgba(10,61,98,.08)";
      }
    });
  })();

  /* ------------------------------------------------------------------
     11. LAZY LOADING FADE-IN
     Native lazy loading is set via the loading="lazy" attribute in
     HTML; this just fades images in smoothly once they've loaded.
  ------------------------------------------------------------------ */
  (function initLazyFade() {
    var lazyImgs = document.querySelectorAll('img[loading="lazy"]');
    lazyImgs.forEach(function (img) {
      if (img.complete) {
        img.classList.add("loaded");
      } else {
        img.addEventListener("load", function () { img.classList.add("loaded"); });
      }
    });
  })();

})();