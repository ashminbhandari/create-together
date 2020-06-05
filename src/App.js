import React, {useContext, useState} from 'react';
import './App.css';
import { createGlobalStyle } from "styled-components";

//ThemeContext at App level
const ThemeContext = React.createContext('light');

function App() {
    const [theme, setTheme] = useState('light');

    //Theme toggle
    function toggleTheme() {
       if(theme === 'light'){
           setTheme('dark');
           let root = document.documentElement;
           console.log(root.style);
       }
       else {
           setTheme('light');
       }
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`${theme} page-container`}>
                <div id="stars-container">
                    <div id="stars"/>
                    <div id="stars2"/>
                    <div id="stars3"/>
                </div>
                <div id="theme-toggler" onClick={toggleTheme}>
                    <i className="fa-3x far fa-lightbulb"></i>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
