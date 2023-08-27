import email from '../../images/Email.svg';
import facebook from '../../images/Facebook.svg'
import './Navigation.css'
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <>
            <nav className='navigate'>
                <ul className='navigate__list'>
                    <li className='navigate__list-item'>Конференция</li>
                    <li className='navigate__list-item'>Программа</li>
                    <li className='navigate__list-item'>Спикеры</li>
                    <li className='navigate__list-item'>Фото</li>
                    <li className='navigate__list-item'>Материалы</li>
                </ul>
                <div className='navigate__container'>
                    <button className='navigate__sign-up'>Регистрация</button>
                    <div className='navigate__links'>
                        <Link to='/' className='navigate__link'>
                            <img src={email} alt="email" className="navigate__logo" />
                        </Link>
                        <Link to='/' className='navigate__link'>
                            <img src={facebook} alt="facebook" className="navigate__logo" />
                        </Link>
                    </div>
                </div>
            </nav>
            <button type='button' className='navigate__menu'></button>
        </>
    );
}
export default Navigation;