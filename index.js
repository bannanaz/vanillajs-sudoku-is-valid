var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", ".", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var board2 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", ".", "5", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

window.onload = function () {
  setBoard();
  isValidSudoku(board);
  validationMessage();
  setBoard2();
  isValidSudoku(board2);
  validationMessage2();
};

function setBoard() {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let cell = document.createElement("div");
      if (board[r][c] != ".") {
        cell.innerText = board[r][c];
        cell.classList.add("cell-start");
      }
      if (r == 2 || r == 5) {
        cell.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5) {
        cell.classList.add("vertical-line");
      }
      cell.classList.add("cell");
      document.getElementById("board").append(cell);
    }
  }
}

function setBoard2() {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let cell = document.createElement("div");
      if (board2[r][c] != ".") {
        cell.innerText = board2[r][c];
        cell.classList.add("cell-start");
      }
      if (r == 2 || r == 5) {
        cell.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5) {
        cell.classList.add("vertical-line");
      }
      cell.classList.add("cell");
      document.getElementById("board2").append(cell);
    }
  }
}

function isValidSudoku(array) {
  for (let i = 0; i < array.length; i++) {
    const set = new Set();
    for (let j = 0; j < array[i].length; j++) {
      const cell = array[i][j];
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  for (let i = 0; i < array.length; i++) {
    const set = new Set();
    for (let j = 0; j < array[i].length; j++) {
      const cell = array[j][i];
      if (cell === ".") continue;
      if (set.has(cell)) return false;
      set.add(cell);
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const set = new Set();
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          const cell = array[3 * i + k][3 * j + l];
          if (cell === ".") continue;
          if (set.has(cell)) return false;
          set.add(cell);
        }
      }
    }
  }
  return true;
}

function validationMessage() {
  if (isValidSudoku(board)) {
    let valid = document.getElementById("valid");
    valid.append("Board is valid!");
    valid.classList.add("valid-message");
  } else {
    let valid = document.getElementById("valid");
    valid.append("Board is not valid!");
    valid.classList.add("not-valid-message");
  }
}

function validationMessage2() {
  if (isValidSudoku(board2)) {
    let valid = document.getElementById("valid2");
    valid.append("Board is valid!");
    valid.classList.add("valid-message");
  } else {
    let valid = document.getElementById("valid2");
    valid.append("Board is not valid!");
    valid.classList.add("not-valid-message");
  }
}
