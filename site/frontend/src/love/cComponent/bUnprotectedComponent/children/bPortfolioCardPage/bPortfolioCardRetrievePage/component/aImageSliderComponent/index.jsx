import React from 'react'
import './index.css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImageSliderComponent = ({ Redux }) => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={window.innerWidth < 1024 ? 1 : 2}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className='container imageSlider__container'
      >
        {Redux.state.ReceivedObject?.PortfolioCardRetrieve?.portfolioImages?.map((each, index) => {
          return (
            <SwiperSlide className='imageSlider1' key={index} >
              <div className='imageSlider__avatar1-not-working portfolio__item-image'>
                <img src={each?.url} alt="Avatar" />
              </div>
            </SwiperSlide>
          )
        })}        
      </Swiper>
    </div>
  )
}

export default ImageSliderComponent