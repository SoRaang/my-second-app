import { useEffect, useRef, useState } from "react";

const AddThings = () => {
    const [valueList, setValueList] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [num, addNum] = useState(0);

    // --- useEffect() 사용 예시

    const addNewValue = () => {
        setValueList((prevState) => [ ...prevState, newItem ]);
    }

    useEffect(() => {
        console.log(`출력 완료: ${ valueList }`);
    }, [valueList]); // 의존성 배열에 있는 valueList가 변경되는 것을 감시하여 그 때만 실행된다.

    const increment = () => {
        console.log('업데이트 전: ', num);
        addNum(num + 1);
        console.log('가짜 업데이트 후: ', num); // useState는 비동기식으로 작동하기 때문에 이런 식으로 업데이트 이후의 값을 알 수는 없다.
    }

    useEffect(() => {
        console.log('실제 업데이트 후: ', num);
    }, [num]);

    // --- useRef() 활용 예시

    const ref = useRef('안녕하세요');
    console.log('변경 전의 ref 값: ', ref.current);

    ref.current = 'Hello!';
    console.log('변경 후의 ref 값: ', ref.current);

    const addingRef = useRef(0);

    const addRef = () => {
        addingRef.current = addingRef.current + 1;
        console.log(addingRef.current);
    }

    // --- 일반 변수 사용시

    let simpleVar = 0;

    const addLet = () => {
        simpleVar ++;
        console.log(simpleVar); // 변할 때마다 콘솔에 값이 출력되기는 하지만, 화면 렌더링을 거치면 초기화가 된다.
    }

    return (
        <div>
            <input type="text" onChange={(e) => setNewItem(e.target.value)} placeholder="내용 입력..." />
            <button onClick={ addNewValue }>입력</button>

            <ul>
                { valueList.map((item, index) => ( <li key={ index }>{ item }</li> )) }
            </ul>

            <p>state: { num }</p>
            <button onClick={ increment }>state +</button>

            <p>ref: { addingRef.current }</p>
            <button onClick={ addRef }>ref +</button>

            <p>let: { simpleVar }</p>
            <button onClick={ addLet }>let 변수 +</button>
        </div>
    );
};

export default AddThings;