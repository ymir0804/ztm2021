Advanced Javascipt
==================
<hr/>

## AdvancedArrays
- how the foreach works
    + example
    ```javascript
    const array = [1, 2, 10 ,16];
    const double = [];
    const newArray = array.forEach((num) => {
        double.push(num * 2);
        // 각 항목에 대해 * 2 수행
        // 해당 배열에 push메소드를 이용해야 정상적으로 값이 들어감
    })
    ```
- map
    + example
    ```javascript
    const mapArray = array.map(num) => {
        return num * 2;
    }
    // 항상 return 값이 있어야함
    ```
   + 작동과정
     * array안에 있는 element들이 map 메소드 안으로 들어가고 그 안에서 코드 수행 후 return
   + foreach 와 map의 차이
     * foreach는 array안에 있는 요소들을 반복 return도 없음
     * map은 반복을 수행 가능하고 저장 가능 & return 가능
     * foreach같은 경우에는 sideEffect가 발생
    
- filter
  + example
   ```javascript
     const filterArray = array.filter(num => return num > 5);
   ```
  + 작동과정
    * array안에 있는 element를 하나 씩 filter 메소드에 다 넣은 후 조건에 해당 하는 결과 값을 리턴
 
- reduce
  + example
  ```javascript
    const reduceArray = array.reduce((accumulator, num) => {
        return accumulator * num
    }, 0)
    // 두번째 파라미터는 누적 초기값을 의미  
  ```  
  +