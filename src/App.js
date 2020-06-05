import React, {useContext, useState} from 'react';
import './App.css';

//ThemeContext at App level
const ThemeContext = React.createContext('light');

function App() {
    const [theme, setTheme] = useState('light');

    //Theme toggler
    function toggleTheme() {
        if(theme === 'dark') setTheme('light');
        else setTheme('dark');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`${theme} page-container`}>
                <div id="theme-toggler" onClick={toggleTheme}>
                    <i className="fa-3x far fa-lightbulb"></i>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
