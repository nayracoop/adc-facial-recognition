import React from 'react'
import './Risks.scss'
import {Container, Row, Col} from 'react-bootstrap'

const Risks = (props) => {
  const risksList = props.riskCardsList.map(item => <Row className='justify-content-center'><Col lg={5} className='mb-5'>{item}</Col></Row>)
  return (
    <section id='risks'>
      <Container fluid>
        <h2>Riesgos</h2>
        {risksList}
      </Container>
    </section>
  )
}

export default Risks
