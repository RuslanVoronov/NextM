import './Promo.css'
import title from '../../images/title.svg'
import vector from '../../images/Vector_white.svg'
import message from '../../images/message.png'

function Promo() {

    return (
        <main className="promo">
            <img src={title} alt="Промо" className="promo__title" />
            <button className='promo__sign-up-button'>зарегистрироваться</button>
            <img src={message} alt="Диалог" className="promo__message-image" />
            <h2 className='promo__subtitle'>Команда рекламного холдинга GroupM рада открыть для вас двери digital-конференции NextM!</h2>
            <p className='promo__text'>NextM – это ежегодная digital-конференция, организованная ведущей международной рекламной
                группой GroupM, входящей в состав коммуникационного холдинга WPP и представленной в России агентствами Mindshare, MediaCom и Wavemaker.</p>
            <img src={vector} alt="Вектор" className="promo__vector" />
        </main >
    );
}
export default Promo;