import React from "react";

import './style/AppTheme.css';
import { AppCard } from './AppCard';
import { DarkModeContext, DarkModeProvider } from "../context/DarkModeContext";
import { useContext } from "react";

export const AppTheme = () => {
    
    return (
        <DarkModeProvider>
            <div className="container">
                <Header />
                <Main />
                <Footer />
            </div>
        </DarkModeProvider>
    )
};



const Header = () => {
    return (
        <header className="header">header</header>       
    )
}

const Main = () => {
    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

    return (
        <main className="main">
            <div className="mainContent">
                <div className="setDarkModeSection">
                    <p>DarkMode : <span>{darkMode.toString()}</span> </p>
                    <button onClick={() => toggleDarkMode()}>
                        다크모드 설정
                    </button>
                </div>
                <h1>Main</h1>
                <div style={{display: "flex"}}>
                    <AppCard darkMode={darkMode}/>
                </div>
            </div>
        </main>
    )
}

const Footer = () => {
    return (
        <footer className="footer">Footer</footer>       
    )
}