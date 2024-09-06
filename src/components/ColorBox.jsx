import { useContext } from "react";
import { ColorContext } from "../assets/programs/context";

const ColorBox = () => {
    const boxColor = useContext(ColorContext);

    const style = {
        width: '200px',
        height: '200px',
        backgroundColor: boxColor
    }

    return (
        <div style={ style }>
            컬러상자
        </div>
    );
};

export default ColorBox;