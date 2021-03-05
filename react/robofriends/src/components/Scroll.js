// Scroll은 children으로 CardList를 가지고 있음
import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;