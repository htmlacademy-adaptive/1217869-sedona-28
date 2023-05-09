window.onload = function () {
  let menu = document.getElementsByClassName("main-nav__wrapper")[0];
  if (window.screen.width < 768) {
    menu.style.display = "none";
  }
  else {
    menu.style.display = "flex";
  }
}

window.onresize = function () {
  let menu = document.getElementsByClassName("main-nav__wrapper")[0];
  if (window.screen.width >= 768) {
    menu.style.display = "flex";
  }
  else {
    menu.style.display = "none";
  }
}

function openmenu() {
  let menu = document.getElementsByClassName("main-nav__wrapper")[0];
  menu.style.display = "flex";
}

function closemenu() {
  let menu = document.getElementsByClassName("main-nav__wrapper")[0];
  menu.style.display = "none";
}
