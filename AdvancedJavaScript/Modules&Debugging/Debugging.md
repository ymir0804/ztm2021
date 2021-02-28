Advanced Javascipt
==================
<hr/>

## Debugging & How Does JavaScript work
+ 디버깅은 프로그램이 왜 작동 안하는지 확인하는 작업
  - 디버깅 팁
    + 변수를 명확히 
    + 결과를 출력해 나가면서 확인
    + debugger 키워드를 사용
      - 프로그램이 중단 되고 옆에 작동되는 것을 확인 할 수 있음
      - stepover 버튼을 눌러서 확인
  - 함수들의 작동원리를 파악할 수 있음  

+ 자바스크립트 작동원리
  - asynchronous vs synchronous
    + 자바스크립트는 싱글 쓰레드 언어고 non-blocking
    + synchronus는 선생님한테 질문할 때 선생님이 핸드폰으로 답장 할 때 까지 기다림
    + asynchronous는 문자로 선생님한테 질문 한 다음에 내 차례가 되었을 때 답장
  - 프로그램의 정의
    + allocate memeory
    + parse and execute(read & run command)
  - 작동원리
    + 자바스크립트를 수행하는 엔진은 Memoery Heap과 Call Stack으로 구성
      * Memory Heap
        + 메모리 할당이 일어나는 공간 Ex) 변수할당
        + 글로벌 변수를 많이 선언하면 메모리 힙을 많이 차지하므로 비추천
      * Call Stack
        + 코드를 읽고 수행하는 공간
        + 코드하나를 읽고 Call Stack에 넣고 수행 한 뒤 Call Stack에서 제거
        + 함수안에 함수가 있는 경우 작동 원리
            - 외부함수를 먼저 수행 후 Call Stack에 들어감 내부함수가 또 Call Stack에 들어감
            - 안에 있는 수행 코드가 Call Stack으로 들어감 (LIFO 방식)
      * 싱글쓰레드는 하나의 메모리힙과 Call Stack밖에 없음
    
    - 비동기 프로그래밍(자바스크립트가 아닌 webAPI에서 제공)
        + setTimeOut 메소드 이용
          * 첫번째 매개변수는 함수, 두번째 매개변수는 시간
        + 작동원리
          * 첫번째 수행 코드가 Call Stack에 들어가고 수행 하고 Call Stack으로 나감
          * setTimeOut메소드를 사용하는 경우 Call Stack에 들어가고 webAPI로 옮겨짐 
          * Call Stack이 비어있으므로 다른 코드를 실행 할 수 있음
          * setTimeOut시간이 지나면 CALLBACK QUEUE로 옮겨짐 
          * eventLoop는 callStack이 비어있는지 확인 후 비어있으면 callBack Queue에 있는 코드를 Call Stack으로 보냄
          * callBack메소드와 수행코드를 Call Stack으로 보냄
          * 수행코드를 수행하고 callBack 메소드를 수행하면 Call Stack이 비어있음
  -   