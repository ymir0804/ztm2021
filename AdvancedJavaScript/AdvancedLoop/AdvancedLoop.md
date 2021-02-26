Advanced Javascipt
==================
<hr/>

## AdvancedLoop

+ for of Loop
  ```javascript
     const basket = ['apple', 'orange', 'banana']   
     for(item of basket) {
      console.log(item)
     }
  ```
  - 배열이나, 문자열에서 반복(Iterating)을 할 때 사용 할 수 있는 문법
 
+ for in Loop
  ```javascript
    const example = {
    apple : 1 ,
    banana : 2,
    orange : 3
  }
  
  for (item in example) {
    console.log(item)
  }
  ```
  - 객체에서 사용하는 반복(enumerating)  