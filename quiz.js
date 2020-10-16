

const quiz = document.getElementById("quiz")

let currentQuestion = 0;
let correctAnswers = 0;
let div;
let question;

const questions = [
  {
    category:"HTML",
    question:"What does HTML stand for?",
    possibleAnswers: ["Hyper Text Makeup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language" ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    category:"HTML",
    question:"Which one of these is the largest heading?",
    possibleAnswers: ["<h1>", "<h2>", "<h3>", "<h4>" ],
    correctAnswer: "&lt;h1&gt;"
  },


];




function createDom() {
  question = document.createElement("h3");
  quiz.appendChild(question);

  div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "rows";
  quiz.appendChild(div);

  populateAnswers()

};


function populateAnswers() {

  while (div.firstChild) {
        div.removeChild(div.firstChild);
    }


  question.innerText = questions[currentQuestion].question;

  let correctAnswer = questions[currentQuestion].correctAnswer;

  for (var i = 0; i < questions[currentQuestion].possibleAnswers.length; i++) {

    let answer = document.createElement("button");
    answer.innerText = questions[currentQuestion].possibleAnswers[i];
    div.appendChild(answer);


    answer.addEventListener("click", function(){
      currentQuestion++


      console.log(currentQuestion);
      console.log(this.innerHTML);
      console.log(correctAnswer);
      if (correctAnswer === this.innerHTML) {
        console.log("correct")
        correctAnswers++;
      }

      console.log(questions.length)

      if (currentQuestion >= questions.length) {

        while (div.firstChild) {
              div.removeChild(div.firstChild);
        };


      question.innerHTML = `You got ${correctAnswers} out of ${questions.length} questions correct`


      } else {
        populateAnswers();
      }


    });
  }
}




createDom()
