//countDwn
window.onload = function() {
    
}




//Trivia Game Start
function checkFinRes() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

        if (question1 == "1943") {
            correct++;
        }
        if (question2 == "Bill Gates") {
            correct++;
        }
        if (question3 == "Albany") {
            correct++;
        }

        document.getElementById("afterSub").style.visibility = "visible";
        
        
        document.getElementById("amtCorrect").innerHTML = "You got " + correct + " correct!";
        console.log(correct);
};