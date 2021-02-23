let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let rnum1 = document.querySelector(".random1");
let rnum2 = document.querySelector(".random2");
setGradient();
console.log(makeRandom());

// CSS설정을 JS로 하는 경우
function setGradient() {
    body.style.background =
        "linear-gradient(to right,"
        + color1.value
        + ", "
        + color2.value +
        ")";

    printGradient();
}

function printGradient() {
    css.textContent = body.style.background + ";";
}

function makeRandom() {
    let hexCode = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    return hexCode
}

function setRandom1() {
    color1.value = makeRandom();
}
function setRandom2() {
    color2.value = makeRandom();
}

// JS로 addEventListener를 하는 방식이 있고, html에서 oninput속성을 이용하여 함수를 실행하는 경우가 있음 단점은 하나의 함수밖에 추가를 못함
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
rnum1.addEventListener("click", setRandom1);
rnum2.addEventListener("click", setRandom2);