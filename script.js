// Проверява дали даден елемент е overflowed
function isOverflowed(element){
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

// Преоразмерява section и aside
function equalHeight(){
	var section = document.getElementById("section");
	var aside = document.getElementById("aside");
	var sectionHeight = document.getElementById("section").clientHeight;
	var asideHeight = document.getElementById("aside").clientHeight;
	
	aside.style.height = sectionHeight-10 + "px"; //-10 защото има padding
	
	if(isOverflowed(document.getElementById("aside"))) {
		aside.style.height = aside.scrollHeight + "px";
		section.style.height = aside.scrollHeight-20 + "px"; //-20 защото има padding
	}
}

// Прави видеото малко
function makeSmall() {document.getElementById("myVideo").width-=50}

// Възстановява първоначалния размер на видеото
function originalSize() {document.getElementById("myVideo").width=570}

// Прави видеото голямо
function makeBig() {document.getElementById("myVideo").width+=50}

// Плъзгача (slider) в поръчките
function outputUpdate(qty) {document.querySelector('#q').value = qty}

//Скрива дадени елементи
function hide(element) {document.getElementById(element).style.display = "none"}

//Отваря голямо изображение
function showImage(productName, img, price) {
	document.getElementById("bigImage").style.visibility = "visible";
	document.getElementById("bigImage").style.opacity = "1";
	document.getElementById("fade").style.visibility = "visible";
	document.getElementById("fade").style.opacity = "0.7";
	document.getElementById("bigImage").innerHTML = "<center><h3>"+productName+"</h3><img style='border-top: 2px solid #009900; border-bottom: 2px solid #009900' width='100%' src='"+img+"'><div style='position: absolute; top: 15px; right: 10px; text-align: left'>"+price+"</div><br><button onClick='closeImage()'>Затвори</button></center>";
}

//Затваря голямото изображение
function closeImage() {
	document.getElementById("bigImage").style.visibility = "hidden";
	document.getElementById("bigImage").style.opacity = "0";
	document.getElementById("fade").style.visibility = "hidden";
	document.getElementById("fade").style.opacity = "0";
}

//Филтър за продуктите
function filter(selectedProduct) {
	var allProducts = document.getElementById("products").getElementsByTagName("div");
	
	if(selectedProduct == "all"){
		for(var i = 0; i< allProducts.length; i++){
			allProducts[i].style.display = "block";
		}
	} else {
		for(var i = 0; i< allProducts.length; i++){
			allProducts[i].style.display = "none";
		}
	}
	
	var divsByClass = document.getElementsByClassName(selectedProduct);
	if(divsByClass.length==0 && selectedProduct!="all") {
		document.getElementById("noFoundItem").style.display = "block";
		document.getElementById("searchProduct").innerHTML = document.getElementById("selectFilter").options.namedItem(selectedProduct).text.toLowerCase();
	} else {
		document.getElementById("noFoundItem").style.display = "none";
		for(var i = 0; i < divsByClass.length; i++){
			divsByClass[i].style.display = "block";
		}
	}
	
	document.getElementById("section").style.height = ""; //премахваме зададената височина на section, за да се преоразмери колкото съдържание има
	equalHeight(); //преоразмеряваме отново :P
}

function checkForPromo(){
	var allProducts = document.getElementById("products").getElementsByTagName("div");
	for (var i = 0; i < allProducts.length; i++){
		var cena = parseInt(allProducts[i].childNodes[5].innerHTML);
		allProducts[i].childNodes[5].innerHTML = "<strong>Цена:</strong> <em>" + cena + "лв</em>"; // пишем цената на продукта
		if(allProducts[i].childNodes.length == 9){ // ако има отстъпка
			var otstupka = parseInt(allProducts[i].childNodes[7].innerHTML);
			var info = allProducts[i].childNodes[5].innerHTML;
			allProducts[i].childNodes[5].innerHTML = "<del>" + info + "</del><br><strong style='color: red'>Цена: <em>" + (cena+cena*(otstupka/100)) + "лв</em></strong>";
		}
	}
}

//Количка 
var totalPrice = 0;
var boughtProducts = "";

function showCart(){document.getElementById("cart").style.display = "block"}

function cartEmpty() {
	totalPrice = 0;
	boughtProducts = "";
	document.getElementById("cartTotalPrice").innerHTML = "";
	document.getElementById("cartProducts").innerHTML = "";
}

function buy() {
	//правя го да се предава чрез линка, защото ще отваряме сайта локално, а някои браузъри не поддържат бисквитките локално
	if( !(document.getElementById("cartProducts").innerHTML == "") )
		parent.location="orders.html#"+boughtProducts;
	else alert("Количката е празна. Напълнете я с продукти.");
}

function allowDrop(ev) {ev.preventDefault()}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
	showCart();
}

function drop(ev) {
    ev.preventDefault();
    var product = ev.dataTransfer.getData("text");
	var productName = document.getElementById(product).childNodes[1].innerHTML;
	
	var productPiceText = document.getElementById(product).childNodes[5].innerHTML.split("<em>"); // взимаме цената като текст	
	if(productPiceText.length == 3) { // ако има отстъпка
		var productPice = parseInt(productPiceText[2].split("лв")[0]); // сплитваме за да вземем само цената
	} else { // ако няма отстъпка
		var productPice = parseInt(productPiceText[1].split("лв")[0]); // / сплитваме за да вземем само цената
	}
	
	var quantity = prompt("Количество:");
	if(quantity <= 0 || isNaN(quantity)) alert("Въведете реално количество"); //Валидация на количеството
	else {
		totalPrice += productPice*quantity;
		boughtProducts += productName + "," + quantity + "," + productPice + ";"; // записваме всичката информация, за да я предадем в страницата за поръчка
		document.getElementById("cartProducts").innerHTML += "<strong>" + productName + ":</strong> " + quantity + " бр. [<em>" + productPice + "лв</em>] = <strong>" + productPice*quantity + "лв</strong><br>";
		document.getElementById("cartTotalPrice").innerHTML = "<strong>Общо:</strong> " + totalPrice + "лв";
	}
}

//Валидиране на формата за поръчки
var isCorrect = [true, true];

function validation() {
	if( !isCorrect[0] && !isCorrect[1] ) alert("Моля въведете името си на кирилица, телефонният номер, който сте въвели също е невалиден!");
	else {
		if( !isCorrect[0] ) alert("Моля въвете името си на кирилица!");
		if( !isCorrect[1] ) alert("Моля въвете валиден телефоненн номер!");
	}
	
	if( !isCorrect[0] || !isCorrect[1] ) {
		return false;
	}
	else {
		alert("Вашата поръчка е успешна. Очаквайте обаждане по телефона от наш служител, за да подтвърдите поръчката.");
		return true;
	}
}

function momentValidation() {
	var name = document.form.name.value;
	var tel = document.form.tel.value;
	
	for (var i = 0; i < name.length; i++) {
		if ( !((name[i]>='А' && name[i]<='я') || name[i] == ' ' ) ) {
			isCorrect[0] = false;
			document.form.name.style.background="red";
		} else {
			isCorrect[0] = true;
			document.form.name.style.background="white";
		}
	}
	
	for (var i = 0; i < tel.length; i++) {
		if( !(tel[i] >= '0' && tel[i] <='9') || !(tel.length==10) ) {
			isCorrect[1] = false;
			document.form.tel.style.background="red";
		} else {
			isCorrect[1] = true;
			document.form.tel.style.background="white";
		}
	}
}