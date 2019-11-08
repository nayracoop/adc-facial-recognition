import React from 'react'
import {Col} from 'react-bootstrap'
const TextWithImage = (props) => {
  const title = (props.title) && <h3 class='pt-4 pb-4'>{props.title}</h3>

  return (
    <Col className={props.class}>
      <img src={require('../../assets/img/' + props.image)} height={props.imgHeight} alt={props.imgAlt} className={props.imgClass} />
      {title}
      <p>{props.text}</p>
    </Col>
  )
}

export default TextWithImage
