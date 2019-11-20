import React from 'react'
import './Intro.scss'
//import Cam from '../../assets/img/cam.svg'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import Cam360 from './IntroCamera360'
import CounterBox from './IntroCounterBox'

const Intro = () => {
  return (
    <Jumbotron fluid className='intro'>
      <Container fluid className='intro-container'>
        <Row>
          <Col xs={12} sm={12} lg={{ span: 5, offset: 4 }}>
            <h1>ConMiCaraNo</h1>
            <p>Reconocimiento facial en la <br />Ciudad de Buenos Aires</p>
          </Col>
        </Row>  
      </Container>
      <CounterBox max="89" className="cb-1 cb-desk desk-only" />
      <Cam360 className='mob-only' />
    </Jumbotron>
  )
}

export default Intro
