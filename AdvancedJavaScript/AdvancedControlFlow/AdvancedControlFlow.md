Advanced Javascipt
==================

# 2. Advanced Control Flow
* ternary operator (삼항연산자)
    - example
    ```javascript
    condition ? expr1 : expr2; // true인경우 expr1 false 인경우 expr2 리턴
    function isUserValid(bool) {
        return bool;
    }
    let answer = isUserValid(true) ? "You may Enter" : "Access Denied";  
    let automatedAnser = "Your account # is " + (isUserValid(false) ? "1234" : "not Available");  
    ```
    + 일반적으로 우리가 사용하는 함수와 비슷 하지만 함수로하면 길어지는 단점이 있음
    + 한줄로 짧게 표시할 때 유용

* Switch
    - example
    ```javascript
    function moveCommand(direction) {
        let whatHappens;
        switch(direction) {
            case "forward":
                whatHappens = "you encounter a monster";
                break; // break out of statment를 의미
            case "back":
                whatHappens = "you arrived home";
                break;
            case "right":
                whatHappens = "you run into a troll";
                break;
            case "left":
                whatHappens = "please enter a valid direction";
                break;
        }
        return whatHappends
  }              
    ```
    - 조건이 많은 경우 if else문보다 사용하기 용이함
    
    