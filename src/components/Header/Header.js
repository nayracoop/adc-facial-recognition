import React from 'react'
import './Header.scss'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import Logo from '../../assets/img/logo.svg'

const Header = (props) => {
  return (
    <Container fluid className='position-fixed header-container'>
      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <header>
            <Navbar expand='lg' fixed>
              <Navbar.Brand href='#'>
                <span class='sr-only'>ADC por los derechos civiles</span>
                <img src={Logo} height='75' alt='ADC por los derechos civiles' />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                  <Nav.Link href='#working'>Funcionamiento</Nav.Link>
                  <Nav.Link href='#risks'>Riesgos</Nav.Link>
                  <Nav.Link href='#about-adc'>¿Qué está haciendo ADC?</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>
        </Col>
      </Row>
    </Container>
  )
}

export default Header
