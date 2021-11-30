













//these are my questions 1-4
$(".screen").hide();
$("#introstart").show();

$("#startBtn").click(function() {
  $("#introstart").hide();
  $("#firstque").show();
});

$("#firstque div").click(function() {
    $("#firstque").hide();
    $("#secondque").show();
  });

  $("#secondque div").click(function() {
    $("#secondque").hide();
    $("#thirdque").show();
  });

  $("#thirdque div").click(function() {
    $("#thirdque").hide();
    $("#fourthque").show();
  });
//this is my final 
  $("#fourthque div").click(function() {
    $("#fourthque").hide();
    $("#finalscreen").show();
  });