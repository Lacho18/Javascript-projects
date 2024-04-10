let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalIsRuning = false;
let StopWatchFunction;

let text = document.getElementById("Timer");
text.innerHTML = textCorect(hours) + ":" + textCorect(minutes) + ":" + textCorect(seconds);

let StopWatch = () => {
    if(!intervalIsRuning) {
        intervalIsRuning = true;
        StopWatchFunction = setInterval(() => {
            if(seconds < 60) {
                seconds++;
            }
            else {
                seconds = 0;
                minutes++;
                if(minutes > 59) {
                    minutes = 0;
                    hours++;
                }
                if(hours > 23) {
                    hours = 0;
                }
            }
            text.innerHTML = textCorect(hours) + ":" + textCorect(minutes) + ":" + textCorect(seconds);
        }, 1000);
    }
 };   

 function textCorect(value) {
    if(value < 10) {
        return "0" + value;
    }
    else {
        return value;
    }
 }

document.getElementById("Start").onclick = StopWatch;

document.getElementById("Stop").onclick = () => {
    if(intervalIsRuning){
        intervalIsRuning = false;
        clearInterval(StopWatchFunction);
    }
};

document.getElementById("Reset").onclick = () => {
    if(intervalIsRuning){
        intervalIsRuning = false;
        clearInterval(StopWatchFunction);
    }
    seconds = 0;
    minutes = 0;
    hours = 0;
    text.innerHTML = textCorect(hours) + ":" + textCorect(minutes) + ":" + textCorect(seconds);
};

