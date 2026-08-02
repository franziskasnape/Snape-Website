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

  function initContactForm() {
    var form = document.querySelector("#contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var email = form.querySelector("#email").value.trim();
      var message = form.querySelector("#message").value.trim();
      var lang = document.documentElement.getAttribute("lang") || "en";
      var subject = encodeURIComponent("Website enquiry — " + name);
      var body = encodeURIComponent(
        (lang === "de" ? "Name: " : "Name: ") + name +
        "\n" + (lang === "de" ? "E-Mail: " : "Email: ") + email +
        "\n\n" + message
      );
      window.location.href = "mailto:info@snapeartconservation.com?subject=" + subject + "&body=" + body;
      var status = form.querySelector(".form-status");
      if (status) {
        status.textContent = translations[lang]["contact.form.note"];
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(getLang());
    initLangToggle();
    initMobileNav();
    initActiveNav();
    initReel();
    initFadeIn();
    initContactForm();
  });
})();
