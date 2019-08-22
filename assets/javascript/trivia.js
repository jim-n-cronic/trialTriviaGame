$(document).ready(function() {

const trivia = [
    {
        question: "What's my full name?",
        choices: ["jamesAppello", "jamesPatrickAppello", "jamesAnthonyPaulAppello", "jamesAnthonyAppello"],
        correctAns: "jamesAnthonyPaulAppello"
    },
    {
        question: "What caused me to not be able to figure this out when this was originally due?",
        choices: ["lack of patience", "not as much knowledge as I have about this NOW!","idk I just cried", "A && B"],
        correctAns: "A && B"
    },
    {
        question: "What's next in the sequence:: 1,1,3,5,8,13,21,34,55,89,...?n?...",
        choices: ["126", "157", "144", "WHAT?!"],
        correctAns: "144"
    }
];
const correctImages = [
    '../assets/images/correct.gif',
    '../assets/images/dave.gif',
    '../assets/images/fatCorrect.gif'
];

const wrongImages = [
    '../assets/images/200w.gif',
    '../assets/images/levine.gif',
    '../assets/images/trump.gif'
];

// def variables
let counter = 30;
let currentQues = 0;
let score = 0;
let lost = 0;
let timer;

console.log(trivia);
console.log(trivia[currentQues].question);

//next question function
function nextQuestion() {
    const quesOver = (trivia.length - 1) === currentQues;
    if (quesOver) {
        //TODO
        console.log("haha suckaaaaaa!");
        alert("GAME OVER!!!!!");
        displayResults();
    } else {
        currentQues++;
        renderQuestions();

    }
}

// def funstion for 30 second timer
//2 functions timesUp && countDown
function timesUp() {
    clearInterval(timer);
    lost++;
    nextQuestion();
}

function countDown() {
    counter--;

    $("#time").html("Timer: " + counter);
    if (counter === 0) {
        timesUp();
    }
}

// display questions and options
function renderQuestions() {
    counter = 30;
    timer = setInterval(countDown, 1000);

    const quesNow = trivia[currentQues].question;
    const chNow = trivia[currentQues].choices;
    
    $("#time").html("Time left: " + counter);
    $("#game").html(`
        <h4>${quesNow}</h4>
        ${renderChoices(chNow)}
        ${loadRemainingQuestions()}
    `);
}

function renderChoices(choices) {
    let result = '';

    for (let i = 0; i < choices.length; i++) {
        // later we will be able to click and get attr w/ this--\here/
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`
    }
    return result;
}
$(document).on('click', ".choice", function() {
    clearInterval(timer);
    const selectedAnswer = $(this).attr("data-answer");
    const correctAnser = trivia[currentQues].correctAns;
    console.log(selectedAnswer);
    if (correctAnser === selectedAnswer) {
        //TODO
        // user WIN
        score++;
        console.log("wins!");
        nextQuestion();
    } else {
        //loss
        lost++;
        console.log("loses!");
        nextQuestion();
    }

})

// display end results
function displayResults() {
    const result = `
        <p>You got ${score} question(s) correct!</p>
        <p>You missed ${lost} question(s)!</p>
        <p>Total questions: ${trivia.length} </p>
        <button class="resetBtn">RESET GAME</button>
    `;
    $("#game").html(result);
}

$(document).on('click', ".resetBtn", function() {
    //console.log("test RESET button!!");
    counter = 30;
    currentQues = 0;
    score = 0;
    lost = 0;
    timer = null;

    renderQuestions();
})

function loadRemainingQuestions() {
    const remainingQuestions = trivia.length - (currentQues + 1);
    const totalQuestions = trivia.length;

    return `Remaining Questions: ${remainingQuestions}/${totalQuestions}`;

}
function preloadImage(status) {
    const correctAnswer = trivia[currentQues].correctAns;

    if (status === "win") {
        // TODO
        $("#game").html(`
            <p class="preload-images">Congrats! You selected the correct answer!</p>
            <p class="preload-images">The correct answer is ${correctAnswer} </p>
        `);
    } else {
        $("#game").html(`

            <p class="preload-images">The correct answer was ${correctAnswer} !!! </p>
        `);
    }
}

renderQuestions();



})

    
    