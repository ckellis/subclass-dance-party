var makeSquishyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  var oldStep = this.step;

  this.step = function() {
    oldStep.call(this);
    this.$node.slideToggle("slow", function() {
      //add animation
    });
  }.bind(this);

  this.step();

};

makeSquishyDancer.prototype = Object.create(makeDancer.prototype);
makeSquishyDancer.prototype.constructor = makeSquishyDancer;