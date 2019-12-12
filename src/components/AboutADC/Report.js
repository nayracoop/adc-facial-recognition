import React from 'react'
import {Col} from 'react-bootstrap'

const Report = (props) => {
  return (
    <Col lg={3} sm={6} className='report'>
      <a href={props.url} target='_blank' rel='noopener noreferrer'>
        <img src={require('../../assets/img/' + props.image)} alt={props.imgAlt} className='w-100' />
        <h4>{props.title}</h4>
        <p>{props.subtitle}</p>
      </a>
    </Col>
  )
}

export default Report
