var main = document.querySelector("#main");
var timer = document.querySelector("#timer");//targets the timer id in html with dom manupulation
var time = 30;
var totalScore = 0;

//timer with 30 seconds
var timer = function() {
    
    var timeInterval = setInterval(() => {
        if (time > 1) {
            timer.textContent = time;
            time --;
            console.log(time);
        }else {
            timer.textContent = "";
            clearInterval(timeInterval);
            console.log("TIME IS UP!");
        }
    },1000);
    console.log("TIME STARTS NOW!")
}
// NOT DONE YET!!!!! NOT DONE YET!!!!!! WILL BE FOR END QUIZ SCORE/INPUT USER NAME ETC.
var highScore = function() {
    //container for highScore page after questions are answered
    var finalPageDiv = document.createElement("div");
    finalPageDiv.className = "final-page-div";
    main.appendChild(finalPageDiv);
    //
    var finalPageH1 = document.createElement("h1");
    finalPageH1.className = "all-done";
    finalPageDiv.appendChild(finalPageH1);

    var finalPageScore = document.createElement("p");
    finalPageScore.className = "final-score";
    finalPageScore.textContent =  "Your final score is", + score , 
    finalPageDiv.appendChild(finalPageScore);

}

//created function with variable name question 1
var question1 = function() {
    var question1Div = document.createElement("div");
    question1Div.className= "question-1-div";
    main.appendChild(question1Div);
    //question
    var question1 = document.createElement("h1");
    question1.className = "question";
    question1.textContent = "Commonly Used data types DO NOT include:";
    question1Div.appendChild(question1);

    //answers
    var answer1 = document.createElement("button");
    answer1.setAttribute("id", "wrong");
    answer1.className = "answer-1";
    answer1.textContent = "strings";
    question1Div.appendChild(answer1);
    answer1.addEventListener("click", event => {
        wrongAns();
    })

    var answer2 = document.createElement("button");
    answer2.setAttribute("id", "wrong");
    answer2.className = "answer-2";
    answer2.textContent = "booleans";
    question1Div.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrongAns();
    })

    var answer3 = document.createElement("button");
    answer3.setAttribute("id", "correct");
    answer3.className = "answer-3";
    answer3.textContent = "alerts";
    question1Div.appendChild(answer3);
    answer3.addEventListener("click", event => {
        question1Div.remove();
        question2();
        console.log("Correct!");
        score();
        console.log(totalScore);
        
    })

    var answer4 = document.createElement("button");
    answer4.setAttribute("id", "wrong");
    answer4.className = "answer-4";
    answer4.textContent = "numbers";
    question1Div.appendChild(answer4);
    answer4.addEventListener("click", event => {
        wrongAns();
    })


    var wrongAns = function() {
        time = time - 10;
        question1Div.remove();
        question2();
        console.log("Wrong answer!");
    }
}


//question 2
var question2 = function () {
    var question2Div = document.createElement("div");
    question2Div.className="question-2-div";
    main.appendChild(question2Div);
    //question
    var question2 = document.createElement("h1");
    question2.className = "question";
    question2.textContent = "Inside which HTML element do we put the JavaScript?";
    question2Div.appendChild(question2);

    //answers
    var answer1 = document.createElement("button");
    answer1.setAttribute("id", "wrong");
    answer1.className = "answer-1";
    answer1.textContent = "<js>";
    question2Div.appendChild(answer1);
    answer1.addEventListener("click", event => {
        wrongAns();
    })

    var answer2 = document.createElement("button");
    answer2.setAttribute("id", "wrong");
    answer2.className = "answer-2";
    answer2.textContent = "<javascript>";
    question2Div.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrongAns();
    })

    var answer3 = document.createElement("button");
    answer3.setAttribute("id", "correct");
    answer3.textContent = "<script>";
    question2Div.appendChild(answer3);
    answer3.addEventListener("click", event => {
        question2Div.remove();
        question3();
        console.log("Correct!");
        score();
        console.log(totalScore);
    })


    var answer4 = document.createElement("button");
    answer4.setAttribute("id", "wrong");
    answer4.className = "answer-4";
    answer4.textContent = "<scripting>";
    question2Div.appendChild(answer4);
    answer4.addEventListener("click", event => {
        wrongAns();
    })

    var wrongAns = function() {
        time = time - 10;
        question2Div.remove();
        question3();
        console.log("Wrong answer!");
    }

    
}



//question 3
var question3 = function () {
    var question3Div = document.createElement("div");
    question3Div.className="question-3-div";
    main.appendChild(question3Div);
    //question
    var question3 = document.createElement("h1");
    question3.textContent = "How do you call a function named 'myFunction' ";
    question3Div.appendChild(question3);

    //answers
    var answer1 = document.createElement("button");
    answer1.setAttribute("id", "correct");
    answer1.className = "answer-1";
    answer1.textContent = "myFunction()";
    question3Div.appendChild(answer1);
    answer1.addEventListener("click", event => {
        question3Div.remove();
        question4();
        console.log("Correct!");
        score();
        console.log(totalScore);
    })

    var answer2 = document.createElement("button");
    answer2.setAttribute("id", "wrong");
    answer2.className = "answer-2";
    answer2.textContent = "call function myFunction()";
    question3Div.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrongAns();
    })


    var answer3 = document.createElement("button");
    answer3.setAttribute("id", "wrong");
    answer3.className = "answer-3";
    answer3.textContent = "call myFunction()";
    question3Div.appendChild(answer3);
    answer3.addEventListener("click", event => {
        wrongAns();
    })

    var answer4 = document.createElement("button");
    answer4.setAttribute("id", "wrong");
    answer4.className = "answer-4";
    answer4.textContent = "MyFunction()";
    question3Div.appendChild(answer4);
    answer4.addEventListener("click", event => {
        wrongAns();
    })

    var wrongAns = function() {
        time = time - 10;
        question3Div.remove();
        question4();
        console.log("Wrong answer!");
    }
}


