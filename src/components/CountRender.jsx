import { useEffect, useRef, useState } from "react";

const CountRender = () => {
    const [refreshed, setRefresh] = useState(0);
    const renderCount = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    }, [ refreshed ]);

    return (
        <div>
            <h1>카운트한 횟수: { refreshed }</h1>
            <h1>화면이 렌더링된 횟수: { renderCount.current }</h1>
            <button onClick={() => setRefresh(refreshed + 1)} ref={ inputRef }>화면 렌더</button> { /** ref 어트리뷰트를 이용해 DOM 요소에 접근한다. */ }
        </div>
    );
};

export default CountRender;