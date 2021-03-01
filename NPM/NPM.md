NPM
===================
<hr/>

## 1. Introduction
+ 개요
    - 사용하게된 이유는 자바스크립트 코드를 공유하기 위해 사용하기 시작
    - package.json파일과 js파일로 구성되어있음
+ 장점
    - js파일의 최소화


## 2. 설치 및 상세한 개념
+ Local 설치 vs Global 설치
    - Global 설치
        + -g 옵션을 이용하여 설치
        + 터미널에서 수행 가능
    - Local 설치
        + JS파일 안에서만 사용 가능
+ live-server
    - 임시 웹서버 기능 지원
    - 변경사항이 있는 경우 로그에 남아 있음
+ lodash
    - 자바스크립트의 확장 같은 느낌
    - 라이브러리가 담겨있는 JS파일
    - 사용방법
        * browserify main.js > target.js
        * main.js에다가는 해당코드를 추가해주어야함
        ```javascript
        let _ = require('loadsh');
        ```
        * 변경사항이 있는 경우 앞에 적어놓은 browserify 명령어를 사용해주어야함
+ 주요 기능 및 특징
    - local로 설치하게되면 npm init을 한 프로젝트 폴더에 dependencies에 local로 설치한 기능이 추가
    - dependencies의 뜻은 그 안에 들어가있는 모듈이 있어야 웹사이트가 정상작동 한다는 뜻
    - npm을 이용하려면 browserify 이상의 모듈화 기능(?)이 필요함
    - package.json 파일에 dependencies에 다가 이용할 모듈이름만 추가하면 이용 가능
    - npm install 명령어를 이용하면 dependencies에 있는 모듈들을 자동으로 설치
    - scripts key안에다가 명령어를 추가 할 수 있음
    - 
+ 사용시 주의 사항
    - npm사용시 해당 모듈에 모든 JS파일을 가져오기 때문에 용량 문제가 발생
