import React, {useState} from 'react';
import './App.css';
import QuestionAndAnswer from "./components/QuestionAndAnswer";

//ThemeContext at App level
const ThemeContext = React.createContext('light');

function App() {
    const [theme, setTheme] = useState('light');

    //Theme toggle
    function toggleTheme() {
        let root = document.documentElement;
        if (theme === 'light') {
            setTheme('dark');
            root.style.setProperty('--primary-color', 'black');
            root.style.setProperty('--secondary-color', 'white');
        } else {
            root.style.setProperty('--primary-color', 'white');
            root.style.setProperty('--secondary-color', 'black');
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
                    <i className="fa-lg far fa-lightbulb"></i>
                </div>
                <QuestionAndAnswer text={'What is your name?'}/>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
