minutesRotation = 0;
hoursRotation = 0;
trail=-1.6;

function minutesMove(){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	
	if(minutesRotation == 360) {
		hoursMove();
		minutesRotation = 0;
		trail = -1.6;
		ctx.clearRect(0, 0, 300, 300);
	}
	
	document.getElementById("minutes-container").style.transform = "rotate("+minutesRotation+"deg)";
	

	ctx.beginPath();
	ctx.arc(150, 150, 80, -1.6, trail);
	ctx.lineWidth = 140;
	ctx.strokeStyle="#CCFF99";
	ctx.stroke();
	
	trail+=0.105;
	minutesRotation+=6;
	
	
	setTimeout(minutesMove, 15);
}

function hoursMove(){
	if(hoursRotation == 360) hoursRotation = 0;
	hoursRotation+=30;
	
	switch(hoursRotation){
		case 30 : // 1
			document.getElementById("h1").style.color = "#0033FF";
			document.getElementById("h12").style.color = "black";
			break;
		case 60 : // 2
			document.getElementById("h2").style.color = "#0033FF";
			document.getElementById("h1").style.color = "black";
			break;
		case 90 : // 3
			document.getElementById("h3").style.color = "#0033FF";
			document.getElementById("h2").style.color = "black";
			break;
		case 120 : // 4
			document.getElementById("h4").style.color = "#0033FF";
			document.getElementById("h3").style.color = "black";
			break;
		case 150 : // 5
			document.getElementById("h5").style.color = "#0033FF";
			document.getElementById("h4").style.color = "black";
			break;
		case 180 : // 6
			document.getElementById("h6").style.color = "#0033FF";
			document.getElementById("h5").style.color = "black";
			break;
		case 210 : // 7
			document.getElementById("h7").style.color = "#0033FF";
			document.getElementById("h6").style.color = "black";
			break;
		case 240 : // 8
			document.getElementById("h8").style.color = "#0033FF";
			document.getElementById("h7").style.color = "black";
			break;
		case 270 : // 9
			document.getElementById("h9").style.color = "#0033FF";
			document.getElementById("h8").style.color = "black";
			break;
		case 300 : // 10
			document.getElementById("h10").style.color = "#0033FF";
			document.getElementById("h9").style.color = "black";
			break;
		case 330 : // 11
			document.getElementById("h11").style.color = "#0033FF";
			document.getElementById("h10").style.color = "black";
			break;
		case 360 : // 12
			document.getElementById("h12").style.color = "#0033FF"; 
			document.getElementById("h11").style.color = "black";
			break;
	}
	
	document.getElementById("hours-container").style.transform = "rotate("+hoursRotation+"deg)";
}