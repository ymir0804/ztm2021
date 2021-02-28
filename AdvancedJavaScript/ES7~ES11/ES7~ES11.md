Advanced Javascipt
==================
<hr/>

## ES7

+ include method
    - string이나 array에 이용하는 메소드
    - example
  ```javascript
    'Helllo'.includes('o'); // 해당 문자가 존재하는지 확인하는 메소드 있는경우 true반환 없는경우 false반환
    const pets = ['cat', 'dog', 'bat'];
    pets.includes('cat'); // true
  ```
  
+ exponential operator(지수연산자)
    - example
  ```javascript
    const square = (x) => x ** 2 
  ```
  
## ES8

+ string padding
  - padStart/padEnd
    * example
     ```javascript
      'Turtle'.padStart(10); // 해당 문자열을 포함해서 10칸 공백을 만듬 end는 반대
     ```
+ trailing commas
    * example
    ```javascript
    const fun = (a, b, c, d,) => {
        console.log(a); // a의 값만 출력
      }
    ```
    * 사용하는 이유
        - 매개변수를 많이 받는경우 a,b,c,d, 이렇게 쓰는 경우가 있는데 이런 경우 에러 발생을 줄이기 위해 있는 것
+ objects.values & object.entries
  - Array 자료형 에서는 map,filter,reduce 메소드를 사용하여 반복 하지만 객체에서는 쓸 수가 없었는데 이러한 점을 보완하기 위해 나온 메소드
  - keys메소드가 있지만 조금 불편한 점이 있음
  - example
    ```javascript
    let obj = {
        username0: 'Santa',
        username1: 'Rudolf',
        username2: 'Mr.Grinch'
    }
    Object.value(obj).forEach(value => {
        console.log(value); // santa, Rudolf, Mr.Grinch가 출력
    })
    
    Object.entries(obj).forEach(value => {
        console.log(value); // ["username0", "Santa"] key랑 value로 묶인 배열을 리턴
    })
    
    Object.entries(obj).map(value => {
        return value[1] + value[0].replace('username', '')
    }) // 실 사용 예시
    ```
## ES10
+ flat 메소드
  -  배열에서 사용하는 메소드
  -  example
  ```javascript
    const array = [1, [2, 3], [4, 5]];
    array.flat();
    const entries = ['bob', 'sally',,,,,, 'cindy']
    entries.flat(); // ['bob', 'sally', 'cindy']
  ```
  - 배열의 중첩을 없애주는 메소드 기본값으로 2중첩만 해제
  - 괄호안에 숫자를 넣어 중첩이 많이되어있는 배열들을 다 중첩을 없앰  
  - 배열을 정리해주는 기능도 있음  
  - flat map 메소드를 이용하면 배열의 요소들에다가 추가 하고 depth를 1로 바꾸어줌
 
+ trimStart, trimEnd
  - 앞, 뒤에서부터 공백 제거해주는 메소드
+ fromEntries
  ```javascript
    const userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['hansel', 18]]
    Object.fromEntries(userProfiles); // Object자료형으로 바꾸는 메소드
  ```
+ try~catch문

## ES11
+ BigInt
  - 자바스크립트의 새로운 자료형
  - 숫자옆에n을 붙여서 사용하는 자료형
  - 사용이유
    * MAX_SAFE_INTEGER정도의 값이 넘는 수를 계산하면 오차가 발생하는데 이런 문제를 해결하기 위해 사용 

+ Nullish coalescing Operation
  - || 연산자와 비슷하지만 연산 작동이 다름
  - example 
  ```javascript
  // Optional Chaining Operation떄 썼던 예시를 이용
  let andrei_pokemon = {
        raichu: {
            species: 'Mouse Pokemon',
            height : 0.8,
            weight : 30,
            power : ' '
        }
   }
  let power = andrei_pokemon?.pikachu?.power || 'no power' // 공백이 출력되어야 하는데 'no power'가 출력 
  let power = andrei_pokemon?.pikachu?.power ?? 'no power' // 앞에 값이 null이나 undefined 인 경우 false를 리턴
  ```

+ Optional Chaining Operation
 - example
  ```javascript
    let andrei_pokemon = {
        raichu: {
            species: 'Mouse Pokemon',
            height : 0.8,
            weight : 30
        }
   }  
    if(andrei_pokemon.pikachu && andrei_pokemon.pikachu.weight) {
        let weight = andrei_pokemon.pikachu.weight
    } else {
        let weight  = undefined
    }
    
    let weight = andrei_pokemon?.pikachu?.weight
    //
    // 이런 장문의 if문을 짧게 만들수 있음
  ```