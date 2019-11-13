import React from 'react'
import './Intro.scss'
import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import MatchLevel from '../common/MatchLevel/MatchLevel'

const Intro = () => {
  return (
    <Jumbotron fluid className='intro mb-0'>
      <Container fluid className='intro-container'>
        <Row>
          <Col xs={{ span: 9, offset: 2 }} sm={{ span: 9, offset: 2 }} lg={{ span: 5, offset: 3 }}>
            <h1>ConMiCaraNo</h1>
            <p>Reconocimiento facial en la <br />Ciudad de Buenos Aires</p>
            <MatchLevel max="89" units="%" />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Intro
