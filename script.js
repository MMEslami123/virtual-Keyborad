const button = document.querySelectorAll("input");
document.body.addEventListener("keydown", function (event) {
  for (let i = 0; i < button.length; i++) {
    if (event.key == button[i].value.toLowerCase()) {
      button[i].classList.add("active");
    }
  }
});
document.body.addEventListener("keyup", function (event) {
  for (let i = 0; i < button.length; i++) {
    if (event.key == button[i].value.toLowerCase()) {
      button[i].classList.remove("active");
    }
  }
});