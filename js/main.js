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
    document.querySelectorAll(".reel").forEach(function (reel) {
      var track = reel.querySelector(".reel-track");
      var prev = reel.querySelector(".reel-prev");
      var next = reel.querySelector(".reel-next");
      if (!track) return;
      var scrollAmount = function () {
        var img = track.querySelector("img");
        return img ? img.getBoundingClientRect().width + 16 : 300;
      };
      if (prev) prev.addEventListener("click", function () {
        track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
      });
      if (next) next.addEventListener("click", function () {
        track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
      });
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
    var endpoint = "https://formsubmit.co/ajax/info@snape-conservation.com";

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var lang = document.documentElement.getAttribute("lang") || "en";
      var status = form.querySelector(".form-status");
      var submitBtn = form.querySelector('button[type="submit"]');
      var name = form.querySelector("#name").value.trim();
      var email = form.querySelector("#email").value.trim();
      var message = form.querySelector("#message").value.trim();

      if (status) {
        status.classList.remove("is-error");
        status.textContent = translations[lang]["contact.form.sending"];
      }
      if (submitBtn) submitBtn.disabled = true;

      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: "New website enquiry — Snape Art Conservation"
        })
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Request failed");
          return res.json();
        })
        .then(function () {
          if (status) status.textContent = translations[lang]["contact.form.success"];
          form.reset();
        })
        .catch(function () {
          if (status) {
            status.classList.add("is-error");
            status.textContent = translations[lang]["contact.form.error"];
          }
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
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
