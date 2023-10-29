!DOCTYPE html>
<html>
<head>
    <title>Tic-Tac-Toe Game</title>
    <style>
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-gap: 5px;
            margin: 0 auto;
        }

        .cell {
            width: 100px;
            height: 100px;
            text-align: center;
            font-size: 24px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Tic-Tac-Toe</h1>
    <div class="board" id="board">
        <div class="cell" onclick="makeMove(0)"></div>
        <div class="cell" onclick="makeMove(1)"></div>
        <div class="cell" onclick="makeMove(2)"></div>
        <div class="cell" onclick="makeMove(3)"></div>
        <div class="cell" onclick="makeMove(4)"></div>
        <div class="cell" onclick="makeMove(5)"></div>
        <div class="cell" onclick="makeMove(6)"></div>
        <div class="cell" onclick="makeMove(7)"></div>
        <div class="cell" onclick="makeMove(8)"></div>
    </div>
    <p id="result"></p>

    <script>
        let currentPlayer = 'X';
        let board = ['','','','','','','','','',''];
        let gameOver = false;

        function makeMove(cellIndex) {
            if (!gameOver && board[cellIndex] === '') {
                board[cellIndex] = currentPlayer;
                document.getElementById('board').children[cellIndex].innerText = currentPlayer;
                
                if (checkWin(currentPlayer)) {
                    document.getElementById('result').innerText = currentPlayer + ' wins!';
                    gameOver = true;
                } else if (board.indexOf('') === -1) {
                    document.getElementById('result').innerText = "It's a draw!";
                    gameOver = true;
                } else {
                    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
                }
            }
        }

        function checkWin(player) {
            const winningCombinations = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            for (let combo of winningCombinations) {
                if (board[combo[0]] === player && board[combo[1]] === player && board[combo[2]] === player) {
                    return true;
                }
            }

            return false;
        }
    </script>
</body>
</html>
