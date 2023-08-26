import './Spikers.css'
import spiker from '../../images/Spiker.png'

function Spikers() {

    return (
        <section className="spikers">
            <h2 className='spikers__title'>Спикеры</h2>
            <img src={spiker} alt="Спикер" className="spikers__image" />
            <img src={spiker} alt="Спикер" className="spikers__image" />

        </section >
    );
}
export default Spikers;