import { useCallback, useState } from "react";
import MemoChild from "./MemoChild";

const MemoAndCallBack = () => {
    const [count, setCount] = useState(0);

    const updateHandler = useCallback(() => {
        console.log('Update');
    }, []);

    return (
        <div>
            <input type="number" onChange={(e) => setCount(e.target.value)} />
            <MemoChild update={ updateHandler } />
        </div>
    );
};

export default MemoAndCallBack;