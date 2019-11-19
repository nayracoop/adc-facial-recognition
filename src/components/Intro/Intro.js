import React from 'react'
import './Intro.scss'
import Cam from '../../assets/img/cam.svg'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Counter from '../common/Counter/Counter'

const Intro = () => {
  return (
    <Jumbotron fluid className='intro mb-0'>
      <Container fluid className='intro-container'>
        <Row>
          <Col xs={12} sm={12} lg={{ span: 5, offset: 3 }}>
            <h1>ConMiCaraNo</h1>
            <p>Reconocimiento facial en la <br />Ciudad de Buenos Aires</p>
            <Counter max="89" units="%" />
          </Col>
          <Col className='intro-cam-cont mob-only'>
            <img src={Cam} height='67' alt='Cam' className='intro-cam' />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Intro
