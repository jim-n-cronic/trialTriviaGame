//Timer INSERT HERE
$(document).ready(function(){

    var count=30;
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
        count=count-1;
        if (count <= 0)
        {
            clearInterval(counter);
            return;
        }
        
        $("#seconds").html(count + " seconds left!");
    }
    
    //Trivia Game -- Final submitBtn
    function checkFinRes() {
        
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var correct = 0;
        
        if (question1 == "1943") {
            question1 = true;
            correct++;
        } else {
            question1 = false;
        }
        
        if (question2 == "Bill Gates") {
            question2 = true;
            correct++;  
        } else {
            question2 = false;
        }
        
        if (question3 == "All of the above!") {
            question3 = true;
            correct++;
        } else {
            question3 = false;
        }
        

        document.getElementById("afterSub").style.visibility = "visible";
        
        
        $("#amtCorrect").html("You got " + correct + " correct!");
        
    };
});
    