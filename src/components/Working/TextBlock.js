import React from 'react'
import {Col} from 'react-bootstrap'

const TextBlock = (props) => {
  return (
    <Col className={props.contClass}>
      <h3 className={props.headerClass}>{props.title}</h3>
      <p>{props.text}</p>
    </Col>
  )
}

export default TextBlock
