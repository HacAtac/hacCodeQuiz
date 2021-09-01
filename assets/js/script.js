var main = document.querySelector("#main");
var timer = document.querySelector("#timer");//targets the timer id in html with dom manupulation


//created function with variable name question 1
var question1 = function() {
    var question1Div = document.createElement("div");
    question1Div.className= "question-1-div";
    main.appendChild(question1Div);
    //question
    var question1 = document.createElement("h1");
    question1.textContent = "Commonly Used data types DO NOT include:";
    question1Div.appendChild(question1);

    //answers
    var answer1 = document.createElement("button");
    answer1.textContent = "strings";
    question1Div.appendChild(answer1);

    var answer2 = document.createElement("button");
    answer2.textContent = "booleans";
    question1Div.appendChild(answer2);

    var answer3 = document.createElement("button");
    answer3.textContent = "alerts";
    question1Div.appendChild(answer3);

    var answer4 = document.createElement("button");
    answer4.textContent = "numbers";
    question1Div.appendChild(answer4);
}

//question 2
var question2 = function () {
    var question2Div = document.createElement("div");
    question2Div.className="question-2-div";
    main.appendChild(question2Div);
    //question
    var question2 = document.createElement("h1");
    question2.textContent = "Placeholder till i figure out questions";
    question2Div.appendChild(question2);

    //answers
    var answer1 = document.createElement("button");
    answer1.textContent = "placehold";
    question2Div.appendChild(answer1);

    var answer2 = document.createElement("button");
    answer2.textContent = "placehold";
    question2Div.appendChild(answer2);

    var answer3 = document.createElement("button");
    answer3.textContent = "placehold";
    question2Div.appendChild(answer3);

    var answer4 = document.createElement("button");
    answer4.textContent = "placehold";
    question2Div.appendChild(answer4);
}

//question 3
var question3 = function () {
    var question3Div = document.createElement("div");
    question3Div.className="question-3-div";
    main.appendChild(question3Div);
    //question
    var question3 = document.createElement("h1");
    question3.textContent = "Placeholder till i figure out questions";
    question3Div.appendChild(question3);

    //answers
    var answer1 = document.createElement("button");
    answer1.textContent = "placehold";
    question3Div.appendChild(answer1);

    var answer2 = document.createElement("button");
    answer2.textContent = "placehold";
    question3Div.appendChild(answer2);

    var answer3 = document.createElement("button");
    answer3.textContent = "placehold";
    question3Div.appendChild(answer3);

    var answer4 = document.createElement("button");
    answer4.textContent = "placehold";
    question3Div.appendChild(answer4);
}
//question 4
var question4 = function () {
    var question4Div = document.createElement("div");
    question4Div.className= "question-4-div";
    main.appendChild(question4Div);
    //questions
    var question4 = document.createElement("h1");
    question4.textContent = "placehodler till i figure out questions";
    question4Div.appendChild(question4);

    //answer
    var answer1 = document.createElement("button");
    answer1.textContent = "placehold";
    question4Div.appendChild(answer1);

    var answer2 = document.createElement("button");
    answer2.textContent = "placehold";
    question4Div.appendChild(answer2);

    var answer3 = document.createElement("button");
    answer3.textContent = "placehold";
    question4Div.appendChild(answer3);

    var answer4 = document.createElement("h1");
    answer4.textContent = "placehold";
    question4Div.appendChild(answer4);
}
//question 5
var question5 = function () {
    var question5Div = document.createElement("div");
    question5Div.className = "question-5-div";
    main.appendChild(question5Div);
    
    //questions
    var question5 = document.createElement("h1");
    question5.textContent = "placeholder till i get questions";
    question5Div.appendChild(question5);

    //answers
    var answer1 = document.createElement("button");
    answer1.textContent = "placehold";
    question5Div.appendChild(answer1);

    var answer2 = document.createElement("button");
    answer2.textContent = "placehold";
    question5Div.appendChild(answer2);

    var answer3 = document.createElement("button");
    answer3.textContent = "placehold";
    question5Div.appendChild(answer3);

    var answer4 = document.createElement("button");
    answer4.textContent = "placehold";
    question5Div.appendChild(answer4);

}

//created function to contain main mage content
var start = function() { 
    var container = document.createElement("div");//making a div element
    container.className= "first-container"//naming the div first-container
    main.appendChild(container);//appending in the main section

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
        startBtn.remove();//removes from home page on click
        firstHeader.remove();//removes from home page on click
        firstParagraph.remove();//removes from home page on click
        question1();//runs the first question
    });
}
//calling the start function
start();

