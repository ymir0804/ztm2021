Advanced Javascipt
==================
<hr/>

## Advanced Function
+ Example
    - Modern JS
    ```javascript
    function first() {
      var greet = 'Hi'
      function second() {
        alert(greet);
      }
      return second;
    }
    ```
   - ES6
    ```javascript
    const first = () => {
        const greet = 'hi';
        const second = () {
            alert(greet);
        }
        return second; 
    }
    const newFunc = first();
    ```
    - 예시들을 비교해보면 훨씬 더 깔끔 하고 변수 충돌이 발생하지 않음
+ Closures
  - 역할
    + child scope always has access to the parent scope
    + 위에 예시에서 return second를 해서 newFunc함수를 수행하게되면 second에 greet이 있지않는데 부모 scope에 접근해서 해당 변수를 찾은 후 리턴
    + a function ran. the function executed. It's never going to execute again. BUT It's going remeber that there are references to those variables
    + so the child scope always has access to the parent scope.
    + 역은 성립하지 않음 (Parent Scope가 Child Scope를 참조하는 경우)

+ Currying
  - 정의
    + the process of converting a function that takes multiple arguments into a function that takes one at a time
  - Example
    ```javascript
       const multiply = (a, b) => a * b;
       const curriedMultiply = (a) = (b) => a * b;
       curriedMultiply(a)(b);
       // 해당 방식으로 인자를 넣으면 됨     
    ```
  - 사용시 장점
    ```javascript
       const curriedMultiply5 = curriedMultiply(5);
       curriedMultiply5(n);
       // 이런식으로 n * 5를 수행 가능
    ```
+ Compose
  - 정의
    + the Act of putting two functions together to form a third function where the output of one function is the input of the other
    + 합성함수의 개념과 매우 비슷함  
  - Example
    ```javascript
      const compose = (f, g) => (a) => f(g(a));
      const sum = (num) => num + 1;
      compose(sum, sum)(5) // result 7
    ```  
 + A most important thing when creating code
   -  avoiding side effects
     * 함수 사용 시 해당 범위를 벗어난 것을 다룰 때 발생
     * something that the functions doing to affect the outside world.
   -  functional purity
    * always return value
    * the input, whatever we put in the parameters. whether it's empty or it has certain parameters, it always returns
   