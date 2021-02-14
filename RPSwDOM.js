let playerSelection;
let numb;
let playerWins = 0;
let computerWins = 0;
let computerSelection = ''
const buttons = document.querySelectorAll('button'); 
const playerScore = document.getElementById('playerScore') 
const computerScore = document.getElementById('computerScore') 
const finalScore = document.getElementById('finalScore') 
const computerChoice = document.getElementById('computerChoice') 
let gameCount = 0;
 const gameResult = document.getElementById('gameResult');

buttons.forEach((button) => {
        button.addEventListener('click', () => {
        playerSelection = button.id;
        console.log(playerSelection);
        game(playerSelection, computerSelection) 
        if (gameCount === 5) {
                finalScore.textContent = `Player ${playerWins} Computer ${computerWins}`
                alert(`Player ${playerWins} Computer ${computerWins}`);
                gameCount = 0;
                playerWins = 0;
                playerScore.textContent = `Player Score = ${playerWins}`
                computerWins = 0;
                computerScore.textContent = `Computer Score = ${computerWins}`
                alert('New Game')
                finalScore.textContent = `New Game!`
        }
        }
        )
})









function computerPlay() {
        random();
    if (numb === 0) {
              computerSelection = 'rock'
              computerChoice.textContent = `Computer chose ${computerSelection}`
                return computerSelection = 'rock'}

        else if (numb === 1) {
              computerSelection = 'paper'
              computerChoice.textContent = `Computer chose ${computerSelection}`
                return computerSelection = 'paper'}
         
        else if (numb === 2) {
            computerSelection = 'scissors'
            computerChoice.textContent = `Computer chose ${computerSelection}`
            return computerSelection = 'scissors'}
}

function random(){
        numb = Math.round(Math.random() * 2);
        return numb;
        }
    
      
        

   

            
        
    


   function game(playerSelection, computerSelection) {
                /*playerSelection = prompt("Rock, paper or scissors?")
                playerSelection = playerSelection.toLowerCase();
                */
           computerSelection = computerPlay();
        if (playerSelection === 'rock' && computerSelection === 'scissors') {
                gameResult.textContent = 'Rock beats Scissors'
                playerWins ++;
                 playerScore.textContent = `Player Score = ${playerWins}`
                 gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                 return 'Player wins!';
                }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
                gameResult.textContent = 'Paper beats Rock'
                playerWins ++;
                playerScore.textContent = `Player Score = ${playerWins}`
                gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                 return 'Player wins!';
                
                }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
                gameResult.textContent = 'Scissors beat Paper'
                playerWins ++;
                playerScore.textContent = `Player Score = ${playerWins}`
                gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                 return 'Player wins!';
                }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
                gameResult.textContent = 'Rock beats Scissors'
                computerWins ++;
                computerScore.textContent = `Computer Score = ${computerWins}`
                gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                 return 'Computer wins!';
                    }
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
                gameResult.textContent = 'Paper beats Rock'
                computerWins ++;
                computerScore.textContent = `Computer Score = ${computerWins}`
                gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                    return 'Computer wins!';
                    }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
                gameResult.textContent = 'Scissors beat Paper'
                computerWins ++;
                computerScore.textContent = `Computer Score = ${computerWins}`
                gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                 return 'Computer wins!';
                    }
        else if (playerSelection === 'rock' && computerSelection === 'rock') {
                gameResult.textContent = 'Tie!'
                gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                    return 'Tie!';
                    }
        else if (playerSelection === 'paper' && computerSelection === 'paper') {
                gameResult.textContent = 'Tie!'
                gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                    return 'Tie!';
                    }
        else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
                gameResult.textContent = 'Tie!'
                gameCount ++;
                 finalScore.textContent = `${gameCount} game(s) played`
                    return 'Tie!';
                    }
                }
                
        /*function fiveRounds (game) {
                game(playerSelection, computerSelection);
                game(playerSelection, computerSelection);
                game(playerSelection, computerSelection);
                game(playerSelection, computerSelection);
                game(playerSelection, computerSelection);

                if (playerWins === computerWins) {
                alert(`After five games the result is a tie of ${playerWins} and ${computerWins}.`)
                return 'Tie'}
                if (playerWins > computerWins) {
                        alert(`After five games the result is a player victory by ${playerWins} to ${computerWins}.`)
                        return 'Player Wins'}
                        if (playerWins < computerWins) {
                                alert(`After five games the result is a computer victory by ${computerWins} to ${playerWins}.`)
                                return 'Computer Wins'}
        }*/
