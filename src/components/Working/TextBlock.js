import React from 'react'
import {Col} from 'react-bootstrap'

const TextBlock = (props) => {
  return (
    <Col lg={{ span: 6, offset: 3 }}>
      <h3 className={props.headerClass}>{props.title}</h3>
      <p>{props.text}</p>
    </Col>
  )
}

export default TextBlock
