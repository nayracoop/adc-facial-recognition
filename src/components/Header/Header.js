import React from 'react'
import './Header.scss'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import Logo from '../../assets/img/logo.svg'
import Cam from '../../assets/img/cam.svg'

const Header = (props) => {
  function pepito (expanded) {
    if (expanded) {
      document.body.style.overflow = 'hidden'
      // document.querySelector('.navbar-brand').style.zIndex = '-1'
      document.querySelector('.navbar-brand').style.opacity = '0'
      // document.querySelector('.navbar-brand').classList.add('d-none')
    } else {
      document.body.style.overflow = 'auto'
      // document.querySelector('.navbar-brand').style.zIndex = '1'
      document.querySelector('.navbar-brand').style.opacity = '1'
      document.querySelector('.navbar-brand').classList.remove('d-none')
    }
  }
  /* let navBar = document.querySelector('.navbar-toggler')
    if (navBar && navBar.classList.contains('collapsed')) {
      console.log('abierto')
    }
  pepito() */
  return (
    <Container fluid className='header-container'>
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <header>
            <Navbar expand='lg' onToggle={pepito}>
              <Navbar.Brand href='#'>
                <span className='sr-only'>ADC por los derechos civiles</span>
                <img src={Logo} height='75' alt='ADC por los derechos civiles' />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' className='ml-auto' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                  <Nav.Link href='#working'>¿cómo funciona?</Nav.Link>
                  <Nav.Link href='#risks'>riesgos</Nav.Link>
                  <Nav.Link href='#about-adc'>¿qué está haciendo la ADC?</Nav.Link>
                </Nav>
                <div className='header-cam-cont mob-only'>
                  <div className='light' />
                  <img src={Cam} height='67' alt='Cam' className='header-cam' />
                </div>
                <div class='text-center header-social mob-only'>
                  <h3 className='mb-4'>Redes ADC</h3>
                  <div className='d-flex justify-content-around social-cont m-auto'>
                    {props.socialList}
                  </div>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </header>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
