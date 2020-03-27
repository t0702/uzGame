const cvs = document.getElementById("tetris");
const ctx = cvs.getContext("2d");

const ROW = 20;
const COL = (COLUMN = 10); //column
const SQ = (squareSize = 20); //squareSize
const VACANT = "WHITE"; //빈칸

//draw a square
function drawSquare(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * SQ, y * SQ, SQ, SQ);

  ctx.strokeStyle = "BLACK";
  ctx.strokeRect(x * SQ, y * SQ, SQ, SQ);
}

//creat the board
let board = [];
for (r = 0; r < ROW; r++) {
  board[r] = [];
  for (c = 0; c < COL; c++) {
    board[r][c] = VACANT;
  }
}

//draw the board
function drawBoard() {
  for (r = 0; r < ROW; r++) {
    for (c = 0; c < COL; c++) {
      drawSquare(c, r, board[r][c]);
    }
  }
}

drawBoard();

//the pieces and their colors
const PIECES = [
  [Z, "red"],
  [S, "green"],
  [T, "yellow"],
  [O, "blue"],
  [L, "purple"],
  [I, "cyan"],
  [J, "orange"]
];

//initate a piece
let p = new Piece(PIECES[0][0], PIECES[0][1]);

//the Object piece
function Piece(tetromino, color) {
  this.tetromino = tetromino;
  this.color = color;

  this.tetrominoN = 0; //we start from the first pattern
  this.activeTetromino = this.tetromino[this.tetrominoN];

  //we need to control the pieces
  this.x = 0;
  this.y = 0;
}

//draw a piece to the board
Piece.prototype.draw = function() {
  for (r = 0; r < this.activeTetromino.length; r++) {
    for (c = 0; c < this.activeTetromino.length; c++) {
      //we draw only accupied squares
      if (this.activeTetromino[r][c]) {
        drawSquare(this.x + c, this.y + r, this.color);
      }
    }
  }
};
p.draw();
