import React from 'react'
import './Intro.scss'
import Cam from '../../assets/img/cam.svg'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Cam360 from './IntroCamera360'
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
        </Row>
      </Container>
      <Cam360 className='mob-only' />
    </Jumbotron>
  )
}

export default Intro
