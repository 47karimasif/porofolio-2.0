// hamburger menu
const toggleCollapse = document.querySelector(".toggle-collapse span");
const navbar = document.querySelector(".navbar");

toggleCollapse.onclick = () => {
  navbar.classList.toggle("collapse");
};

// animation
AOS.init();

// Navbar smooth scroll
$(".navbar a, .scrollDown").click(function() {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top
    },
    700
  );
  return false;
});

// preloader
window.addEventListener("load", function() {
  var preloader = document.getElementById("loading");
  preloader.style.display = "none";
});

// for disabling right click
$(document).bind("contextmenu", function(e) {
  e.preventDefault();
});
$(document).keydown(function(e) {
  if (e.which === 123) {
    return false;
  }
});
