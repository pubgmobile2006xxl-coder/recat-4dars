import React from 'react';
import { useTranslation } from 'react-i18next'; // Faqat shu yerda qoldi, 'react' ichidan o'chirildi
import "./Header.css";

const Header = () => {
  const { t,i18n } = useTranslation(); // Tillarni o'qish uchun hookni ishga tushiramiz

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <h1>Education</h1>

          <ul>
            {/* JSON fayldagi kalit so'zlarga moslab t() funksiyasi yozildi */}
            <li><a href="#">{t('header.home')}</a></li>
            <li><a href="#">{t('header.courses')}</a></li>
            <li><a href="#">{t('header.page')}</a></li>
            <li><a href="#">{t('header.blog')}</a></li>
            <li><a href="#">{t('header.contact')}</a></li>

            <li>
              <select name="lang" id="lang-select">
                <option value="uz">Uzbek</option>
                <option value="ru">Russ</option>
                <option value="en">Eng</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;