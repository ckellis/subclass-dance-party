var makeFatDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;

  this.step = function() {
    oldStep.call(this);
    this.$node.animate({"width": "-=100px"},'slow').delay(timeBetweenSteps)
           .animate({"width": "+=100px"},'slow');
  }.bind(this);

  this.step();

};

makeFatDancer.prototype = Object.create(makeDancer.prototype);
makeFatDancer.prototype.constructor = makeFatDancer;