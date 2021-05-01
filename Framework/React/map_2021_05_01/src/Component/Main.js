import { useHistory } from 'react-router-dom';
import React from 'react';

const Main = ({ func }) => {
    const inputValue = React.createRef();
    const history = useHistory();
    const change = () => {
        func(inputValue.current.value);
        history.push('/hello');
    }
    return (
        <>
            <p>얼마나 반복하고 싶은지 입력하세요</p>
            <input type="number" min='0' ref={inputValue} />
            <button onClick={change}>반복 시작</button>
        </>
    )
}

export default Main;