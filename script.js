const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
  console.log("clicked");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
