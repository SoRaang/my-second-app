import { useReducer } from "react";
import countReducer from "../assets/programs/countReducer";

const ReducerTest = () => {
    const [state, dispatch] = useReducer(countReducer, 0);

    function numUp() {
        dispatch({ type: 'increment' });
    }

    function numDown() {
        dispatch({ type: 'decrement' });
    }

    return (
        <div>
            <p>현재 카운터 값: { state }</p>

            <button onClick={ numUp }>reducer +</button>
            <button onClick={ numDown }>reducer -</button>
        </div>
    );
};

export default ReducerTest;