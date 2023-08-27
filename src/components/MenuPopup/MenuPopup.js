import './MenuPopup.css'
import logo from '../../images/Logo.svg';
import email from '../../images/Email.svg';
import facebook from '../../images/Facebook.svg';
import { NavLink } from 'react-router-dom';

function MenuPopup({ isPopupOpen, onClose }) {
    return (
        <nav className={`${isPopupOpen ? 'menu-popup menu-popup_opened' : 'menu-popup'}`}>

            <div className='menu-popup__content'>
                <NavLink to='/'>
                    <img src={logo} alt="Логотип" className="menu-popup__logo" />
                </NavLink>

                <button className='menu-popup__close-button' onClick={onClose}></button>
                <ul className="menu-popup__list">
                    <li className="menu-popup__item">
                        <NavLink onClick={onClose} className="menu-popup__link">Конференция</NavLink>
                    </li>
                    <li className="menu-popup__item">
                        <NavLink onClick={onClose} className="menu-popup__link">Программа</NavLink>
                    </li>
                    <li className="menu-popup__item">
                        <NavLink onClick={onClose} className="menu-popup__link">Спикеры</NavLink>
                    </li>
                    <li className="menu-popup__item">
                        <NavLink onClick={onClose} className="menu-popup__link">Фото</NavLink>
                    </li>
                    <li className="menu-popup__item">
                        <NavLink onClick={onClose} className="menu-popup__link">Материалы</NavLink>
                    </li>
                </ul>

                <button className='navigate__sign-up'>Регистрация</button>

                <div className='navigate__links'>
                    <NavLink to='/' className='navigate__link'>
                        <img src={email} alt="email" className="navigate__logo" />
                    </NavLink>
                    <NavLink to='/' className='navigate__link'>
                        <img src={facebook} alt="facebook" className="navigate__logo" />
                    </NavLink>
                </div>
            </div>

        </nav>
    );
}
export default MenuPopup;