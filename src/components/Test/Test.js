import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Test (props) {
  return (
    <Row>
      <Col xs={6} md={12}><h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </Col>
    </Row>
  )
}

export default Test
