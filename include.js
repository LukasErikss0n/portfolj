document.addEventListener("DOMContentLoaded", function() {
  fetch("header.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("header").innerHTML = data;

          highlightActiveLink();
      });

  function highlightActiveLink() {
      let currentLocation = window.location.pathname.split("/").pop();

      let navLinks = document.querySelectorAll("nav ul li a");

      navLinks.forEach(link => {
          if (link.getAttribute("href") === currentLocation || (currentLocation === "" && link.getAttribute("href") === "index.html")) {
              link.classList.add("active");
          }
      });
  }
});
