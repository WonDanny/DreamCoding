import React from "react";

import './style/AppTheme.css';
import { AppCard } from './AppCard';

export const AppTheme = () => {

    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )
};



const Header = () => {
    return (
        <header className="header">header</header>       
    )
}

const Main = () => {
    return (
        <main className="main">
            <h1>Main</h1>
            <AppCard />
        </main>
    )
}

const Footer = () => {
    return (
        <footer className="footer">Footer</footer>       
    )
}