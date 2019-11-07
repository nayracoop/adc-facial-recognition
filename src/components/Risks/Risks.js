import React from 'react'
import './Risks.scss'
import {Container, Row, Col, Card} from 'react-bootstrap'

const Risks = () => {
  return (
    <section id='risks'>
      <Container fluid>
        <h2>Riesgos</h2>
        <Row className='align-items-end'>
          <Col lg={{ span: 2, offset: 2 }}>
            <Card>
              <Card.Body>
                <Card.Img src={require('../../assets/img/' + 'risks-icon.svg')} height='43' width='43' />
                <Card.Text>
                    Uso encubierto - no se requiere consentimiento
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Img src={require('../../assets/img/' + 'risks-icon.svg')} height='43' width='43' />
                <Card.Text>
                  No hay base legal en Argentina que regule específicamente el uso.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Img src={require('../../assets/img/' + 'risks-icon.svg')} height='43' width='43' />
                <Card.Text>
                  Filtración/hackeo de la base de datos por una pobre o nula implementación de medidas de seguridad.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={2}>
            <Card>
              <Card.Body>
                <Card.Img src={require('../../assets/img/' + 'risks-icon.svg')} height='43' width='43' />
                <Card.Text>
                Uso ubicuo - puede implementarse en tiempo real o utilizar fotografías /videos que hayan sido capturadas /grabados en el pasado
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Img src={require('../../assets/img/' + 'risks-icon.svg')} height='43' width='43' />
                <Card.Text>
                Inversión de la carga de la prueba: todos son culpables hasta que el sistema /algoritmo diga que no lo son. Afectación a garantías del debido proceso.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={2}>
            <Card>
              <Card.Body>
                <Card.Img src={require('../../assets/img/' + 'risks-icon.svg')} height='43' width='43' />
                <Card.Text>
                Permite individualizar y realizar un seguimiento preciso de cada persona
                </Card.Text>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <Card.Img src={require('../../assets/img/' + 'risks-icon.svg')} height='43' width='43' />
                <Card.Text>
                Discriminación: la tecnología es imprecisa y arroja un alto porcentaje de falsos positivos contra personas de tez no blanca y mujeres (además de otras comunidades vulnerables).
                </Card.Text>
              </Card.Body>
            </Card>

          </Col>

          <Col lg={2}>
            <Card>
              <Card.Body>
                <Card.Img src={require('../../assets/img/' + 'risks-icon.svg')} height='43' width='43' />
                <Card.Text>
                   Facilita la vigilancia masiva en forma automatizada: los algoritmos de reconocimiento facial deben necesariamente detectar todas las caras que ven las cámaras en donde están implementados, por eso, por más que tu nombre no esté vinculado a tu rostro, el software igualmente te está reconociendo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Risks
