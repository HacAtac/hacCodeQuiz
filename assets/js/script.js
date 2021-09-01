var main = document.querySelector("#main");
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
}
//calling the start function
start();


