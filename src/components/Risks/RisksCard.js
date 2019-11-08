import React from 'react'
import {Card} from 'react-bootstrap'
const RisksCard = (props) => {
  return (
    <Card>
      <Card.Body className='text-center'>
        <Card.Img src={require('../../assets/img/' + props.image)} height={props.imgHeight} width={props.imgWidth} alt={props.imgAlt} />
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default RisksCard
