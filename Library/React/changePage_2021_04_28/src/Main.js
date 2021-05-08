import { useHistory } from 'react-router-dom';

const Main = () => {
    const history = useHistory();
    return (
        <button onClick={() => { history.push('/hello') }}>페이지 이동</button>
    )
}

export default Main;