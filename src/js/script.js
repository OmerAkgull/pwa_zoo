
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

function toggleMenu() {
  let links = document.querySelector("#navLinks");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

let icon = document.querySelector(".icon");
icon.addEventListener("click", toggleMenu);

const topButton = document.querySelector("#backToTopButton");
function backToTop() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

topButton.addEventListener("click", backToTop);