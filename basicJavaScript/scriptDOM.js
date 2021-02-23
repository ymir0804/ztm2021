var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementById("delete");
var doneToggle = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function deleteListElement() {
	var li = document.querySelectorAll("li");
	ul.removeChild(li[li.length - 1]);
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

doneToggle.addEventListener("click", )

deleteButton.addEventListener("click", deleteListElement);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);