import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer className="footer">
            <Link to='#' className='footer__link'>info@groupmnextm.ru</Link>
            <Link to='#' className='footer__link'>+7 (495) 641-40-80</Link>
            <Link to='#' className='footer__link'>Правовая информация</Link>
        </footer >
    );
}
export default Footer;