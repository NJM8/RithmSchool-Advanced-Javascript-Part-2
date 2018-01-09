$(document).ready(function(){
	var canvas = document.getElementById('game-board');
	canvas.width = 600;
	canvas.height = 500;
	window.ctx = canvas.getContext('2d');
	var playing = false;
	var currentShape = '';
	var score = 0;
	var timeLeft = 30;
	var randomX = 0;
	var randomY = 0;
	var delay = 1000;
	var hasGuessed = false;
	var currentTime = 0;
	var main;

	var keys = {
		38: 'square', 
		40: 'circle', 
		39: 'triangle',
		37: 'star',

		randomShape: function(){
			var values = Object.values(keys);
			return values[Math.floor(Math.random() * 4)];
		}
	}

	var colors = ['#ff6347', '#00ff7f', '#ff00ff', '#fffacd', '#b22222', '#f0e68c', '#00ffff', '#ffa500', '#d2691e', '#556b2f', '#e9967a', '#ff1493', '#ffd700', '#fafad2', '#20b2aa'];

	var finalMessages = {
		1: 'Ouch! I think some practice is in order. Your final score was: ', 
		2: 'Not bad! Your final score was: ', 
		3: 'Pretty good! Your final score was: ', 
		4: 'Great Job! Your final score was: '
	}

	$(document).on('keyup', function(event){
		if (event.keyCode === 32 && !playing) {
			playing = true;
			playGame(playing);
		} else {
			if (!hasGuessed){
				hasGuessed = true;
				var key = keys[event.keyCode];
				if (key === currentShape) {
					score += 1;
					$('#score').text(score);
				}	
			} else {
				return;
			}
		}
	});

	var draw = function(){ 
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (currentShape === 'square') {
			ctx.fillRect(randomX, randomY, 40, 40);
		} else if (currentShape === 'circle') {
			ctx.beginPath();
			ctx.arc(randomX, randomY, 22.5, 0, 2 * Math.PI);
			ctx.fill();
			ctx.closePath();
		} else if (currentShape === 'triangle') {
			var stepOneX = randomX + 30;
			var stepOneY = randomY + 40;
			var StepTwoX = stepOneX - 60;

			ctx.beginPath();
			ctx.moveTo(randomX, randomY);
			ctx.lineTo(stepOneX, stepOneY);
			ctx.lineTo(StepTwoX, stepOneY);
			ctx.fill();
			ctx.closePath();
		} else if (currentShape === 'star') {
			ctx.save();
		    ctx.beginPath();
		    ctx.translate(randomX, randomY);
		    ctx.moveTo(0, 0 - 20);

		    for (var i = 0; i < 5; i++) {
		        ctx.rotate(Math.PI / 5);
		        ctx.lineTo(0, 0 - (20 * 0.4));
		        ctx.rotate(Math.PI / 5);
		        ctx.lineTo(0, 0 - 20);
		    }

		    ctx.closePath();
		    ctx.fill();
		    ctx.restore();
		}
	}

	var timer = function(){
		if (timeLeft === 0) {
			playing = false;
			playGame();
			return;
		}

		timeLeft -= 1;
		$('#time-left').text(timeLeft);
	}

	var game = function(){		
		hasGuessed = false;
		currentShape = keys.randomShape();
		ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
		randomX = Math.floor(Math.random() * 525) + 25;
		randomY = Math.floor(Math.random() * 425) + 25;

		draw()
	}

	var runner = function(){
		currentTime += 100;

		if (delay === 500) {
			if (currentTime % 500 === 0) {
				game();
			}
		} else if (delay === 1000) {
			if (currentTime % 1000 === 0) {
				game();
			}
		} else if (delay === 2000) {
			if (currentTime % 2000 === 0) {
				game();
			}
		}

		if (currentTime % 1000 === 0) {
			timer();
		}
	}

	var playGame = function(){
		if (playing){
			$('label').addClass('disabled');
			main = setInterval(runner, 100);
		} else {
			clearTimeout(main);
			var finalMessage = '';
			if (score <= 7) {
				finalMessage = finalMessages[1];
			} else if (8 <= score && score <= 14) {
				finalMessage = finalMessages[2];
			} else if (15 <= score && score <= 21) {
				finalMessage = finalMessages[3];
			} else if (22 <= score) {
				finalMessage = finalMessages[4];
			}
			$('#final-message').text(finalMessage + score + '!');
			$('#score-modal').modal('show');
			$('label').removeClass('disabled');
		}
	}

	$('#score-modal').on('hidden.bs.modal', function(){
		$('#score').text(0);
		$('#time-left').text(30);
		score = 0;
		timeLeft = 30;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	});

	$('#difficulty1').on('click', function(){
		delay = 2000;
	});

	$('#difficulty2').on('click', function(){
		delay = 1000;
	});

	$('#difficulty3').on('click', function(){
		delay = 500;
	});

})



