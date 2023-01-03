header = document.querySelector("#main-header");
homeButton = document.getElementById("home-button");
aboutButton = document.getElementById("author-button");
buyButton = document.getElementById("buy-button");
navbar = document.getElementById("navbar");
photo = document.getElementById("test");
pHeaders = document.querySelectorAll(".headers");
paragraphs = document.querySelectorAll(".paragraphs");
body = document.querySelector("body");

function jumpscare() {
  //Initial text change for main header
  header.textContent = "run.";

  //Text Changes for anchor elements
  setInterval(() => {
    homeButton.textContent = "hide.";
  }, 1000);
  setInterval(() => {
    aboutButton.textContent = "scream.";
  }, 2000);
  setInterval(() => {
    buyButton.textContent = "die.";
  }, 3000);

  //Changes color for items to make them "disappear"
  setInterval(() => {
    header.style.color = "black";
  }, 4000);
  setInterval(() => {
    navbar.style.background = "black";
  }, 5000);
  setInterval(() => {
    homeButton.style.color = "black";
  }, 6000);
  setInterval(() => {
    aboutButton.style.color = "black";
  }, 7000);
  setInterval(() => {
    buyButton.style.color = "black";
  }, 8000);
  setInterval(() => {
    for (var i = 0; i < pHeaders.length; i++) {
      pHeaders[i].style.color = "black";
    }
  }, 9000);
  setInterval(() => {
    for (var i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.color = "black";
    }
  }, 10000);

  //Shows image
  setInterval(() => {
    photo.style.display = "block";
    body.style.overflow = "hidden";
  }, 11000);
  setInterval(() => {
    location.reload();
  }, 20000);

  console.log("What does 'die' mean?");
}

setInterval(jumpscare, 10000);
