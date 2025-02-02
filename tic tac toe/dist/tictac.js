var Player;
(function (Player) {
    Player["X"] = "X";
    Player["O"] = "O";
})(Player || (Player = {}));
var TicTacToe = /** @class */ (function () {
    function TicTacToe(boardElementId, messageElementId) {
        this.board = new Array(9).fill(null);
        this.currentPlayer = Player.X;
        this.gameOver = false;
        var boardEl = document.getElementById(boardElementId);
        var messageEl = document.getElementById(messageElementId);
        if (!boardEl || !messageEl) {
            throw new Error("Board or message element not found");
        }
        this.boardElement = boardEl;
        this.messageElement = messageEl;
        this.renderBoard();
        this.updateMessage("Player " + this.currentPlayer + "'s turn");
    }
    TicTacToe.prototype.renderBoard = function () {
        var _this = this;
        // Clear the board and recreate each cell
        this.boardElement.innerHTML = "";
        this.board.forEach(function (cell, index) {
            var cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.dataset.index = index.toString();
            cellElement.textContent = cell ? cell : "";
            cellElement.addEventListener("click", function () { return _this.handleCellClick(index); });
            _this.boardElement.appendChild(cellElement);
        });
    };
    TicTacToe.prototype.handleCellClick = function (index) {
        if (this.gameOver || this.board[index] !== null) {
            return;
        }
        // Set the current player's move on the board
        this.board[index] = this.currentPlayer;
        this.renderBoard();
        // Check for a win or draw
        if (this.checkWin(this.currentPlayer)) {
            this.updateMessage("Player " + this.currentPlayer + " wins!");
            this.gameOver = true;
            return;
        }
        if (this.board.every(function (cell) { return cell !== null; })) {
            this.updateMessage("It's a draw!");
            this.gameOver = true;
            return;
        }
        // Switch the player
        this.currentPlayer = this.currentPlayer === Player.X ? Player.O : Player.X;
        this.updateMessage("Player " + this.currentPlayer + "'s turn");
    };
    TicTacToe.prototype.updateMessage = function (message) {
        this.messageElement.textContent = message;
    };
    TicTacToe.prototype.checkWin = function (player) {
        var _this = this;
        var winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        return winningCombos.some(function (combo) {
            return combo.every(function (index) { return _this.board[index] === player; });
        });
    };
    TicTacToe.prototype.reset = function () {
        this.board = new Array(9).fill(null);
        this.currentPlayer = Player.X;
        this.gameOver = false;
        this.renderBoard();
        this.updateMessage("Player " + this.currentPlayer + "'s turn");
    };
    return TicTacToe;
}());
// Initialize the game when the window loads
window.addEventListener("load", function () {
    var game = new TicTacToe("board", "message");
    // Create and add a reset button to the document
    var resetButton = document.createElement("button");
    resetButton.id = "reset";
    resetButton.textContent = "Reset Game";
    resetButton.addEventListener("click", function () { return game.reset(); });
    document.body.appendChild(resetButton);
});
