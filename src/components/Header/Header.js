import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ onMenuClick }) {

    return (
        <header className="header">
            <Link to='/'>
                <img src={logo} alt="Логотип" className="header__logo" />
            </Link>
            <Navigation onMenuClick={onMenuClick} />
        </header >
    );
}
export default Header;