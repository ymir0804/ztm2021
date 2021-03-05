import React from 'react';
// child들 끼리 통신을 할때 이용하는것이 state
// state는 props와 달리 변경 가능 
// Props are simply things that come out of "state"
// 


const SearchBox = ({searchfield, searchChange }) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robots'
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;