/* ============================================================
   Snape Art Conservation — site behaviour
   Language toggle, mobile nav, image reel, contact form
   ============================================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "snape-lang";

  function getLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
    var browserLang = (navigator.language || "en").slice(0, 2);
    return translations[browserLang] ? browserLang : "en";
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = "en";
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = translations[lang][key];
      if (value !== undefined) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var value = translations[lang][key];
      if (value !== undefined) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  function initActiveNav() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav a").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href === path) link.classList.add("active");
    });
  }

  function initReel() {
    var AUTOPLAY_DELAY = 4500;
    var RESUME_DELAY = 7000;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.querySelectorAll(".reel").forEach(function (reel) {
      var track = reel.querySelector(".reel-track");
      var prev = reel.querySelector(".reel-prev");
      var next = reel.querySelector(".reel-next");
      if (!track) return;

      var scrollAmount = function () {
        var img = track.querySelector("img");
        return img ? img.getBoundingClientRect().width + 16 : 300;
      };

      var atEnd = function () {
        return track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
      };

      var advance = function () {
        if (atEnd()) {
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
        }
      };

      var goBack = function () {
        if (track.scrollLeft <= 4) {
          track.scrollTo({ left: track.scrollWidth, behavior: "smooth" });
        } else {
          track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
        }
      };

      var timer = null;
      var resumeTimer = null;

      var stop = function () {
        if (timer) { clearInterval(timer); timer = null; }
      };

      var start = function () {
        if (reduceMotion || timer) return;
        timer = setInterval(advance, AUTOPLAY_DELAY);
      };

      var pauseThenResume = function () {
        stop();
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(start, RESUME_DELAY);
      };

      if (prev) prev.addEventListener("click", function () {
        goBack();
        pauseThenResume();
      });
      if (next) next.addEventListener("click", function () {
        advance();
        pauseThenResume();
      });

      reel.addEventListener("mouseenter", stop);
      reel.addEventListener("mouseleave", start);
      reel.addEventListener("touchstart", pauseThenResume, { passive: true });
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) stop(); else start();
      });

      start();
    });
  }

  function initFadeIn() {
    var items = document.querySelectorAll(".fade-in");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { observer.observe(el); });
  }

  function initServiceToggles() {
    document.querySelectorAll(".service-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      });
    });
  }

  function initContactForm() {
    var form = document.querySelector("#contact-form");
    if (!form) return;
    // Submits directly via FormSubmit.co (no backend needed, no account setup
    // required by the site owner beyond confirming the destination inbox once).
    // FormSubmit's file-upload support only works with a real, native
    // multipart form submission (fetch/AJAX silently drops attachments), so
    // the form targets a hidden iframe instead of using fetch — this avoids
    // a page reload while still submitting the form the "normal" way.
    var frame = document.querySelector("#formsubmit-frame");
    var MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB, FormSubmit's limit
    var justSubmitted = false;

    form.addEventListener("submit", function (e) {
      var lang = document.documentElement.getAttribute("lang") || "en";
      var status = form.querySelector(".form-status");
      var submitBtn = form.querySelector('button[type="submit"]');
      var fileInput = form.querySelector("#attachment");

      if (status) status.classList.remove("is-error");

      if (fileInput && fileInput.files && fileInput.files[0] && fileInput.files[0].size > MAX_FILE_SIZE) {
        e.preventDefault();
        if (status) {
          status.classList.add("is-error");
          status.textContent = translations[lang]["contact.form.error"];
        }
        return;
      }

      // No preventDefault — let the browser submit natively into the hidden iframe.
      justSubmitted = true;
      if (status) status.textContent = translations[lang]["contact.form.sending"];
      if (submitBtn) submitBtn.disabled = true;
    });

    if (frame) {
      frame.addEventListener("load", function () {
        if (!justSubmitted) return; // ignore the iframe's initial blank load on page load
        justSubmitted = false;
        var lang = document.documentElement.getAttribute("lang") || "en";
        var status = form.querySelector(".form-status");
        var submitBtn = form.querySelector('button[type="submit"]');
        if (status) status.textContent = translations[lang]["contact.form.success"];
        if (submitBtn) submitBtn.disabled = false;
        form.reset();
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(getLang());
    initLangToggle();
    initMobileNav();
    initActiveNav();
    initReel();
    initFadeIn();
    initServiceToggles();
    initContactForm();
  });
})();
