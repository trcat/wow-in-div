class WOW {
  constructor(option) {
    this.el = option.el ? document.querySelector(option.el) : null;
    this.elHeight = null;
    this.animateDuration = "1s";
    this.boxes = null;
    this.animationNameCache = new WeakMap();
  }
  init() {
    if (this.el) {
      const position = this.getComputedStyle(this.el, "position");
      if (position === "static") {
        this.el.style.position = "relative";
      }
      this.elHeight = this.getComputedStyle(this.el, 'height');
      window.addEventListener("load", () => this.start());
    }
  }
  start() {
    this.boxes = document.querySelectorAll(".wow");
    if (this.boxes.length > 0) {
      this.boxes.forEach((box) => {
        this.applyStyle(box);
      });
    }
    this.el.addEventListener('scroll', () => {

    })
  }
  applyStyle(box) {
    const animateName = this.getComputedStyle(box, "animateName");
    this.animationNameCache.set(box, animateName);
    box.style.animationName = 'none'
    box.style.animationDuration = this.animateDuration;
    box.style.visibility = "hidden";
  }
  getComputedStyle(element, prop) {
    return window.getComputedStyle(element)[prop];
  }
}
