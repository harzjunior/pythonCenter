// implementation of John Conway's Game of Life
// run in the terminal with: python3 main.py

// implement the class for the game of life
class GameOfLife {
  //initialize the game of life
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = this.createGrid();
    this.generation = 0;
  }
  // create the board
  createGrid() {
    let grid = [];
    for (let i = 0; i < this.height; i++) {
      grid.push([]);
      for (let j = 0; j < this.width; j++) {
        grid[i].push(0);
      }
    }
    return grid;
  }
  // create the glider
  glider(x, y) {
    this.grid[y][x + 1] = 1;
    this.grid[y + 1][x + 2] = 1;
    this.grid[y + 2][x + 1] = 1;
    this.grid[y + 2][x + 2] = 1;
  }
  // create a random board
  randomize() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j] = Math.floor(Math.random() * 2);
      }
    }
  }

  //print the board and render 1 as x and 0 as a space
  print() {
    for (let i = 0; i < this.height; i++) {
      let row = "";
      for (let j = 0; j < this.width; j++) {
        row += this.grid[i][j] ? "x" : " ";
      }
      console.log(row);
    }
  }

  // count the neighbors
  countNeighbors(x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        let col = (x + i + this.width) % this.width;
        let row = (y + j + this.height) % this.height;
        sum += this.grid[row][col];
      }
    }
    sum -= this.grid[y][x];
    return sum;
  }

  //update the board
  update() {
    let next = this.createGrid();
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        let neighbors = this.countNeighbors(i, j);
        if (this.grid[i][j] === 1 && (neighbors < 2 || neighbors > 3)) {
          next[i][j] = 0;
        } else if (this.grid[i][j] === 0 && neighbors === 3) {
          next[i][j] = 1;
        } else {
          next[i][j] = this.grid[i][j];
        }
      }
    }
    this.grid = next;
    this.generation++;
  }

  // run the game in while loop until the user quits
  run() {
    this.print();
    this.update();
    setTimeout(() => {
      this.run();
    }, 100);
  }
}

//run the game
let game = new GameOfLife(10, 10);
game.randomize();
game.print();
console.log("Generation: " + game.generation);
