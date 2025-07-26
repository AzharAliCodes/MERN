const boxes = document.querySelectorAll(".ticTac #box");
const btn = document.getElementById("rstbtn");
const heading = document.getElementsByTagName("h1");
let c = 0;

let gameOver = false;

wm = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (box.textContent != "" || gameOver) {
      return;
    }
    if (c % 2 === 0) {
      box.textContent = "X";
      // e.target.textContent = 'X';
      c++;
    } else {
      box.textContent = "O";
      c++;
    }
    if (c >= 5) {
      wfl();
    }
    if (c === 9) {
      heading[0].textContent = "Better luck next time you both";
    }
  });
});

function wfl() {
  wm.forEach((item) => {
    let i1 = item[0];
    let i2 = item[1];
    let i3 = item[2];
    let a = boxes[i1].innerText;
    let b = boxes[i2].innerText;
    let d = boxes[i3].innerText;
    if (a != "" && b != "" && d != "") {
      if (a === b && a === d) {
        boxes[i1].classList.add('boxe')
        boxes[i2].classList.add('boxe')
        boxes[i3].classList.add('boxe')
        heading[0].textContent = `congrtulations ${a}`;
        gameOver = true;
        c = 0;
      }
    }
  });
}


btn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.textContent = "";
    box.classList.remove('boxe');
    heading[0].textContent = "Tic Tac Toe";
    gameOver = false;
  });
});
