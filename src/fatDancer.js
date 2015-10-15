var makeFatDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;

  this.t = 0;

  this.step = function() {
    oldStep.call(this);

  }.bind(this);

  this.step();

  this.$node.addClass("gene");

};

makeFatDancer.prototype = Object.create(makeDancer.prototype);
makeFatDancer.prototype.constructor = makeFatDancer;
