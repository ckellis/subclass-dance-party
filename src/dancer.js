// Creates and returns a new dancer object that can step
var makeDancer = function(bottom, left, timeBetweenSteps) {

  this.$node = $('<div class="dancer"></div>');

  this.step = function() {
    setTimeout(this.step, timeBetweenSteps);
  };

  this.step();

  this.setPosition(bottom, left);

  this.mirrored = false;

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

makeDancer.prototype.toggleMirror = function(){
  if(!this.mirrored){
    this.$node.css({"-moz-transform": "scaleX(-1)",
               "-o-transform": "scaleX(-1)",
               "-webkit-transform": "scaleX(-1)",
               "transform": "scaleX(-1)",
               "filter": "FlipH",
               "-ms-filter": "FlipH"});
    this.mirrored = true;
  } else {
    this.$node.css({"-moz-transform": "",
               "-o-transform": "",
               "-webkit-transform": "",
               "transform": "",
               "filter": "",
               "-ms-filter": ""});
    this.mirrored = false;
  }
};