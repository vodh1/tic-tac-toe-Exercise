const players = ['X', 'O']
const moves = new Array(9).fill('') // maximum of 9 moves
let steps = 0; // increment every btn clicks
const reset_button = document.querySelector(".reset-btn");
const t_buttons = document.querySelectorAll(".t-container button");

// t_buttons = [btn1, btn2, btn3, btn4, ...]
// [ 0          1    2            3           4    5    6    7    8]
// [undefined, 'X', undefined, undefined, 'O']

// [ ][x][ ]
// [ ][x][ ]
// [ ][x][ ]

// Winning conditions in 1 dimensional array (index)
// diagonal
// 1. 0,4,8 
// 2. 2,4,6

// vertical
// 3. 0,3,6
// 4. 1,4,7
// 5. 2,5,8

// horizontal
// 6. 0,1,2
// 7. 3,4,5
// 8. 6,7,8

// ['', 'x', 'o', '', '']

// ['', '', 'x', '', '', '', 'x', ]
// [x][ ][ ]
// [ ][x][ ]
// [ ][ ][x]

function displayWinner(player) {
    setTimeout(() => {
        alert(player + ' Wins!')
    }, 50)
}


function isGameOver(playerMoves) {
    players.forEach(player => {
        // diagonal
        if ([0,4,8].every(index => playerMoves[index] == player)) {
            displayWinner(player)
        }
        if ([2,4,6].every(index => playerMoves[index] == player)) {
            displayWinner(player)
        }

        // vertical
        if ([0,3,6].every(index => playerMoves[index] == player)) {
            displayWinner(player)
        }
        if ([1,4,7].every(index => playerMoves[index] == player)) {
            displayWinner(player)
        }
        if ([2,5,8].every(index => playerMoves[index] == player)) {
            displayWinner(player)
        }
        
        
        // horizontal
        if ([0,1,2].every(index => playerMoves[index] == player)) {
            displayWinner(player)
        }
        if ([3,4,5].every(index => playerMoves[index] == player)) {
            displayWinner(player)
        }
        if ([6,7,8].every(index => playerMoves[index] == player)) {
            displayWinner(player)
        }
    })
}


function handleButtonClick(event, index) {
    if (moves[index] == 'X' || moves[index] == 'O') {
        return false
    }

    const button = event.target;
    steps++ 

    if (steps % 2 ===  1) {
        button.innerHTML = 'X';
        moves[index] = 'X'
    } else {    
        button.innerHTML = 'O';
        moves[index] = 'O'
    }
    isGameOver(moves)

    console.log({steps, moves})
}

function handleResetClick() {
    t_buttons.forEach((button, index) => {
        button.innerHTML = '';
        moves[index] = ''
    })
    steps = 0;
}

t_buttons.forEach((button, index) => {
    button.addEventListener('click', (event) => handleButtonClick(event, index))
})

reset_button.addEventListener('click', handleResetClick);