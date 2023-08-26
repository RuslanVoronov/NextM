import SendMessageForm from '../SendMessageForm/SendMessageForm';
import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer className="footer">
            <SendMessageForm />
            <Link to='#' className='footer__link footer__link_type_email'>info@groupmnextm.ru</Link>
            <Link to='#' className='footer__link footer__link_type_phone'>+7 (495) 641-40-80</Link>
            <Link to='#' className='footer__link footer__link_type_info'>Правовая информация</Link>
        </footer >
    );
}
export default Footer;