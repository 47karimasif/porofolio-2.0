// preloader;
window.addEventListener("load", function() {
  setTimeout(() => {
    var preloader = document.getElementById("loading");
    preloader.style.display = "none";
  }, 3000);
});
