/* Hi! I wasn't able to get my draw function working or my resart button. I'm not sure where I went wrong. 
    also I don't know why my title or button wounldn't center but i worked on that for to long and finally gave up. :(  */

let cells = document.querySelectorAll(".row > div");
let player = "X";
const winningCombos = [
  [cells[0], cells[1], cells[2]],
  [cells[3], cells[4], cells[5]],
  [cells[6], cells[7], cells[8]],
  [cells[0], cells[3], cells[6]],
  [cells[1], cells[4], cells[7]],
  [cells[2], cells[5], cells[8]],
  [cells[0], cells[4], cells[8]],
  [cells[2], cells[4], cells[6]],
];

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function winCheck() {
  for (let i = 0; i < winningCombos.length /*(8)*/; i++) {
    if (
      winningCombos[i] /*row*/[0] /*collom within the row*/.textContent ===
        winningCombos[i][1].textContent &&
      winningCombos[i][1].textContent === winningCombos[i][2].textContent &&
      winningCombos[i][0].textContent !== ""
    ) {
      alert(player + " is the Winner!");
    }
    /*if(turnCount===8){
            alert("It's a DRAW!")
        }
        /*else (draw[i]){
            alert("Try again!")
        }
    } function alert(){
        program.Restart()*/
  }
}

function togglePlayer() {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
}

function cellClicked(event) {
  event.target.innerText = player;
  winCheck();
  togglePlayer();
  /*turnCount++;*/
}

function restartGame() {
  dwindow.location.reload();
}

/*
function winCheck() {
    let winner = false;
    const wincombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [2, 4, 6],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

}


HINTS
 cells[0].textContent
 */