//question 4
var question4 = function () {
    var question4Div = document.createElement("div");
    question4Div.className= "question-4-div";
    main.appendChild(question4Div);
    //questions
    var question4 = document.createElement("h1");
    question4.textContent = "How do you round the number 7.25, to the nearest integer?";
    question4Div.appendChild(question4);

    //answer
    var answer1 = document.createElement("button");
    answer1.setAttribute("id", "wrong");
    answer1.className = "answer-1";
    answer1.textContent = "rnd(7.25)";
    question4Div.appendChild(answer1);
    answer1.addEventListener("click", event => {
        wrongAns();
    })

    var answer2 = document.createElement("button");
    answer2.setAttribute("id", "wrong");
    answer2.className = "answer-2";
    answer2.textContent = "Math.rnd(7.25)";
    question4Div.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrongAns();
    })

    var answer3 = document.createElement("button");
    answer3.setAttribute("id", "wrong");
    answer3.className = "answer-3";
    answer3.textContent = "round(7.25)";
    question4Div.appendChild(answer3);
    answer3.addEventListener("click", event => {
        wrongAns();
    })

    var answer4 = document.createElement("button");
    answer4.setAttribute("id", "correct");
    answer4.className = "answer-4";
    answer4.textContent = "Math.round(7.25)";
    question4Div.appendChild(answer4);
    answer4.addEventListener("click", event => {
        question4Div.remove();
        question5();
        console.log("Correct!");
        score();
        console.log(totalScore);
    })

    var wrongAns = function() {
        time = time - 10;
        question4Div.remove();
        question5();
        console.log("Wrong answer!");
    }
}


//question 5
var question5 = function () {
    var question5Div = document.createElement("div");
    question5Div.className = "question-5-div";
    main.appendChild(question5Div);
    
    //questions
    var question5 = document.createElement("h1");
    question5.textContent = "How do you find the number with the highest value of x and y?";
    question5Div.appendChild(question5);

    //answers
    var answer1 = document.createElement("button");
    answer1.setAttribute("id", "correct");
    answer1.className = "answer-1";
    answer1.textContent = "Math.max(x, y)";
    question5Div.appendChild(answer1);
    answer1.addEventListener("click", event => {
        question5Div.remove();
        console.log("Correct!");
        score();
        console.log(totalScore);
    })

    var answer2 = document.createElement("button");
    answer2.setAttribute("id", "wrong");
    answer2.className = "answer-2";
    answer2.textContent = "top(x,y)";
    question5Div.appendChild(answer2);
    answer2.addEventListener("click", event => {
        wrongAns();
    })

    var answer3 = document.createElement("button");
    answer3.setAttribute("id", "wrong");
    answer3.className = "answer-3";
    answer3.textContent = "Math.ceil(x,y)";
    question5Div.appendChild(answer3);
    answer3.addEventListener("click", event => {
        wrongAns();
    })

    var answer4 = document.createElement("button");
    answer4.setAttribute("id", "wrong");
    answer4.className = "answer-4";
    answer4.textContent = "ceil(x,y)";
    question5Div.appendChild(answer4);
    answer4.addEventListener("click", event => {
        wrongAns();
    })

    var wrongAns = function() {
        time = time - 10;
        question5Div.remove();
        console.log("Wrong answer!");
    }

}

//creating function to add score for correct answers
var score = function() {
    totalScore = totalScore + 10;
    console.log("You have " + totalScore + " score!");
}

//created function to contain main mage content
var start = function() { 
    var container = document.createElement("div");//making a div element
    container.className= "first-container"//naming the div first-container
    main.appendChild(container);//appending in div container


    //created h1 element 
    var firstHeader = document.createElement("h1");
    firstHeader.className = "first-title";
    firstHeader.textContent = "Coding Quiz Challenge";
    container.appendChild(firstHeader);

    //created p ele
    var firstParagraph = document.createElement("p");
    firstParagraph.className = "first-p";
    firstParagraph.textContent = "Try to answer the following questions within the time limit" + "Keep in mind that answering wrong will take 10 seconds away from timer!"
    container.appendChild(firstParagraph);

    //created a button
    var startBtn= document.createElement("button");
    startBtn.className = "home-btn";
    startBtn.textContent = "Start Quiz";
    container.appendChild(startBtn);

    //created event lister for start quiz button and removes the previos manipulations from page
    startBtn.addEventListener("click", event => {
        timer();//calls timer function and starts it
        startBtn.remove();//removes from home page on click
        firstHeader.remove();//removes from home page on click
        firstParagraph.remove();//removes from home page on click
        question1();//runs the first question
    });
}
//calling the start function
start();

