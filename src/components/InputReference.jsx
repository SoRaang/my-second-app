import { useRef, useState } from "react";

const InputReference = () => {
    const [userText, setUserText] = useState('');
    const inputRef = useRef();

    return (
        <div>
            <h1>입력한 단어: { userText }</h1>

            <input type="text" ref={ inputRef } />
            <button onClick={() => setUserText(inputRef.current.value)}>입력 확인</button>
        </div>
    );
};

export default InputReference;