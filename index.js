const rows = [
  ["5", "3", ".", ".", "8", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function isValidSudoku(rows) {
  const rowSet = new Set();
  const columnSet = new Set();
  const boxSet = new Set();

  //Loop through each row (vertical)
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    //Loop through numbers in each row
    for (let j = 0; j < row.length; j++) {
      const rowNumber = row[j];
      const columnNumber = rows[j][i];
      const boxNumber =
        rows[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          ((i * 3) % 9) + (j % 3)
        ];

      if (rowNumber !== ".") {
        if (rowSet.has(rowNumber)) return false;
        rowSet.add(rowNumber);
      }
      if (columnNumber !== ".") {
        if (columnSet.has(columnNumber)) return false;
        console.log("false");
        columnSet.add(columnNumber);
      }
      if (boxNumber !== ".") {
        if (boxSet.has(boxNumber)) return false;
        console.log("false");
        boxSet.add(boxNumber);
      }
    }
    rowSet.clear();
    columnSet.clear();
    boxSet.clear();
  }
  return true;
  console.log("true");
}

window.onload = function () {
  isValidSudoku(rows);
};
