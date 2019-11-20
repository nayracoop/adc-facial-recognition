import React from 'react'
import './AboutADC.scss'
import {Container, Row, Col} from 'react-bootstrap'

const AboutADC = (props) => {
  return (
    <section id='about-adc'>
      <div className='img-wrapper-cont'>
        <Container>
          <Row className='img-wrapper justify-content-center'>
            <Col lg={11} className='text-center'>
              <img src={require('../../assets/img/about-adc.jpg')} alt='' className='mb-4 w-100' />
            </Col>
            <Col lg={12} className='adc-share text-center' >
              <h3 className='mb-3'>Compartir</h3>
              <div className='d-flex justify-content-center share-cont m-auto'>
                {props.shareIcons}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='desc-wrapper-cont'>
        <Container>
          <Row className='desc-wrapper justify-content-center'>
            <Col lg={11} className='text-center'>
              <h2 className='pb-4'>¿Qué está haciendo la ADC?</h2>
              <p>Creemos que hay suficientes razones que justifican establecer una restricción absoluta del uso de reconocimiento facial por parte de las fuerzas de seguridad e inteligencia con fines de vigilancia.</p>
              <p>Llevamos al Gobierno de la Ciudad a juicio por la implementación de este sistema en el espacio público porteño.</p>
            </Col>
            <Col lg={12} className='adc-social text-center' >
              <h3 className='mb-4'>Redes ADC</h3>
              <div className='d-flex justify-content-center social-cont m-auto'>
                {props.socialList}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default AboutADC
