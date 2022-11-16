import React, { useState } from "react"
import close from '../../../assets/img/close.svg'
import MobileZoneGallery from "./MobileZoneGallery"
import './MobileZoneMenu.scss'

const MobileZoneMenu = ({ setProvincia, setDisplay, display, swiper2, setSwiper2 }) => {

  // const [display, setDisplay] = useState(false)


  return (
    <div id="mobileZoneMenu">
      <div className={`mobileZoneMenuBox ${display ? 'open' : ''}`}>
        <button onClick={() => setDisplay(!display)} >
          <img src={close} alt="close" />
        </button>

        <MobileZoneGallery
          setProvincia={setProvincia}
          swiper={swiper2}
          setSwiper={setSwiper2}
        />
      </div>
    </div>
  )
}

export default MobileZoneMenu