import React from 'react'
import {Col} from 'react-bootstrap'
const TextWithImage = (props) => {
  const title = (props.title) && <h3 class='pt-4 pb-4'>{props.title}</h3>

  const mobileImg = (props.mobImage) && <img src={require('../../assets/img/' + props.mobImage)} height={props.mobImgHeight} alt={props.mobImgAlt} className={props.mobImgClass} />

  const desktopImg = (props.image) && <img src={require('../../assets/img/' + props.image)} height={props.imgHeight} alt={props.imgAlt} className={props.imgClass} />

  const text = (props.text) && <p>{props.text}</p>

  return (
    <Col className={props.class}>
      {mobileImg}
      {desktopImg}
      {title}
      {text}
    </Col>
  )
}

export default TextWithImage
