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
      Math.floor(Math.random() * 25),
      Math.floor(Math.random() * 100),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $(".lineupButton").on("click", function(event) {
    var bottom = 0;
    var left = 10;
    var length = window.dancers.length;
    for( var i = 0; i < Math.floor(length/2); i++){
      var dancer = dancers[i];
      dancer.lineUp(bottom, left);
      bottom += 5;
      left += 5;
    }

    // 9 elements [1,2,3,4,5,6,7,8,9]

    // left side i < length/2

    // right side

    left = 90;
    bottom = 0;

    for (var i = Math.floor(length/2); i < length; i++) {
      var dancer = dancers[i];
      dancer.lineUp(bottom, left);
      bottom += 5;
      left -= 5;
    }
  });

  $(document).on('mouseover','.dancer',function(){
    $(this).css({"border-color":"white"});
    $(this).on('mouseout', function() {
      $(this).css({"border-color":"red"});
    })
  });

});

