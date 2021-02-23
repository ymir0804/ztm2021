Advanced Javascipt
===================
<hr/>

# 1. Scope

* 기본적으로 자바스크립트는 root scope에 있고 windows 객체안의 있음
* 우리가 브라우저를 실행하면 root scope에 있음
    + example
```javascript
    function bb() {
        let a = "Hello";
        console.log(a); // print Hello 
    }
    console.log(a); // error occur because 'a' only lives within function bb scope
```
* 함수를 생성하면 각 함수들은 각각의 scope를 가지고 root scope에서 선언된 변수(전역변수)는 child scope들이 접근 가능
    + example
```javascript
    let fun = 5;
    function fun1Function() {
        let fun = 'Hello'; 
        console.log(1, fun);
        // childscope에서 변수를 다시 선언했기때문에 앞에 fun에 접근
        // 이런경우 naming conflict발생 root의 fun변수를 접근 할 수 없음
    }

    function fun2Function() {
        let fun = 'byee';
        console.log(2, bye);
        // childscope에서 변수를 다시 선언했기때문에 앞에 fun에 접근
    }
    
    function fun3Function() {
        fun = "Ahhhhh";
        console.log(3, fun);
        // root scope에 있는 fun에 접근해서 수정
    }
    console.log("window",fun);
```
* childScope에서 사용하는 변수들은 1차적으로 childScope에서 찾고 없으면 그 위에 있는 Parent Scope로 접근해서 해당 변수가 존재하는지 찾음
