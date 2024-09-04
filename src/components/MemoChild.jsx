import { memo } from "react";

const MemoChild = (props) => {
    const { update } = props;

    console.log('Child 컴포넌트 업데이트');

    return (
        <div>

        </div>
    );
};

export default memo(MemoChild);