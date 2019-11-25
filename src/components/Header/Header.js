import React from 'react'
import './Header.scss'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import Logo from '../../assets/img/logo.svg'
import Cam from '../../assets/img/cam.svg'

let lastScrollY = 0

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      scrolled: false,
      scrolledUp: false,
      opened: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll, true)
    this.handleScroll()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const isScrolledUp = lastScrollY - window.scrollY > 0
    const isScrolled = window.scrollY > 0
    lastScrollY = window.scrollY
    if (isScrolled !== this.state.scrolled || isScrolledUp !== this.state.scrolledUp) {
      this.setState({ scrolled: isScrolled, scrolledUp: isScrolledUp })
    }
  }

  openHeader = (expanded) => {
    this.setState({ opened: expanded })

    if (expanded) {
      this.setState({ opened: expanded })
      document.querySelector('.header-cam-cont').classList.toggle('rotate')
    } else {
      document.querySelector('.header-cam-cont').classList.toggle('rotate')
    }
  }

  render () {
    let classes = this.state.scrolled && !this.state.scrolledUp && !this.state.opened ? 'hidden' : ''
    if (this.state.opened) classes = 'opened'

    return (
      <Container fluid className='header-container'>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <header className={classes}>
              <Navbar expand='lg' onToggle={this.openHeader} collapseOnSelect>
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
                    <div className='d-flex justify-content-center social-cont'>
                      {this.props.socialList}
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
}

export default Header
