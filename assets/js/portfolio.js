// Isotope
$(document).ready(function () {
  $(".portfolio").isotope({
    itemSelector: ".col-md-4",
  });

  // filter items on button click
  $(".filter-button-group").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $(".portfolio").isotope({ filter: filterValue });
    $(".filter-button-group li").removeClass("active");
    $(this).addClass("active");
  });
});
$(".portfolio").isotope({ filter: "*" });
