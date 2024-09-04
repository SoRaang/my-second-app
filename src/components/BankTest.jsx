import { useReducer, useRef } from "react";
import bankOrder from "../assets/programs/bankOrder";

const BankTest = () => {
    const [state, dispatch] = useReducer(bankOrder, 0);
    const inputRef = useRef();

    function postIt(type) {
        dispatch({ type: type, amount: inputRef.current.value });
    }

    return (
        <div>
            <p>금액을 입력하세요.</p>
            <input type="number" min="0" step="1000" ref={ inputRef } />

            <p>입금 또는 출금 버튼을 클릭하세요.</p>
            <button onClick={() => { postIt('in') }}>입금</button>
            <button onClick={() => { postIt('out') }}>출금</button>

            <h3>현재 잔액 : { state }</h3>
        </div>
    );
};

export default BankTest;