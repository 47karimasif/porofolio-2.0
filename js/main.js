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

// $(document).bind("contextmenu", function(e) {
//   e.preventDefault();
// });
// $(document).keydown(function(e) {
//   if (e.which === 123) {
//     return false;
//   }
// });
