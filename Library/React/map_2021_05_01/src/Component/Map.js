import React from 'react';

const Props = ({ amount }) => {
    const array = new Array(amount);
    for (let i = 0; i < amount; i++) {
        array[i] = i;
    }
    return (
        <>
            {
                array.map(
                    (index) => (
                        <h1>안녕하세요. 이 문장을 반복할게요. {index + 1}번 문장입니다.</h1>
                    )
                )
            }
        </>
    );
};

export default Props;