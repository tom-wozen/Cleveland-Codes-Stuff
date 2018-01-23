"use strict"

$(document).ready(function(){

  // beginning of comment application code
var i = 1;
  // beginning of comment application code
  $.fn.multiline = function(text){  // this method is used to add a break element where the \n for new line is desired for .text methods.
   this.text(text);
    this.html(this.html().replace(/\n/g,'<br/>'));
    return this;
  }



  $("#button").on("click",function(){

    var name = $("#name").val();
    var comment = $("#content").val();
    $("#commentSection").prepend("<p id='comment"+ i +"' style='color: rgba(255,20,255,1); font-size:100%; '></p>");
                         //should probably be .prepend
    $("#comment"+i).multiline("Name: " + name + "\n \n" + "Comment: " + comment);
    i++;
    $("#content").val("");

  });

});
