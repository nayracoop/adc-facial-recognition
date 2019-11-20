import React from 'react'
import './Risks.scss'
import {Container, Row, Col} from 'react-bootstrap'


const Risks = (props) => {
  const risksList = props.riskCardsList.map(item => <Row className='justify-content-center'><Col md={9} lg={8} className='mb-5 risk-card-cont'>{item}</Col></Row>)
  return (
    <section id='risks'>
      <Container>
        <h2>Riesgos</h2>
        {risksList}
      </Container>
    </section>
  )
}

export default Risks
