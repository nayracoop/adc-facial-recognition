import React from 'react'
import './App.scss'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Working from '../components/Working/Working'
import CardWithImage from '../components/Working/CardWithImage'
import TextWithImage from '../components/Working/TextWithImage'
import Risks from '../components/Risks/Risks'
import AboutADC from '../components/AboutADC/AboutADC'
import Footer from '../components/Footer/Footer'

class App extends React.Component {
  render () {
    const cardWithImageContent = [
      {image: 'biometric-1.svg', imageHeight: '163', step: '1', align: 'col-lg-6 offset-lg-1', text: 'El reconocimiento facial funciona mediante un software alimentado por un algoritmo que está entrenado para reconocer rostros e individualizar sus rasgos faciales.'},
      {image: 'biometric-2.svg', imageHeight: '163', step: '2', align: 'col-lg-6 offset-lg-5', text: 'Una vez que se realiza el mapeo de los rasgos faciales, el software genera una plantilla con la representación matemática para ese rostro único. Esta plantilla es el dato biométrico dentro de la tecnología de reconocimiento facial.'},
      {image: 'biometric-3.svg', imageHeight: '114', step: '3', align: 'col-lg-6 offset-lg-1', text: 'Con la plantilla biométrica el rostro ya puede ser leído por una computadora y contrastado con una base de datos que almacene todo un conjunto de rostros.'},
      {image: 'biometric-4.svg', imageHeight: '116', step: '4', align: 'col-lg-6 offset-lg-5', text: 'El software puede llevar a cabo una comparación en tiempo real con todos los rostros almacenados en esta base de datos para determinar si una persona se encuentra almacenada allí.'},
      {image: 'biometric-5.svg', imageHeight: '129', step: '5', align: 'col-lg-6 offset-lg-1', text: 'La biometría es un proceso de probabilidades, por lo que una vez que el software encuentra una potencial coincidencia, arroja un porcentaje que define qué tan probable es que correspondan a la misma persona.'}
    ].map(e => { return <CardWithImage image={require('../assets/img/' + e.image)} imageHeight={e.imageHeight} step={e.step} align={e.align} text={e.text} /> })

    const TextWithImageContent = [
      {image: 'difference-1.svg', imageHeight: '158', imageAlt: '', class: 'col-lg-3 offset-lg-3', text: 'Mediante la verificación se contrasta un dato biométrico con otro almacenado en una base de datos correspondiente exclusivamente a la persona que está siendo verificada. (1:1)'},
      {image: 'difference-2.svg', imageHeight: '158', imageAlt: '', class: 'col-lg-3', text: 'La identificación, por el contrario, es cuando un dato biométrico es contrastado con la totalidad de las plantillas biométricas almacenadas en la base de datos (1:n). Por eso cuando se individualiza a una persona en una multitud mediante reconocimiento facial, decimos que se realizó un proceso de identificación.'}
    ].map(e => { return <TextWithImage image={e.image} imageHeight={e.imageHeight} class={e.class} imageAlt={e.imageAlt} text={e.text} /> })

    return (
      <div className='App'>
        <Header />
        <Intro />
        <Working cardsList={cardWithImageContent} textWithImage={TextWithImageContent} />
        <Risks />
        <AboutADC />
        <Footer />
      </div>
    )
  }
}

export default App
