import React from 'react'
import './Working.scss'
import {Container, Row, Col} from 'react-bootstrap'
import TextWithImage from './TextWithImage'
import TextBlock from './TextBlock'
import Nodos from '../../assets/img/nodos.svg'

const Working = (props) => {
  return (
    <section id='working'>
      <Container fluid className='what-is'>
        <Row className='mb-5 working-desc'>
          <Col lg={{ span: 6, offset: 3 }}>
            <h2 class='mb-3'>¿Cómo funciona?</h2>
          </Col>
          <TextBlock title='¿Qué es?' headerClass='mb-4' text='El reconocimiento facial es una tecnología biométrica que permite reconocer e identificar a las personas mediante sus rasgos faciales. Si bien hay ciertas aplicaciones del reconocimiento facial que son útiles, esta tecnología ha ido ganando cada vez mayor popularidad como una herramienta de vigilancia y control por parte de diversos gobiernos. El uso indiscriminado, sin una regulación apropiada y precisa está poniendo en grave riesgo el ejercicio y goce de nuestros derechos fundamentales, a la vez que se está redefiniendo cómo disfrutamos de los espacios públicos y desarrollamos nuestra vida en sociedad.' />
        </Row>

        <Row className='align-items-center mb-5'>
          <Col lg={4}>
            <img src={Nodos} class='w-100' alt='nodos' />
          </Col>

          <Col lg={5}>
            <p class='mb-0'>La tecnología biométrica utiliza las características físicas y de comportamiento que son únicas para cada persona. Permitiendo reconocer, autenticar o identificar, de manera automatizada, a una o múltiples personas.</p>
          </Col>
        </Row>

        <Row className='mb-5'>
          <Col lg={{ span: 6, offset: 3 }}>
            <p>Los datos biométricos cambian sustancialmente la relación entre cuerpo e identidad, ya que transforman a las características del cuerpo humano para ser medibles y legibles por computadoras.</p>
          </Col>
        </Row>

        <Row className='mb-5'>
          <TextWithImage
            image={'algoritmo.svg'}
            imgHeight='183'
            class='col-lg-6 offset-lg-3 algorithm'
            text='Podemos establecer dos grandes categorías de datos biométricos. Por un lado, los que provienen de las características físicas y fisiológicas. Tal es el caso de las huellas dactilares, los rasgos faciales, el ADN, el iris, la retina, la forma de una parte del cuerpo como la mano o la oreja, e incluso el mapa de nuestras venas. Por otra parte, los que provienen de características del comportamiento, como son la voz, la firma, el modo de andar o la manera de escribir en un teclado.' />
          <Col lg={{ span: 6, offset: 3 }}>
            <p>Los datos biométricos son datos personales sensibles.</p>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className='mb-5'>
          <Col lg={{ span: 6, offset: 3 }}>
            <h3 class='pt-4 pb-4'>¿Cómo funciona la plantilla biométrica?</h3>
          </Col>
          {props.cardsList}
        </Row>

        <Row className='mb-5'>
          <Col lg={{ span: 6, offset: 3 }}>
            <h3 class='pt-4 pb-4'>¿Cuál es la diferencia entre verificación e identificación?</h3>
          </Col>
          {props.textWithImage}
        </Row>

        <Row className='mb-5'>
          <TextBlock title='¿Cómo entran en juego los algoritmos de reconocimiento facial?' text='Debido a que el software de reconocimiento facial funciona en base a un algoritmo para la detección, mapeo y contraste de los rasgos faciales, es importante conocer cómo fue entrenado ese algoritmo y cuáles son las tasas de error programadas en el software.' />
          <Col lg={{ span: 6, offset: 3 }}>
            <p>El entrenamiento del algoritmo define la precisión con la cual podrá reconocer rostros en diversos casos, por ejemplo ante cambios de luz, fondos que no tienen un único color, ángulos variados, pero también aspectos más sensibles como son el tono de piel y el género de una persona. Por eso los sistemas de reconocimiento facial pueden ser discriminatorios.</p>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Working
