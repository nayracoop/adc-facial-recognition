import React from 'react'
import './zoneCard.scss'
import imgDefault from '../../../assets/img/maps/CABA.svg'
import ReactHtmlParser from 'react-html-parser';


const ZoneCard = ({ img = imgDefault, title = 'Title', content = 'content' }) => {
  return (
    <div id='zoneCard'>

      <div className="imgBox">
        <div className="svgBox">
          <img src={img} alt="mapa-zona" />
        </div>
      </div>

      <div className="contentBox">
        <h2>{title}</h2>
        <p >{ReactHtmlParser(content)}</p>
      </div>



    </div>
  )
}

export default ZoneCard