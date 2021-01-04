function generateBodyHeight() {
  const clientHeight = document.documentElement.clientHeight;
  document.body.style.height = clientHeight + "px";
}

window.addEventListener("load", generateBodyHeight);
window.addEventListener("resize", generateBodyHeight);
