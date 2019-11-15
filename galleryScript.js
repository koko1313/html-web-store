var images = ["images/chair1.jpg", "images/table1.jpg", "images/sofa1.jpg"];
var titles = ["Стол 1", "Маса 1", "Диван1"];
var i = 0;

function showImage(){
	document.getElementById("currentImage").innerHTML = "<img width='100%' src="+images[i]+">";
	document.getElementById("title").innerHTML = "";
	setTimeout(showTitle, 500);
	setTimeout(showImage, 2000);
}

function showTitle(){
	document.getElementById("title").innerHTML = titles[i];
	if(++i == images.length) i=0;
}