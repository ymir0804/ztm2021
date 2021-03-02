React
===================
<hr/>

## 1. Introduction To React.js
+ the idea of thinking and components
    - 리액트는 웹사이트를 구성할 때 작은 컴포넌트들로 이루어져 있음
    - atom -> molecules -> organisms -> templates -> pages
    - 컴포넌트를 만들어 놓고 그냥 다운로드 받아서 사용하면 끝 (용이함)
+ the idea of one way dataflow
    - top to bottom style
    - tree구조로 예를들어 설명하면 child의 컴포넌트를 변경한 경우 부모랑은 관련이 없음
+ the idea of virtual DOM (Very Important !!)
    - Virtual DOM은 JS Object중 하나이고 ReactDOM이라 불림
    - 현재 웹 사이트의 상태를 나타내는 객체

## 2.React 개발환경 구성
+ 프로젝트 생성
    - npm install -g create-react-app 명령어를 이용하여 개발환경 설치
    - create-react-app 프로젝트 명 명령어를 이용하여 프로젝트 생성

+ 프로젝트 구성
    - package.json 파일
        + scripts 키 안에 react 명령어가 설정되어있음
        + webPack과 Bable을 설치를 대체하는 것들이 있음
        + eject를 이용하여 환경설정 조정 가능
    - .gitignore
        + 깃허브에 프로젝트 업로드 할때 원하지 않는 파일이 있는 경우 업로드를 안하겠다는 설정 파일
    - public
        + 웹사이트에 대한 아이콘, 바로가기가 있는 폴더
    - src
        + 웹사이트를 구성하는 소스파일들이 모여있는 폴더
        + index.js가 메인 js파일
    - index.js
        + WebPack을 지원하기 때문에 import 문 사용
        + React가 메인이고 웹페이지를 사용하는 경우 ReactDOM    
            
