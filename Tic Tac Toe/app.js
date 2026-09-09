let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count = 0;
let playerO = false;
let winPatten = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function resetGame() {
  playerO = false;
  enableBoxes();
  count = 0;
  msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (playerO) {
      box.innerText = "O";
      playerO = false;
    } else {
      box.innerText = "X";
      playerO = true;
    }
    box.disabled = true;
    count++;
    checkwinner();

    let isWinner = checkwinner();
    if (count === 9 && !isWinner) {
      showDraw();
    }
  });
});

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}

function showDraw() {
  msg.innerText = `Game was a Draw`;
  msgContainer.classList.remove("hide");
}

const showWinner = (winner) => {
  msg.innerText = `Congragulation winner is ${winner}`;
  msgContainer.classList.remove("hide");
};

const checkwinner = () => {
  let hasWinner = false;
  for (let patten of winPatten) {
    let pos1Val = boxes[patten[0]].innerText;
    let pos2Val = boxes[patten[1]].innerText;
    let pos3Val = boxes[patten[2]].innerText;
    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        disableBoxes();
        showWinner(pos1Val);
        hasWinner = true;
      }
    }
  }
  return hasWinner;
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
