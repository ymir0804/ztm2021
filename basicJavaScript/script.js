// 요소를 선택해서 지정
let btn = document.getElementById("Enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");


function inputLength() {
    return input.value.length;
}

function CreateListElement() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if(inputLength() > 0) {
        CreateListElement();
    }
}

function addListAfterKeypress(event) {
        if(inputLength() > 0  && event.keyCode === 13) {
            CreateListElement();
        }
}



btn.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress)
