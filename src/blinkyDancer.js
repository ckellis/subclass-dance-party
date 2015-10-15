var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;
  this.t = 0;

  this.step = function() {
    oldStep.call(this);
    // lissajous curve
    this.trackLissajous();
  }.bind(this);

  this.step();

  this.$node.addClass("louise");

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.trackLissajous = function() {

  this.t += 0.01;
  var newX = ((Math.sin(7 * Math.PI * this.t)/4) + 0.5) * 100;
  var newY = ((Math.cos(5 * Math.PI * this.t)/6) + 0.166) * 100;

  this.setPosition(newY, newX);
}