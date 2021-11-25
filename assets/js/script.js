

//this is my timer to start the quiz it doesnt work
function startTimer(){
var counter = 5;
setInterval(function() {
    counter--;
    if (counter >= 0) {
        span = document.getElementById("count");
        span.innerHTML = "counter";
    }
    if (counter === 0) {
        alert('sorry, out of time');
        clearInterval(counter);
    }
}, 1000);
}
function start(){
    document.getElementById("count").style="color:green;";
    startTimer();
};