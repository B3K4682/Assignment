// Turn off preloader
$(window).on("load", () => {
  $("#preloader").fadeOut("slow", function () {
    $(this).remove();
  });
  $(".header-area").css("display", "block");
});

// Header onscroll
let prevScrollpos = window.pageYOffset;
$(window).on("scroll", () => {
  let sticky = document.getElementById("sticky")
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    sticky.style.top = "0";
  } else {
    sticky.style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
});

// Scroll to top
$(window).on("scroll", () => {
  if ($(this).scrollTop() > 100) {
    $(".scrollToTop").fadeIn();
  } else {
    $(".scrollToTop").fadeOut();
  }
});
$(".scrollToTop").on("click", () => {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

// Open navbar
$(".navbar-toggler").on("click", () => {
  $(".mobile-nav-overlay").toggleClass("active");
});
// Close navbar
$(document).on("click", function (e) {
  if (!$(e.target).closest(".mobile-nav-inner, .navbar-toggler").length) {
    $(".mobile-nav-overlay").removeClass("active");
  }
});

// Close navbar on mobile-menu-close-trigger click
$("#mobile-menu-close-trigger").on("click", () => {
  $(".mobile-nav-overlay").removeClass("active");
});

// Search modal open/close
$(function () {
  $(".search-toggle").on("click", function (event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });
  $("#search, #search button.close").on("click keyup", function (event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });
  $("form").submit(function (event) {
    event.preventDefault();
    return false;
  });
});
