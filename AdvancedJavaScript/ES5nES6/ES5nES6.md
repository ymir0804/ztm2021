Advanced Javascipt
==================
<hr/>

## ES5 & ES6
+ 자바스크립트는 Netscape browser에 의하여 만들어졌고 다른 브라우저도 자바스크립트를 사용하기 시작
+ Nestcape는 ECMA international에 JavaScript를 제출하고 표준화를 했는데 그 표준화한 자바스크립트르 ECMAScript라고 함
    - ESx는 ECMAScriptx를 의미
+ babel이라는 사이트가 있는데 이 사이트는 ECMAScript표준에 맞춘 코드를 작성 한 것을 모든 브라우저에서 지원되게 JavaScript 스타일로 바꾸즈는 역할을 함

## ES6의 특징
+ let & const
  - example
    ```javascript
        let a = false;
        if(true) {
            let a = true;
            console.log(a); // true
        }
        console.log(a); // false
    ```         
  + 해당 예시를 var로 바꾸면 같은 함수안에 있기 때문에 true, true 출력
  + 이러한 문제가 발생하기 때문에 더이상 var은 사용하지 않음
  + const키워드는 해당 키워드로 변수를 선언하면 재할당이 불가능 (상수)
    - 해당 변수를 모르고 조작하여 발생하는 문제를 해열해줌
    - 함수를 const 변수에다가 넣는 것을 권장 
    - const 키워드로 객체를 할당하는 경우 안에 속성은 변경 가능
+ Destructuring
  - example
    ```javascript
    const obj = {
        player : 'bobby',
        experience : 100,
        wizzardLevel : false
    }
    const player = obj.player;
    const exp = obj.experience;
    // 이러한 중복을
    const {player , experience} = obj;
    // 이렇게 간편하게 설정 가능
    ```
+ Object Properties
    - example
    ```javascript
    const name = 'john snow';
    const obj = {
        [name] : 'hello',
        [1 + 2]: ' bye'
    }
    // key와 value가 같은 경우
    const test = {a, ,b ,c} // 이렇게 설정하면 a:a, b:b, c:c 와 동일
    ```
    - 변수로 key값을 지정 가능
+ template strings
  - example
    ```javascript
    const tstringsExample = (backquota)Hello + ${var} + test + ${var1}(backquota)
    ```
   - 복잡한 + 연산 없이 문자열을 쉽게 다룰 수 있고 변수를 참조하여 사용 가능

+ default arguments
  - example
  ```javascript
    function greet(name='', age=30, pet='cat') {
        return (backquota)default arguments + ${name} + ${age} ${pet}(backquota)
    }
    greet(); // 수행시 '',30,cat의 값이 들어가고 값을 지정한 경우에는 남아있음
    ```
  - 기본적으로 값이 지정되어있지 않아도 함수에서 지정한 값이 자동으로 들어감

+ symbol type
  - example
    ```javascript
    let sym1 = Symbol(1);
    let sym2 = Symbol(2);
    sym1 === sym2 // false
    ```
  - symbol타입은 그 자체로 고유한 타입
  - 객체 속성을 만들 수 있는 원시 데이터 형식
    
+ arrow functions
  - example
  ```javascript
  // legacy function
    function add(a ,b) {
      return a + b;
    }
  // ES6Script
    const add = (a, b) => a + b;
  // 원래는 중괄호에 return 을 넣어 반환값을 지정하지만, return 이 한번인 경우에는 다음과 같이 생략 가능
  ```  