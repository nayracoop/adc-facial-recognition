import React from 'react'
import './AboutADC.scss'
import {Container, Row, Col} from 'react-bootstrap'

const AboutADC = (props) => {
  return (
    <section id='about-adc'>
      <Container fluid>
        <Row className='img-wrapper'>
          <Col lg={{ span: 6, offset: 3 }} className='text-center'>
            <img src={require('../../assets/img/about-adc.jpg')} alt='' class='mb-4 w-100' />
          </Col>
          <Col lg={{ span: 2, offset: 5 }} className='adc-share text-center' >
            <h3 class='mb-3'>Compartir</h3>
            <div class='d-flex justify-content-around share-cont'>
              {props.shareIcons}
            </div>
          </Col>
        </Row>
        <Row className='desc-wrapper'>
          <Col lg={{ span: 6, offset: 3 }} className='text-center'>
            <h2 class='pb-4'>¿Qué está haciendo ADC?</h2>
            <p>Creemos que hay suficientes razones que justifican establecer una restricción absoluta del uso de reconocimiento facial por parte de las fuerzas de seguridad e inteligencia con fines de vigilancia.</p>
            <p>Llevamos al Gobierno de la Ciudad a juicio por la implementación de este sistema en el espacio público porteño.</p>
          </Col>
          <Col lg={{ span: 4, offset: 4 }} className='adc-social text-center' >
            <h3 class='mb-4'>Redes ADC</h3>
            <div class='d-flex justify-content-around social-cont'>
              {props.socialList}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutADC
