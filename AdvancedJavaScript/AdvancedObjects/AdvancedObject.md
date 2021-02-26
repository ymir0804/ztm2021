Advanced Javascipt
==================
<hr/>

## Advanced Objects
- reference type
  + example
    ```javascript
    [] === [];  // false
    let obj1 = {value : 10};
    let obj2 = obj1;
    let obj3 = {value : 10};
    obj1 === obj2 // true
    obj1 === obj3 // false
    // 예시에서 obj2는 obj1의 주소를 가르키고 있음
    // obj3는 새로운 객체를 생성했기 때문에 false가 출력 되는 것
    ```
  + 특징
    - non-primitive type
      + not defined by the programming languages(created by the programmer)
- context
  + example
    ```javascript
    console.log(this); // 출력시 window
    ```
  + 정의
    * where we are within the object
    * object에서 사용하는 scope?? 

  
- instantiation
  + exmaple
  ```javascript
  class Player {
    constructor(name, type) {
       this.name = name;
       this.type = type;
       }
    introduce() {
        console.log(` Hello {$this.name} {this.type}`)
       }     
    }
  class Wizzard extends Player {
    constructor(name, type) {
        super(name, type)  
    }  
  }
  // this를 사용하는 이유는 해당 property에 접근을 하기 위해 사용     
  ```
  + 설명
    * 일반적으로 객체지향 프로그래밍 언어에서 사용하는 class느낌
 
- PassByValue vs PassByReference
 + PassByValue
    - primitive type에 해당
    ```javascript
      let a = 5;
      let b = a;
      b++;
      console.log(a); // 5
      console/log(b); // 6
    ```
    - 이와 같이 원시타입은 value를 전달함
  

  + PassByReference
    ```javascript
    let obj1 = {name: 'Yao', password : '123'};
    let obj2 = obj1; // 실질적으로 obj1이 아닌 '객체의 주소가 들어가는 것'
    obj2.password = 'easy';
    console.log(obj1.password) // easy
    console.log(obj1.password) // easy
    //
    ```
    - 객체는 primitive type과 다르게 메모리의 주소를 저장
    - 그래서 해당 값을 변경하게 되면 가르키는 곳의 값이 바뀌므로 둘다 적용
    - 장점
        + 하나의 객체로 공간과 메모리를 절약할 수 있기 때문
    - 단점
        + 객체 수정시 원본을 수정하는 경우가 발생 할 수 있음
    - 헤결 방법
        ```javascript
        // 배열인 경우
        var c = [1, 2, 3, 4, 5];
        var d = [].concat(c);
        // 빈 배열에 concat메소드를 이용하여 값을 복사 한 후 사용
      
        // 객체인 경우 swallow copy(first level만 복사)
        let obj = {a: 'a', b:'b', c:'c'};
        let clone = Object.assign({}, obj) // 첫번쨰 파라미터로 빈 배열, 두번쨰 파라미터로 master 배열
        let clone2 = {...obj};
        // 객체 안에 객체가 있는 경우 depp copy
        let obj2 = {
            a : 'a',
            b : 'b',
            c : {
                deep : 'try and copy me'
             }     
         };
        let superClone = JSON.parse(JSON.stringify(obj));
        // 단점은 객체의 크기가 큰 경우 성능 저하 발생
        ```
- type Coercion (참고용)
  - example
    ```javascript
    1 == '1' // true (integer == string)
    ```
  - 설명
    + 자료형이 다른 값 비교연산시 왼쪽부터 오른쪽 비교하게 되는데 이때 그 중 하나의 자료형으로 변환 한 뒤에 값을 비교
    + 모든 자료형이 다 있지만, JavaScript가 유독 좀 심함
    + 이런 문제를 해결하기 위해 === 연산자를 사용 === 연산자는 Value를 비교하기 때문
    + 비교방법중에 Object.is 라는 메소드도 있음
      * +0, -0 을 비교할 떄 이용