//side effect- one sec behind, ebcause animation is moving from start unit to end unit (end unit is always hte current time)

// Class to track state and animate the hands
// - element : dom hand
// - endUnit : current unit the hand points to, int
// - totalUnits : total number of units on face, int
// - framesPerSec : frames per second to animate at
class AnimateHand {
  constructor(element, endUnit, totalUnits, framesPerSec) {
    this.element = element;
    this.totalUnits = Math.floor(totalUnits);
    this.startUnit = Math.floor(endUnit);
    this.endUnit = Math.floor(endUnit);
    this.animateUnit = endUnit;
    this.animationTimer = null;
    this.framesPerSec = framesPerSec;

    this.draw();//
  }

  animate(endUnit) {
    var self = this;

    this.startUnit = this.endUnit;
    this.animateUnit = this.startUnit;
    this.endUnit = endUnit;

    if (this.animationTimer === null) {
      this.animationTimer = setInterval(() => {
        self.animationLoop();
      }, 1000 / this.framesPerSec);
      self.animationLoop();
    }
  }


  animationLoop() {
    // increment animateUnit by a fraction each loop
    let delta = this.endUnit - this.startUnit;
    if (delta < 0) {
      delta = this.totalUnits + delta;
    }

    this.animateUnit += delta / this.framesPerSec;

    if (this.animateUnit >= this.totalUnits) {
      this.animateUnit = 0;
    }

    if (Math.floor(this.animateUnit) === this.endUnit) {
      // target reached, disable timer
      clearInterval(this.animationTimer);
      this.animationTimer = null;
      this.animateUnit = this.endUnit;
      this.startUnit = this.endUnit;
    }

    // redraw on each animation loop
    this.draw();
  }

  // updates the hand on screen
  draw() {
    let ratio = this.animateUnit / this.totalUnits;
    this.element.style.transform = `rotate(${ratio * 360}deg)`;
  }
}
