document.addEventListener("DOMContentLoaded", function () {
  fetch("includes/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      const burger = document.getElementById("burger");
      const sideMenu = document.getElementById("sideMenu");
      const overlay = document.getElementById("overlay");

      if (!burger || !sideMenu || !overlay) {
        console.error("לא נמצאו אחד מהאלמנטים:", {burger, sideMenu, overlay});
        return;
      }

      burger.addEventListener("click", function(e) {
        e.preventDefault();
        burger.classList.toggle("active");
        sideMenu.classList.toggle("active");
        overlay.classList.toggle("active");
      });

      overlay.addEventListener("click", function() {
        burger.classList.remove("active");
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
      });

      const menuLinks = sideMenu.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          burger.classList.remove("active");
          sideMenu.classList.remove("active");
          overlay.classList.remove("active");
        });
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          burger.classList.remove("active");
          sideMenu.classList.remove("active");
          overlay.classList.remove("active");
        }
      });

      const currentPage = window.location.pathname.split("/").pop(); 

      document.querySelectorAll('.nav-menu a, .side-menu a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (href === "index.html" && currentPage === "")) {
          link.classList.add("active");
        }
      });
    });

  fetch("includes/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});
