import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <h1>Education</h1>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>

                        <select name="lang" id="lang-select">
                            <option value="uz">Uzbek</option>
                            <option value="ru">Russ</option>
                            <option value="en">Eng</option>
                        </select>
                    </ul>

                    <button>Singin</button>
                    <br />
                    <button>Sing Up</button>
                </div>
            </div>
        </header>
    );
};

export default Header;