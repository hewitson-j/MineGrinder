header = document.querySelector("#main-header");
homeButton = document.getElementById("home-button");
aboutButton = document.getElementById("author-button");
buyButton = document.getElementById("buy-button");
navbar = document.getElementById("navbar");

function jumpscare() {
  header.textContent = "run.";
  setInterval(() => {
    homeButton.textContent = "hide.";
  }, 1000);
  setInterval(() => {
    aboutButton.textContent = "scream.";
  }, 2000);
  setInterval(() => {
    buyButton.textContent = "die.";
  }, 3000);

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
    buyButton.style.color = "black";
    aboutButton.textContent = "die.";
  }, 7000);
  setInterval(() => {
    aboutButton.style.color = "black";
  }, 8000);
  setInterval(() => {
    location.reload();
  }, 10000);

  console.log("What does 'die' mean?");
}

setInterval(jumpscare, 10000);
