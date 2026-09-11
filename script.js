document.addEventListener("DOMContentLoaded", function () {

  // Mobile menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // Login form
  const loginForm = document.querySelector("#loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.querySelector("#email").value.trim();
      const password = document.querySelector("#password").value.trim();

      if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
      }

      window.location.href = "dashboard.html";
    });
  }

  // Close mobile menu after clicking a link
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (navLinks) {
        navLinks.classList.remove("show");
      }
    });
  });

});