import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import MapComp from '../common/MapComp'
import ZoneGallery from '../common/ZoneGallery/ZoneGallery'
import alert from '../../assets/img/alert.svg'
import MobileZoneMenu from '../common/MobileZoneCard/MobileZoneMenu'
import './Map.scss'

const Map = () => {

  const [provincia, setProvincia] = useState('salta')
  const [swiper, setSwiper] = useState()
  const [swiper2, setSwiper2] = useState()
  const [display, setDisplay] = useState(true)

  const handleChangeSlide2 = (index) => {
    swiper2.slideTo(index)
  }

  const handleChangeSlide = (index) => {
    swiper.slideTo(index)
  }

  return (
    <section id='map'>
      <Container>
        <MobileZoneMenu
          setProvincia={setProvincia}
          // swiper={swiper}
          // setSwiper={setSwiper}
          setSwiper2={setSwiper2}
          swiper2={swiper2}
          setDisplay={setDisplay}
          display={display}
        />
        <div className='justify-content-center row'>
          <div class="col-lg-11">
            <h2>El mapa de la vigilancia</h2>
            <p>El despliegue de tecnología de reconocimiento facial con fines de seguridad pública se extiende en Argentina. Cada vez más lugares implementan estos sistemas sin haber realizado evaluaciones de impacto en derechos humanos. A su vez, otras localidades anuncian que adoptarán esta herramienta en el corto o mediano plazo.</p>
            <p>A continuación, te mostramos las provincias y municipios de nuestro país en donde corrés el riesgo de que tu rostro sea captado por una cámara con tecnología de reconocimiento facial, ahora o en el futuro</p>
          </div>
        </div>

        <div class="justify-content-center row">
          <div className="mapBox">

            <MapComp
              setProvincia={setProvincia}
              provincia={provincia}
              setDisplay={setDisplay}
              display={display}
              handleChangeSlide={handleChangeSlide}
              handleChangeSlide2={handleChangeSlide2}
            />

            <ZoneGallery
              setProvincia={setProvincia}
              swiper={swiper}
              setSwiper={setSwiper}
            />
          </div>
        </div>
        <div className="subtitle">
          <img src={alert} alt="alert" />
          <p>
            El mapa se encuentra actualizado hasta el día 1º de noviembre de 2022
          </p>
        </div>
      </Container>
    </section>
  )
}

export default Map
