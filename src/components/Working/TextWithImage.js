import React from 'react'
import {Col} from 'react-bootstrap'
const TextWithImage = (props) => {
  return (
    <Col className={props.class}>
      <img src={require('../../assets/img/' + props.image)} height={props.imageHeight} alt={props.imageAlt} class='w-100' />
      <h3 class='pt-4 pb-4'>{props.title}</h3>
      <p>{props.text}</p>
    </Col>
  )
}

export default TextWithImage
