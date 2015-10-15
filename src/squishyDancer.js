var makeSquishyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;

  this.step = function() {
    oldStep.call(this);
  }.bind(this);

  this.step();

  this.$node.addClass("tina");

};

makeSquishyDancer.prototype = Object.create(makeDancer.prototype);
makeSquishyDancer.prototype.constructor = makeSquishyDancer;