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
              <div className='d-flex justify-content-center share-cont'>
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
              <p>Creemos que hay suficientes razones que justifican establecer una restricción absoluta del uso de reconocimiento facial, por parte de las fuerzas de seguridad e inteligencia, con fines de vigilancia.</p>
              <p>A fines de octubre, <a href='https://adc.org.ar/2019/11/06/el-reconocimiento-facial-para-vigilancia-no-pertenece-a-nuestro-espacio-publico/' target='_blank' rel='noopener noreferrer'>iniciamos una acción ante el Tribunal Superior de Justicia de la Ciudad de Buenos Aires para que determine la inconstitucionalidad del Sistema de Reconocimiento Facial</a>. El objetivo de este litigio es que la Resolución 398/19, que crea el sistema, pierda vigencia.</p>
            </Col>
            <Col lg={12} className='adc-social text-center' >
              <h3 className='mb-4'>Redes ADC</h3>
              <div className='d-flex justify-content-center social-cont'>
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
