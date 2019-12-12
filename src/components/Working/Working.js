import React from 'react'
import './Working.scss'
import {Container, Row, Col} from 'react-bootstrap'
import TextWithImage from './TextWithImage'
import TextBlock from './TextBlock'
import Nodos from '../../assets/img/nodos.svg'
import NodosMob from '../../assets/img/nodos-mob.svg'

const Working = (props) => {
  return (
    <section id='working'>
      <div className='what-is-cont'>
        <Container className='what-is'>
          <Row className='mb-5 working-desc'>
            <Col lg={{ span: 10, offset: 1 }}>
              <h2 className='mb-3'>Funcionamiento</h2>
            </Col>
            <TextBlock title='¿Qué es?' contClass='col-lg-10 offset-lg-1' headerClass='mb-4' text='El reconocimiento facial es una tecnología biométrica que permite reconocer e identificar a las personas mediante sus rasgos faciales. Si bien hay ciertas aplicaciones del reconocimiento facial que son útiles, esta tecnología ha ido ganando cada vez mayor popularidad como una herramienta de vigilancia y control. El uso indiscriminado, sin una regulación apropiada y precisa está poniendo en riesgo el ejercicio de nuestros derechos fundamentales, el disfrute de los espacios públicos y el desarrollo de nuestra vida en sociedad.' />
          </Row>

          <Row className='align-items-center mb-5'>
            <Col lg={5} xs={5}>
              <img src={Nodos} className='desk-nodes desk-only' alt='nodos' />
              <img src={NodosMob} className='w-100 mob-nodes mob-only mb-5' alt='nodos' />
            </Col>

            <Col lg={7} xs={7}>
              <p className='mb-0'>La tecnología biométrica utiliza las características físicas y de comportamiento únicas de cada persona. Así, permite reconocer, autenticar o identificar, de manera automatizada, a uno o múltiples individuos.</p>
            </Col>
          </Row>

          <Row className='mb-5'>
            <Col lg={{ span: 10, offset: 1 }}>
              <p>Los datos biométricos son datos personales sensibles y se dividen en dos grandes categorías. Por un lado, los que provienen de las características físicas y fisiológicas: las huellas dactilares, los rasgos faciales, el ADN, el iris, la retina, la forma de una parte del cuerpo como la mano o la oreja, e incluso el mapa de nuestras venas. Por otra parte, los que provienen de características del comportamiento, como son la voz, la firma, el modo de andar o la manera de escribir en un teclado.</p>
            </Col>
          </Row>

          <Row className='mb-5'>
            <TextWithImage
              image={'algoritmo.svg'}
              imgHeight='183'
              imgAlt='Algoritmo'
              imgClass='desk-only'
              class='col-lg-11 algorithm text-center'
              mobImage={'algoritmo-mob.svg'}
              mobImgAlt='Algoritmo'
              mobImgClass='mob-only w-100' />
          </Row>
        </Container>
      </div>

      <div className='biometric-cards-cont'>
        <Container>
          <Row className='biometric-cards'>
            <Col lg={{ span: 8, offset: 3 }}>
              <h3 className='pt-4 pb-4'>¿Cómo se obtienen los datos biométricos y cómo funciona la plantilla biométrica?</h3>
            </Col>
            {props.cardsList}
          </Row>
        </Container>
        <Container>

          <Row className='mb-5 verify-recognize'>
            <Col lg={{ span: 10, offset: 1 }}>
              <h3 className='pt-4 pb-4'>¿Cuál es la diferencia entre verificación e identificación?</h3>
            </Col>
            {props.textWithImage}
          </Row>

          <Row className='mb-5 algorithm-training'>
            <TextBlock title='¿Cómo afecta el entrenamiento a los algoritmos de reconocimiento facial?' contClass='col-lg-10 offset-lg-1' headerClass='pb-4' text='Debido a que el software de reconocimiento facial funciona en base a un algoritmo para la detección, mapeo y contraste de los rasgos faciales, es importante conocer cómo fue entrenado ese algoritmo y cuáles son las tasas de error programadas en el software.' />
            <Col lg={{ span: 10, offset: 1 }}>
              <p>El entrenamiento del algoritmo define la precisión con la cual podrá reconocer rostros en diversos escenarios. Por ejemplo, ante cambios de luz, fondos con distintos colores o ángulos variados, también puede incidir en la certeza del reconocimiento. En esta instancia, aspectos sensibles como el tono de piel y el género de una persona juegan un papel crucial, dado que el software de reconocimiento facial puede discriminarlas, sea por ejemplo si <a href='https://www.perpetuallineup.org/findings/racial-bias'>confunde a una persona con otra por tener rasgos “parecidos” sólo por su tez</a>, o <a href='https://www.pewresearch.org/internet/2019/09/05/the-challenges-of-using-machine-learning-to-identify-gender-in-images/'>incluso estigmatizando las identidades binarias y no binarias</a>.</p>
              <p>De acuerdo con la precisión del entrenamiento, los sistemas de reconocimiento facial pueden ser más o menos discriminatorios. La decisión sobre el entrenamiento del algoritmo y las tasas de error con la que contará el software biométrico es tanto una cuestión técnica como política.</p>
            </Col>
          </Row>

        </Container>
      </div>
    </section>
  )
}

export default Working
