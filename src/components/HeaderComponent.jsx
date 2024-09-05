import { useContext } from "react";
import { ThemeContext } from "../assets/programs/context";

const HeaderComponent = () => {
    const { colorScheme, setColorScheme } = useContext(ThemeContext);

    const toggleDarkMode = () => {
        setColorScheme(!colorScheme);
    }

    const theme = {
        backgroundColor: colorScheme ? 'black' : 'white',
        color: colorScheme ? 'white' : 'black'
    }

    return (
        <header className="header" style={ theme }>
            헤더
            {
                colorScheme ? (
                    <button className="toggleBtn" onClick={ toggleDarkMode }>🌟</button>
                ) : (
                    <button className="toggleBtn" onClick={ toggleDarkMode }>❤️</button>
                )
            }
        </header>
    );
};

export default HeaderComponent;