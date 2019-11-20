import React from 'react'
import './Header.scss'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import Logo from '../../assets/img/logo.svg'
import Cam from '../../assets/img/cam.svg'

const Header = (props) => {
  function openHeader (expanded) {
    if (expanded) {
      //document.body.style.overflow = 'hidden'
      document.querySelector('.header-cam-cont').classList.toggle('rotate')
    } else {
      document.body.style.overflow = 'auto'
      //document.querySelector('.navbar-brand').classList.remove('d-none')
      //document.querySelector('.header-cam-cont').classList.remove('rotate')
      document.querySelector('.header-cam-cont').classList.toggle('rotate')
    }
    /*const toggler =  document.querySelector('.navbar-toggler')
    let link = document.querySelector('.nav-link') 

    toggler.onclick = function() {
      document.querySelector('.navbar-brand').classList.toggle('hide-logo')
    }
    
    link.onclick = function() {
      console.log(link)
      document.body.style.overflow = 'auto'
      document.querySelector('#basic-navbar-nav').classList.remove('show');
      toggler.classList.add('collapsed');
      document.querySelector('.navbar-brand').style.opacity = '1'
    }*/
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
            <Navbar expand='lg' onToggle={openHeader}>
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
                  <img src={Cam} height='67' alt='Cam' className='header-cam' />
                </div>
                <div className='text-center header-social mob-only'>
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
