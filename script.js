function	guessOnTwoPlayers(){
	var player,number,answer,attempt;
		player=1;
		attempt=1;

		number=parseInt(Math.random()*100);
		while(true){
			attempt=attempt+1;
			answer = prompt("Игрок "+player +" введи число от 1 до 100, для выхода нажми q ");
			if(answer=="q"){
				break;
			}
			answer = parseInt(answer);// превод строки в число 
			if(answer==number){
				attempt=attempt/2;
				alert("Угадал игрок "+player+" число " +answer+" количество попыток игрока: "+Math.floor(attempt));

				break;
			}
			else if(number<answer){
				alert("Введенное число слишком большое");
			}
			else if(number>answer){
				alert("Введенное число слишком маленькое");
			}
			else{
				alert("Введите коректный ответ");
				continue;
			}
			if(player==1){
				player=2;
			}
			else{
				player=1;
			}
		}
}


function guess(){
		var count =0;
	function askQuestion(question,answer) {//parameters
		var userAnswer= prompt (question);
					if (userAnswer == answer){
				alert("true");
				count ++;
			}else alert ("false");
	}
	askQuestion("2+2","4"); // arguments 
	askQuestion("5+6","11");
		alert("Правильных ответов "+count);
}


function deposit(){
	var money=+prompt("Количество денег");
		var procent=+prompt("годовой процент");
		var year=+prompt("Количество лет");
			if (procent<=0 || money<=0 || year<=0){
				alert("Введите корректные значения ");
				
			}
				else
				for(var i=1;i<=year;i++){
					money=money+money*procent/100;
					alert("Сумма с процентами за "+i+"год составит "+money.toFixed(2));
			}
}

// цепочный метод 
// очередь выполенения, где скрипт подключен там он и исполняется. 