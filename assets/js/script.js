$(document).ready(function () {
  // owl-carousel
  $("#owl-slider-one").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 10000,
    slideTransition: "linear",
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      991: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  });

  // Header Active
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll > 80) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  // Mobile menu icon state toggle
  const menuButton = document.querySelector(".menu-btn");
  const mobileOffcanvas = document.getElementById("mobileOffcanvas");

  if (menuButton && mobileOffcanvas) {
    mobileOffcanvas.addEventListener("show.bs.offcanvas", function () {
      menuButton.classList.add("is-open");
      document.documentElement.classList.add("offcanvas-no-scroll");
    });

    mobileOffcanvas.addEventListener("hide.bs.offcanvas", function () {
      menuButton.classList.remove("is-open");
      document.documentElement.classList.remove("offcanvas-no-scroll");
    });

    mobileOffcanvas.addEventListener("hidden.bs.offcanvas", function () {
      document.documentElement.classList.remove("offcanvas-no-scroll");
    });
  }
});

// Side Nav
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// AOS
AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  offset: 80,
  delay: 100,
});
