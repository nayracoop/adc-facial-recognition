import React from 'react'
import './Risks.scss'
import {Container, Row, Col} from 'react-bootstrap'
import VisibilitySensor from 'react-visibility-sensor'

import Counter from '../common/Counter/Counter'


const Risks = (props) => {
  const risksList = props.riskCardsList.map(item => <Row className='justify-content-center'><Col lg={5} className='mb-5'>{item}</Col></Row>)
  return (
    <VisibilitySensor partialVisibility={true}>
      {({isVisible}) => 
        <section id='risks'>
          <Container fluid>
            <h2>Riesgos {isVisible && <Counter max="89" units="%" />}</h2>
            {risksList}
          </Container>
        </section>
      }
    </VisibilitySensor>
  )
}

export default Risks
