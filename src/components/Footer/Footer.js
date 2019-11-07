import React from 'react'
import './Footer.scss'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer id='footer'>
      <Container fluid>
        <Row className='main-footer pt-4 pb-4'>
          <Col lg={{ span: 2, offset: 2 }}>
            <img src={require('../../assets/img/' + 'logo-footer.svg')} height='63' alt='' />
          </Col>
          <Col lg={{ span: 3, offset: 4 }}>
            <ul>
              <li>Tucumán 924 8° (C1049AAT) Ciudad Autónoma de <br /> Buenos Aires - Argentina</li>
              <li>Teléfono: (54 11) 5236-0555 | contacto@adc.org.ar</li>
            </ul>
          </Col>
        </Row>
        <Row className='sub-footer pt-2 pb-2'>
          <Col lg={{ span: 9, offset: 2 }}>
            <img src={require('../../assets/img/' + 'licence.png')} height='25' alt='licence' />
            <span class='ml-3'>ADC 2019</span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
