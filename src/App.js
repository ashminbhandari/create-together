import React, {useState} from 'react';
import './App.css';
import Draw from "./pages/Sketch";

//Contexts
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";

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
            <UserContext.Provider value={{
                name: '',
                game: ''
            }}>
                <div className={`${theme} page-container flex-column-center`}>
                    <div id="stars-container">
                        <div id="stars"/>
                        <div id="stars2"/>
                        <div id="stars3"/>
                    </div>
                    <div id="theme-toggler" onClick={toggleTheme}>
                        <i className="fa-lg far fa-lightbulb"></i>
                    </div>
                    <Draw/>
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
