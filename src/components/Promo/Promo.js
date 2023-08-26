import './Promo.css'
import title from '../../images/title.svg'
import message from '../../images/message.png'

function Promo() {

    return (
        <main className="promo">
            <img src={title} alt="Логотип" className="promo__title" />
            <img src={message} alt="Логотип" className="promo__message-image" />
            <button className='promo__sign-up-button'>зарегистрироваться</button>
            <h2 className='promo__subtitle'>Команда рекламного холдинга GroupM рада открыть для вас двери digital-конференции NextM!</h2>
            <p className='promo__text'>NextM – это ежегодная digital-конференция, организованная ведущей международной рекламной группой GroupM, входящей в состав коммуникационного холдинга WPP и представленной в России агентствами Mindshare, MediaCom и Wavemaker.</p>
        </main >
    );
}
export default Promo;