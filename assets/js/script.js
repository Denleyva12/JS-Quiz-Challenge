

let answerA = document.querySelector("#answerA");
let answerB = document.querySelector("#answerB");
let answerC = document.querySelector("#answerC");

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

  $("#fourthque div").click(function() {
    $("#fourthque").hide();
    $("#finalscreen").show();
  });