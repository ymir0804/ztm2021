import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css'
//Child는 SearchBox, CardList


class App extends Component {
    constructor() {
        super();
        // 해당 JS를 설명해주는 역할 
        this.state = {
            robots: [],
            searchfield: ''                
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})})
    }

    //Componet에 있는 onSearchChange 변경
    // 이벤트가 발생할 때마다 state의 searchfield값을 변경
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }
    // 화면을 출력할 때 사용하는 render함수
    render() {
        const { robots, searchfield } = this.state;
        // robot리스트 안에 searchBox의 있는 값을 포함하는지 검색
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
            return !robots.length ? 
            <h1>loading</h1> : 
            (
                // tc는 tachyon라이브러리를 이용
                // 하나의 값만 태그(?)값(?)만 출력 할 수 있기 때문에 div태그로 묶어서 리턴
                // SearchBox Component에는 인덱스에서 입력한 값이 들어감 Ex) abc
                // CardList Component에는 필터링된 로봇 리스트가 들어감 Ex) abc를 포함한 카드 출력
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
                </div>
            );   
    }
}

export default App;



//react lifecycle methods
// Mounting/ Updating/ Unmounting
// react는 Mounting에 해당