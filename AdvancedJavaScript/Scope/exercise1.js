
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
 // 3을 출력

//#2
var a = 0;
function q2() {
    a = 5;
}
// 해당 함수 수행시 root scope에 있는 a가 5로 바뀜

function q22() {
    alert(a);
}
// 해당 함수 수행시 root scope에 선언된 a의 값을 출력

//#3
function q3() {
    window.a = "hello";
}
// 변수선언을 아직 안했음 한 경우 에는 root scope에 있는 a의 값이 Hello으로 바뀜

function q32() {
    alert(a);
}
// q3()을 수행하고 q32()를 수행 하면 "Hello"를 출력

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// test를 출력

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// 5출력하고
// 5출력