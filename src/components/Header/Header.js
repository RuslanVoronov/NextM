import logo from '../../images/Logo.svg';
import email from '../../images/Email.svg';
import facebook from '../../images/Facebook.svg'
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <Link to='/'>
                <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            <nav className='navigate'>
                <ul className='header__list'>
                    <li className='header__list-item'>Конференция</li>
                    <li className='header__list-item'>Программа</li>
                    <li className='header__list-item'>Спикеры</li>
                    <li className='header__list-item'>Фото</li>
                    <li className='header__list-item'>Материалы</li>
                </ul>
            </nav>
            <button className='header__sign-up'>Регистрация</button>
            <div className='header__links'>
                <Link to='/' className='header__link'>
                    <img src={email} alt="email" className="header__logo" />
                </Link>
                <Link to='/' className='header__link'>
                    <img src={facebook} alt="email" className="header__logo" />
                </Link>
            </div>

        </header >
    );
}
export default Header;