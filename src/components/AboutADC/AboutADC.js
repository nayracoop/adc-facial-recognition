import React from 'react'
import './AboutADC.scss'
import {Container, Row, Col} from 'react-bootstrap'

const AboutADC = () => {
  return (
    <section id='about-adc'>
      <Container fluid>
        <Row>
          <Col lg={{ span: 6, offset: 3 }} className='img-wrapper'>
            <img src={require('../../assets/img/' + 'about-adc.jpg')} alt='' class='mb-4 w-100' />
          </Col>
          <Col lg={{ span: 6, offset: 3 }}>
            <h2 class='pt-5 pb-4'>¿Qué está haciendo ADC?</h2>
            <p>Creemos que hay suficientes razones que justifican establecer una restricción absoluta del uso de reconocimiento facial por parte de las fuerzas de seguridad e inteligencia con fines de vigilancia.</p>
            <p>Llevamos al Gobierno de la Ciudad a juicio por la implementación de este sistema en el espacio público porteño.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutADC
