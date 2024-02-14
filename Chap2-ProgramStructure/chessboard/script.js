const board = document.querySelector("#board");
// console.log(board);

// let size = Number(prompt("How grid do you want? 8x8? just type 8"));
let size = 8;
for (let r = 0; r < size; r++) {
  const row = document.createElement("div");

  row.className = "row";
  for (let c = 0; c < size; c++) {
    const col = document.createElement("div");
    col.className = "cell";

    if ((r + c) % 2 == 0) {
      col.style.backgroundColor = "black";
    } else {
      col.style.backgroundColor = "white";
    }
    row.append(col);
  }

  board.append(row);
}
