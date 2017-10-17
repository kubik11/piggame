/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, current, active;

score = [0, 0];
current = 0;
active = 0;
// start the game
document.querySelector('.btn-new').addEventListener('click', function(){
	newGame();
});
// set players names
document.querySelector('#setP').addEventListener('click', function(){
	var player1 = document.getElementById('firstPlayer').value;
	var player2 = document.getElementById('secondPlayer').value;
	document.getElementById('name-0').textContent = player1;
	document.getElementById('name-1').textContent = player2;
	document.querySelector('.wrapper').classList.toggle('to-blure');
	document.querySelector('.wrap-setName').classList.toggle('to-set-palyers');

});
// throw the dice
document.querySelector('.btn-roll').addEventListener('click', function(){
	var dice = Math.floor(Math.random()*6) + 1;
	document.querySelector('.dice').style.display = 'block';
	document.querySelector('.dice').src = 'dice-' + dice + '.png';
	// Check the condition
	if(dice !== 1){
		current += dice;
		document.getElementById('current-' + active).textContent = current;
	}else{
		current = 0;
		document.getElementById('current-' + active).textContent = current;
		nextPlayer();
	}
});
// Hold the value
document.querySelector('.btn-hold').addEventListener('click', function(){
	hold();
});

function hold(){
	var activePlayer = document.getElementById('score-' + active);
	score[active] += current;
	if(score[active] >= 100){
		winner();
	}else{
		activePlayer.textContent = score[active];
		current = 0;
		document.getElementById('current-' + active).textContent = current;
		nextPlayer();
	}
}

function nextPlayer(){
	document.querySelector('.dice').style.display = 'none';
	active === 0? active = 1: active = 0;
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');
}
function winner(){
	var activePlayer = document.getElementById('score-' + active);
	activePlayer.classList.add('win');
	activePlayer.textContent = 'Winer!!!';
	document.querySelector('.btn-roll').style.display = 'none';
	document.querySelector('.btn-hold').style.display = 'none';
}
function newGame(){
	// invoke the function to set players names
	setPlayers();
	// set the score to "0"
	score = [0, 0];
	document.getElementById('score-1').textContent = '0';
	document.getElementById('score-0').textContent = '0';
	// delete the class of winner
	document.getElementById('score-0').classList.remove('win');
	document.getElementById('score-0').classList.remove('win');
	document.getElementById('current-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	// set visibility of buttons
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.btn-roll').style.display = 'block';
	document.querySelector('.btn-hold').style.display = 'block';
}

function setPlayers(){
	var overlay = document.createElement("div");
	var popUp = document.createElement("div");
	document.querySelector('.wrapper').classList.toggle('to-blure');
	document.querySelector('.wrap-setName').classList.toggle('to-set-palyers');
}