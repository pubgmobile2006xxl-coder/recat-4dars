import React from 'react';
// import { useTranslation } from 'react-i18next'; 
import {useTranslation} from 'react'
import "./Header.css";

const Header = () => {
  const { t,i18n } = useTranslation(); 

  const handleChangeLanguage =(event)=>{
    i18n.changeLanguage(event.target.value)
  }

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <h1>Education</h1>

          <ul>
            <li><a href="#">{t('header.home')}</a></li>
            <li><a href="#">{t('header.courses')}</a></li>
            <li><a href="#">{t('header.page')}</a></li>
            <li><a href="#">{t('header.blog')}</a></li>
            <li><a href="#">{t('header.contact')}</a></li>

              <select name="" id="" onChange={handleChangeLanguage}>
                <option value="uz">Uzbek</option>
                <option value="ru">Russ</option>
                <option value="en">Eng</option>
              </select>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;