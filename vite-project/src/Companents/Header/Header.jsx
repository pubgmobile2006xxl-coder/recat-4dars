import React from 'react';
// import { useTranslation } from 'react-i18next'; 
import { useTranslation } from 'react'
import "./Header.css";

const Header = () => {
    //   const { t,i18n } = useTranslation(); 

    const handleChangeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

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

                        <select name="" id="" onChange={handleChangeLanguage}>
                            <option value="uz">Uzbek</option>
                            <option value="ru">Russ</option>
                            <option value="en">Eng</option>
                        </select>
                    </ul>

                    <div className="btn">
                        <button>Singin</button>
                        <button className='bn'>Sing Up</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;