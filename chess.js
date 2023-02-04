'usestrict'
// Required Features:
// - The user clicks on the 'start' button, after that, a timer of 30 seconds starts.
// - During these 30 seconds, the game asks the user to click on a random square by telling
// the coordinates of this square as domenstrated in the link.
// - The user should click on the correct square.
// - If the clicked square matches the wanted square, it's considered a correct answer, and
// a green check mark is written next to it the the results section.
// - If it's wrong, a red cross mark is written next to it.
// - The score is always displayed and gets updated after every answer.
// - After the 30 seconds elapse, the board should not accept any clicks. and the final score
// is displayed.
// - The style of the page can be different from that in the link.

var goToPlay = document.getElementById("start");
var timer = document.getElementById("time");
var doAction = document.getElementById("action2");
var chessboard = document.getElementById("chessboard");
var score = document.getElementById("score");

let char = ["A", "B", "C", "D", "E", "F", "G", "H"];
let num = [1, 2, 3, 4, 5, 6, 7, 8];
let points = 0;
function getRandomInt(inta) {
    return Math.floor(Math.random() * inta);
}
var getRandomValue = () => `${char[getRandomInt(7)]}${num[getRandomInt(7)]}`;
let action = getRandomValue();

// arraow function have a problem when engine see different function (follow this link: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#matching_event_listeners_for_removal)  
function startGame(){
    let counter = 1;
    doAction.innerHTML = action;
    chessboard.addEventListener("click", handlerWrapper);
    let timerCount = setInterval(() => {
    timer.innerHTML = `Time: ${counter} Second`;
    counter++;
    if (counter > 30) {
        // debugger;
        clearInterval(timerCount);
        chessboard.removeEventListener("click", handlerWrapper);
        }
    }, 1000);
}

function handlerWrapper(event){
    return handler(event, action);
}

function handler(event, currentAction) {
        // debugger
        if (event.target.id === currentAction) {
            points++;
            score.innerHTML = `Score: ${points}`;
            doAction.style.color = "green";
            doAction.style.border = "3px solid green";
            action = getRandomValue();
            doAction.innerHTML = action;
        } else {
            doAction.style.color = "red";
            doAction.style.border = "3px solid red";
        }
}

    // var remainingTime = 30;
    // var isStopped = true;    
    //     function startTimer() {
    //         if (isStopped) {
    //             isStopped = false;
    //             timer.innerHTML = `${remainingTime} second`;
    //             timeOut = setInterval(renderTime, 1000);
    //         }
    //     }
    //     function renderTime() {
    //         remainingTime -= 1;
    //         timer.innerHTML = `${remainingTime} second`;
    //         if (remainingTime === 0) {
    //             isStopped = true;
    //             clearInterval(timeOut);
    //             remainingTime = 30;
    //         }
    //     }