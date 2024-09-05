import { useContext, useState } from 'react';
import { ThemeContext } from '../assets/programs/context';

import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import FooterComponent from "./FooterComponent";

const HomeComponent = () => {
    const [colorScheme, setColorScheme] = useState(false);
    const data = useContext(ThemeContext);

    return (
        <div className="container">
            <ThemeContext.Provider value={{ colorScheme, setColorScheme }}>
                <HeaderComponent />
                <MainComponent />
                <FooterComponent />
            </ThemeContext.Provider>
        </div>
    );
};

export default HomeComponent;