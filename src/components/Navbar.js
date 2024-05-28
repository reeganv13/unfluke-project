import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="logo512.png" alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="/">LeaderBoard</a></li>
                <li><a href="/">Historical Trading</a></li>
                <li><a href="/">Historical Chart</a></li>
                <li><a href="/">Scanners</a></li>
                <li><a href="/">Alerts</a></li>
                <li><a href="/">Basic Backtest</a></li>
                <li><a href="/">Advanced Backtest</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">My Earnings</a></li>
            </ul>
            <div className="navbar-actio">
            <img className='navbar-action' src="bell-icon.png" alt="Logo" width={30}/>
            <img className='navbar-action' src="coin.jpeg" alt="Logo" width={30} />
            <img src="monkey.jpg" alt="Logo" width={30} />
                
            </div>
        </nav>
    );
};

export default Navbar;
