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
    - 메모사항
        + 태그로 이용할 JS파일을 생성 후 해당 파일명을 태그로 이용하여 출력
            * Ex) Hello.js인 경우 <Hello/>로 출력
            * 출력할 JS파일은 render함수를 이용하여 리턴 값으로 HTML태그를 리턴하여 화면에 표시
            * 이때 사용하는 HTML태그는 DOM이 아닌 ReactDom(JSX)        
        + 사용원리
            * Virtual DOM과 실제 DOM과 비교를 하면서 변경사항이 있는지 확인 후 출력
        + 태그 안에 property를 작성하고 출력하는법
            - 태그 안에다가 key = {value}를 넣고 해당 컴포넌트에다가 this.props.key를 넣으면 정상적으로 출력 가능
            
## 3. 리액트 심화
+ Mounting
    - 마운팅은 root의 컴포넌트를 변경하는 과정
    - 마운팅의 과정은 4가지로 이루어져있음
    - 컴포넌트에 Constructor()가 있는지 확인 후 있으면 수행 없으면 무시
    - 컴포넌트에 componentWillMount() 메소드가 있는지 확인
    - 컴포넌트에 render()메소드가 있는지 확인
    - 컴포넌트에 componentDidMount() 메소드가 있는지 확인 
+ Updating
    - 컴포넌트를 변경할 때 수행 
        + 예를들어 검색을 할때 창에다가 값을 넣는 것 
+ Unmounting
    - 컴포넌트가 페이지에서 제거 되었을 때 수행        