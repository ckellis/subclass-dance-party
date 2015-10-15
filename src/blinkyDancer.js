var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;

  this.step = function() {
    oldStep.call(this);
  }.bind(this);

  this.step();

  this.$node.addClass("louise");

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;