// Import Swiper React components
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';

import './Spikers.css'
import spiker from '../../images/Spiker.png'
import vector from '../../images/Vector_black.svg'

function Spikers() {


    return (
        <section className="spikers">
            <h2 className='spikers__title'>Спикеры</h2>


            <Swiper
                grabCursor={true}
                loop={true}
                className='swiper'
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                slidesPerView={2}
                navigation={{
                    draggable: true,
                    clickable: true,
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
                }
                pagination={{
                    clickable: true,
                    // dynamicBullets: true,
                    // el: '.swiper-pagination', 
                }}
                style={{
                    "--swiper-pagination-color": "#0A2756",
                    "--swiper-pagination-bullet-inactive-color": "#E4E4E4",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "13px",
                    "--swiper-pagination-bullet-horizontal-gap": "32px"
                }}
            >
                <SwiperSlide>
                    <img src={spiker} alt="Спикер" className="spiker" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={spiker} alt="Спикер" className="spiker" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={spiker} alt="Спикер" className="spiker" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={spiker} alt="Спикер" className="spiker" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={spiker} alt="Спикер" className="spiker" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={spiker} alt="Спикер" className="spiker" />
                </SwiperSlide>
                <img className='swiper-button swiper-button-next' src={vector} alt='Стрелка' />
                <img className='swiper-button swiper-button-prev' src={vector} alt='Стрелка' />
                <div className='swiper-pagination'></div>
            </Swiper>

        </section >
    );
}
export default Spikers;