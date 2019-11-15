function allowDropGame(ev) {
    ev.preventDefault();
}

var premesteno;
var startTimer = true;

function dragGame(ev) {
	if(startTimer) timer();
	startTimer = false;
	ev.target.parentNode.removeAttribute("ondrop");
	premesteno = ev.target;
    ev.dataTransfer.setData("text", ev.target.id);
	var img = new Image(); 
	img.src = "";
	ev.dataTransfer.setDragImage(img,0,0);
}

function dropGame(ev) {
	// спираме това, да може да се местят още неща вътре
	ev.target.removeAttribute("ondrop");
	ev.target.removeAttribute("ondragover");
    ev.preventDefault();
	ev.target.innerHTML = premesteno.innerHTML; // преместваме стойността
	premesteno.innerHTML = ""; // освобождаваме новата клетка
	allowDragAndDrop();
}

function generateRandomNumber(){
	return parseInt(Math.random() * (16 - 1 + 1) + 1);
}

// връща масив с рандом числа, без повтарящи се
function generateRandomNumbersArray () {
	var randomNumbers = new Array;
	var i=0;
	while(i<16) {
		var isAlreadyThere = false;
		var currentRandom = generateRandomNumber();
		for(var j=0; j<16; j++)
			if(randomNumbers[j]==currentRandom) isAlreadyThere=true;
		if(isAlreadyThere) continue;
		randomNumbers[i] = currentRandom;
		i++
	}
	return randomNumbers;
}

//поставяме рандом числата
function setRandomNumbers() {
	var randomNumbers = generateRandomNumbersArray();
	var k = 0;
	// слагаме рандом числа на всякъде, без на едно място (там където се получи да е 16)
	for(var i = 1; i <= 4; i++) {
		for(var j = 1; j <= 4; j++){
			if(k<=15) document.getElementById("r"+i+"c"+j).name = randomNumbers[k];
			if(randomNumbers[k]==16) document.getElementById("r"+i+"c"+j).innerHTML = "";
			k++;
		}
	}
	puzzleChange();
}

var imagePuzzle;
function puzzleChange(puzzle) {
	for(var i = 1; i <= 4; i++) {
		for(var j = 1; j <= 4; j++){
			if(document.getElementById("r"+i+"c"+j).innerHTML != "" && document.getElementById("r"+i+"c"+j).name == 16) {document.getElementById("r"+i+"c"+j).innerHTML = ""; setRandomNumbers()};
		}
	}
	document.getElementById("timer").innerHTML = "0 сек."
	stopTimer=false;
	startTimer=true;
	time = 0;
	switch(puzzle) {
		case "puzzle2" : imagePuzzle = "images/game/puzzle2.jpg"; break;
		default : imagePuzzle = "images/game/puzzle1.jpg";
	}
	setImages();
	show_hide_numbers();
}

function setImages() {
	for(var i = 1; i <= 4; i++) {
		for(var j = 1; j <= 4; j++){
			if(document.getElementById("r"+i+"c"+j).name == 1) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(0, 100px, 100px, 0)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "0";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "0";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 2) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(0, 200px, 100px, 100px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "0";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-100px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 3) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(0, 300px, 100px, 200px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "0";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-200px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 4) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(0, 400px, 100px, 300px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "0";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-300px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 5) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(100px, 100px, 200px, 0)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-100px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "0";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 6) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(100px, 200px, 200px, 100px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-100px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-100px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 7) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(100px, 300px, 200px, 200px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-100px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-200px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 8) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(100px, 400px, 200px, 300px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-100px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-300px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 9) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(200px, 100px, 300px, 0)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-200px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "0";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 10) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(200px, 200px, 300px, 100px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-200px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-100px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 11) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(200px, 300px, 300px, 200px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-200px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-200px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 12) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(200px, 400px, 300px, 300px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-200px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-300px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 13) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(300px, 100px, 400px, 0)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-300px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "0";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 14) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(300px, 200px, 400px, 100px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-300px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-100px";
			} else
			if(document.getElementById("r"+i+"c"+j).name == 15) {
				document.getElementById("r"+i+"c"+j).innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>"+document.getElementById("r"+i+"c"+j).name+"</span>";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.clip = "rect(300px, 300px, 400px, 200px)";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.top = "-300px";
				document.getElementById("r"+i+"c"+j).childNodes[0].style.left = "-200px";
			}
		}
	}
	allowDragAndDrop();
}

