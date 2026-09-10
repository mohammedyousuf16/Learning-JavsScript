let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const resetBtn = document.querySelector("#resetBtn");
const choices = document.querySelectorAll(".choice");
const showUserScore = document.querySelector("#user-score");
const showCompScore = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

function resetGame() {
  userScore = 0;
  compScore = 0;
  showUserScore.innerText = `${userScore}`;
  showCompScore.innerText = `${compScore}`;
  msg.innerText = "Play your Move!";
  msg.style.backgroundColor = " rgba(0, 0, 0, 0.755)";

  console.log("it was clicked");
}

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `you win ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";

    userScore++;
    showUserScore.innerText = `${userScore}`;
  } else {
    msg.innerText = `you loose ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    showCompScore.innerText = `${compScore}`;
  }
};

const drawGame = () => {
  msg.innerText = "draw";
  msg.style.backgroundColor = " rgba(0, 0, 0, 0.755)";
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = false;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", resetGame);
