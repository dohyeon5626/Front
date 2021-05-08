import { useHistory } from 'react-router-dom';
import React from 'react';

const Main = ({ func }) => {
    const inputValue = React.createRef();
    const history = useHistory();
    const change = () => {
        func(inputValue.current.value == '' ? "관리자" : inputValue.current.value);
        history.push('/hello');
    }
    return (
        <>
            <p>자신의 이름을 입력해서 페이지를 이동해보자</p>
            <input type="text" ref={inputValue} />
            <button onClick={change}>페이지 이동</button>
        </>
    )
}

export default Main;