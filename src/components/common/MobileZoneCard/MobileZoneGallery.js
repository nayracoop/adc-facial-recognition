import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import ZoneCard from '../ZoneCard/ZoneCard'

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import mapData from '../../../constants/map-data';
import './MobilezoneGallery.scss';

SwiperCore.use([Navigation, Pagination, A11y]);


const MobilezoneGallery = ({ setProvincia, swiper, setSwiper, display }) => {

  return (
    <div id='MobilezoneGallery'>
      <div className={`MobileZoneGalleryClass ${display ? 'open' : ''}`}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          initialSlide={0}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
            setSwiper(swiper)
          }}

          onSlideChange={(e) => {
            if (e.activeIndex === 0) {
              setProvincia('salta')
            }
            if (e.activeIndex === 1) {
              setProvincia('cordoba')
            }
            if (e.activeIndex === 2) {
              setProvincia('santaFe')
            }
            if (e.activeIndex === 3) {
              setProvincia('tigre')
            }
            if (e.activeIndex === 4) {
              setProvincia('caba')
            }
            if (e.activeIndex === 5) {
              setProvincia('mendoza')
            }
            if (e.activeIndex === 6) {
              setProvincia('laMatanza')
            }
            if (e.activeIndex === 7) {
              setProvincia('marDelPlata')
            }
          }}
        >
          {
            mapData.map((e, index) => {
              return (
                <SwiperSlide>
                  <ZoneCard
                    img={require('../../../assets/img/maps/' + e.img)}
                    title={e.title}
                    content={e.content}
                    key={`key_${index}.${e.content.title}`}
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </div>

  )
}

export default MobilezoneGallery