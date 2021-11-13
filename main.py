# implementation of John Conway's Game of Life
# run in the terminal with: python3 main.py

# import the modules
import random
import time

# implement the class for the game of life


class GameOfLife:
    # initialize the game
    def __init__(self, width, height):
        self.width = width
        self.height = height
        self.board = self.create_board(width, height)
        self.create_glider(self.board)
        self.create_random_board(self.board)
        self.print_board(self.board)

    # create the board
    def create_board(self, width, height):
        board = []
        for x in range(width):
            board.append([])
            for y in range(height):
                board[x].append(0)
        return board

    # create a glider
    def create_glider(self, board):
        board[0][1] = 1
        board[1][2] = 1
        board[2][3] = 1
        board[2][0] = 1
        board[3][1] = 1
        board[3][2] = 1
        board[3][3] = 1

    # create a random board
    def create_random_board(self, board):
        for x in range(self.width):
            for y in range(self.height):
                board[x][y] = random.randint(0, 1)

    # print the board
    def print_board(self, board):
        for y in range(self.height):
            for x in range(self.width):
                # render 1 as x and 0 as a space
                if board[x][y] == 1:
                    print("*", end="")
                else:
                    print(".", end="")
            print()

    # count the neighbors
    def count_neighbors(self, board, x, y):
        count = 0
        for i in range(-1, 2):
            for j in range(-1, 2):
                if i == 0 and j == 0:
                    continue
                if x + i < 0 or x + i >= self.width:
                    continue
                if y + j < 0 or y + j >= self.height:
                    continue
                count += board[x + i][y + j]
        return count

        # update the board
    def update_board(self, board):
        new_board = self.create_board(self.width, self.height)
        for x in range(self.width):
            for y in range(self.height):
                neighbors = self.count_neighbors(board, x, y)
                if neighbors < 2:
                    new_board[x][y] = 0
                elif neighbors == 2:
                    new_board[x][y] = board[x][y]
                elif neighbors == 3:
                    new_board[x][y] = 1
                elif neighbors > 3:
                    new_board[x][y] = 0
        return new_board

    # run the game
    def run(self):
        while True:
            self.print_board(self.board)
            time.sleep(1)
            self.board = self.update_board(self.board)


            # create the game
game = GameOfLife(100, 10)

# run the game
game.run()