function allowDragAndDrop() {
	// премахваме всички draggable
	for(var i = 1; i <= 4; i++) {
		for(var j = 1; j <= 4; j++) {
			document.getElementById("r"+i+"c"+j).removeAttribute("draggable");
			document.getElementById("r"+i+"c"+j).parentNode.removeAttribute("ondrop");
			document.getElementById("r"+i+"c"+j).parentNode.removeAttribute("ondragover");
		}
	}
	
	// позволяваме draggable където е възможно
	for(var i = 1; i <= 4; i++) {
		for(var j = 1; j <= 4; j++){
			if(document.getElementById("r"+i+"c"+j).innerHTML == "") {
				document.getElementById("r"+i+"c"+j).parentNode.setAttribute("ondrop","dropGame(event)");
				document.getElementById("r"+i+"c"+j).parentNode.setAttribute("ondragover","allowDropGame(event)");
				if(document.getElementById("r"+(i-1)+"c"+(j+0))) document.getElementById("r"+(i-1)+"c"+(j+0)).setAttribute("draggable","true");
				if(document.getElementById("r"+(i+1)+"c"+(j+0))) document.getElementById("r"+(i+1)+"c"+(j+0)).setAttribute("draggable","true");
				if(document.getElementById("r"+(i-0)+"c"+(j-1))) document.getElementById("r"+(i-0)+"c"+(j-1)).setAttribute("draggable","true");
				if(document.getElementById("r"+(i-0)+"c"+(j+1))) document.getElementById("r"+(i-0)+"c"+(j+1)).setAttribute("draggable","true");
				
			}
		}
	}
}

var time = 0;
var stopTimer = false;
function timer(){
    if(!stopTimer) {
		time++
		document.getElementById("timer").innerHTML = time + "сек.";
		setTimeout(timer, 1000);
	}
}

function checkGame() {
	var numbers = new Array;
	var k=0;
	for(var i = 1; i <= 4; i++) {
		for(var j = 1; j <= 4; j++) {
			if(document.getElementById("r"+i+"c"+j).innerHTML == "") numbers[k]=16; // празното
			else
			numbers[k] = document.getElementById("r"+i+"c"+j).childNodes[1].innerHTML;
			k++;
		}
	}
	
	var solved = true;
	
	for(var i=0; i<15; i++) {
		if(numbers[i]!=i+1) solved=false;
	}
	
	if(solved) {
		document.getElementById("r4c4").innerHTML = "<img draggable='false' src='"+imagePuzzle+"'><span>16</span>";
		document.getElementById("r4c4").childNodes[0].style.clip = "rect(300px, 400px, 400px, 300px)";
		document.getElementById("r4c4").childNodes[0].style.top = "-300px";
		document.getElementById("r4c4").childNodes[0].style.left = "-300px";
		stopTimer=true;
		alert("Браво, вие успешно наредихте пъзела! Времето за което се справихте е "+time+" секунди.");
	} else alert("Пъзела не е нареден!");
}

function show_hide_numbers(){
	var allNumbers = document.getElementsByTagName("span");
	if(document.getElementById("show_hide_numbers").checked == false)
		for(var i=0; i<allNumbers.length; i++){
			allNumbers[i].style.display = "none";
		}
	else
		for(var i=0; i<allNumbers.length; i++){
			allNumbers[i].style.display = "block";
		}
}