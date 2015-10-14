// Creates and returns a new dancer object that can step
var makeDancer = function(bottom, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');

  this.step = function() {
    setTimeout(this.step, timeBetweenSteps);
  };

  this.step();

  this.setPosition(bottom, left);

};

makeDancer.prototype.setPosition = function(bottom, left) {

  var styleSettings = {
    bottom: "" + bottom + "%",
    left: "" + left + "%"
  };

  this.$node.css(styleSettings);

};

makeDancer.prototype.lineUp = function(bottom, left) {
  this.setPosition(bottom, left);
};