import React from 'react'
import './Footer.scss'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer id='footer'>
      <Container fluid>
        <Row className='main-footer pt-4 pb-4'>
          <Col lg={{ span: 2, offset: 2 }}>
            <img src={require('../../assets/img/logo-footer.svg')} height='64' alt='ADC por los derechos civiles' />
          </Col>
          <Col lg={{ span: 4, offset: 3 }}>
            <ul>
              <li>Tucumán 924 8° (C1049AAT) Ciudad Autónoma de Buenos Aires - Argentina</li>
              <li>Teléfono: <a href='tel:+541152360555'>(54 11) 5236-0555</a> | <a href='mailto:contacto@adc.org.ar'>contacto@adc.org.ar</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
