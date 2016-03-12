var print = function(whatPrint) {
  var resultUl = document.getElementById("result");
  resultUl.innerHTML = whatPrint;
}

var pingPong = function(userEntry) {
  var result = "";
  if (userEntry <= 0) {
    result += "<li> Whoops- enter a number greater than zero. </li>";
    print(result);
  } else {
    for (i = 1; i <= userEntry; i ++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result += "<li> <strong>pingpong!</strong> </li>";
      } else if (i % 3 === 0) {
        result += "<li> <strong>ping!</strong> </li>";
      } else if (i % 5 === 0) {
        result += "<li> <strong>pong!</strong> </li>";
      } else {
        result += "<li>" + i + "</li>";
      }
    print(result);
    }  
  }
}

$(document).ready(function() {
  $("#game").submit(function(event) {
    event.preventDefault();
    var $entry = parseInt($( "input" ).val());
    pingPong($entry);
    $("#result").show();
  });
});
