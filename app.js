/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, gamePlaying;

init();
// calculates a random number between 1 - 6
// dice = Math.floor(Math.random() * 6) + 1; 

document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if(gamePlaying) {
    
        // 1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1; 

        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        
        // 3. Update the round score IF the rolled number was not a 1
        if (dice !== 1) { 
            //Add score
            roundScore += dice;
                //same as writing roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
                //display the round score in th element with ^ code
        } else {
            //Next player
            nextPlayer();
        }

    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
        if(gamePlaying) {

             // Add current score to players GLOBAL score
             scores[activePlayer] += roundScore;
        
             //Update the UI
             document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
     
             //Check if player won the game
             if (scores[activePlayer] >= 50) {
                 document.querySelector('#name-' + activePlayer).textContent = "Winner!";
                 document.querySelector('.dice').style.display = 'none';
                 document.querySelector('.player-0-panel').classList.add('winner');
                 document.querySelector('.player-1-panel').classList.remove('winner');
                 gamePlaying = false;
             } else {
                  //Next Player
                  nextPlayer();
             }
     

        }
        
   
});

function nextPlayer () {
        //Next player
           activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           // same as writing 
           //      if(activePlayer === 0 ){
           //      activePlayer = 1;
           //      } else { activePlayer = 0; }
       roundScore = 0;

       document.getElementById('current-0').textContent = 0;
       document.getElementById('current-1').textContent = 0;

       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');

       //document.querySelector('.player-0-panel').classList.remove('active');
       //document.querySelector('.player-1-panel').classList.add('active');

       document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}



//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// this way only works with using html

//var x = document.querySelector('#score-0').textContent;




