$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor(Math.random() * 18),
      Math.floor(Math.random() * 100),
      20
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineupButton").on("click", function(event) {
    var bottom = 0;
    var left = 10;

    for( var i = 0; i < 5; i++){
      var dancer = dancers[i];
      dancer.lineUp(bottom, left);
      bottom += 5;
      left += 5;
      if(dancer.mirrored){
        dancer.toggleMirror();
      }
    }

    // 9 elements [1,2,3,4,5,6,7,8,9]

    // left side i < length/2

    // right side

    left = 90;
    bottom = 0;

    for (var i = 5; i < 10; i++) {
      var dancer = dancers[i];
      dancer.lineUp(bottom, left);
      bottom += 5;
      left -= 5;
      if(!dancer.mirrored){
        dancer.toggleMirror();
      }
    }

    if (window.dancers.length > 10) {
      for (var i = 10; i < window.dancers.length; i++) {
        var dancer = dancers[i];

        var bottom = Math.floor(Math.random() * 18);
        var left = Math.random() * (55 - 35) + 35;

        dancer.setPosition(bottom, left);

        if (!dancer.mirrored) {
          dancer.toggleMirror();
        }
      }
    }
  });

  $(document).on('mouseover','.dancer',function(){
    $(this).css({"border-color":"white"});
    $(this).on('mouseout', function() {
      $(this).css({"border-color":"red"});
    })
  });

  $(".nearestBuddy").on("click", function(){
    var newArray = window.dancers.slice();
    
    var findNearest = function(current) {

      if (newArray.length === 0) {
        return;
      }

      // COMPARE(current, newArray);
      newArray = compare(current, newArray);

      findNearest(newArray.shift());

    }

    findNearest(newArray.shift());

  });

});

window.compare = function(current, array) {

  var nearestDancer = 0;
  var lowestDist = distance(current, array[nearestDancer]);

  for (var i = 1; i < array.length; i++) {
    if (lowestDist > distance(current, array[i])) {
      lowestDist = distance(current, array[i]);
      nearestDancer = i;
    }
  }

  // assign them same randomly picked location
  placePartners(current, array[nearestDancer])

  array.splice(nearestDancer, 1);

  return array;

};

window.placePartners = function(current, partner) {

  var randomBottom = Math.random()*18;
  var randomLeft = Math.random()*100;
  partner.setPosition(randomBottom, randomLeft);
  current.setPosition(randomBottom, randomLeft + 1.5);
  current.toggleMirror();
};

window.distance = function(current, nearest) { 
  return (Math.sqrt(Math.pow((current.$node.position().top - nearest.$node.position().top), 2) + Math.pow((current.$node.position().left - nearest.$node.position().left), 2)));
};