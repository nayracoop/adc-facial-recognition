import React from 'react'
import './App.scss'
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Working from '../components/Working/Working'
import CardWithImage from '../components/Working/CardWithImage'
import TextWithImage from '../components/Working/TextWithImage'
import RisksCard from '../components/Risks/RisksCard'
import Risks from '../components/Risks/Risks'
import AboutADC from '../components/AboutADC/AboutADC'
import SocialMedia from '../components/AboutADC/SocialMedia'
import Footer from '../components/Footer/Footer'

class App extends React.Component {
  render () {
    const cardWithImageContent = [
      {image: 'biometric-1.svg', imgHeight: '163', step: '1', align: 'col-lg-6 offset-lg-1 inner-card-img square-img', text: 'El reconocimiento facial funciona mediante un software alimentado por un algoritmo que está entrenado para reconocer rostros e individualizar sus rasgos faciales.'},
      {image: 'biometric-2.svg', imgHeight: '163', step: '2', align: 'col-lg-6 offset-lg-5 inner-card-img square-img', text: 'Una vez que se realiza el mapeo de los rasgos faciales, el software genera una plantilla con la representación matemática para ese rostro único. Esta plantilla es el dato biométrico dentro de la tecnología de reconocimiento facial.'},
      {image: 'biometric-3.svg', imgHeight: '114', step: '3', align: 'col-lg-6 offset-lg-1 inner-card-img', text: 'Con la plantilla biométrica el rostro ya puede ser leído por una computadora y contrastado con una base de datos que almacene todo un conjunto de rostros.'},
      {image: 'biometric-4.svg', imgHeight: '116', step: '4', align: 'col-lg-6 offset-lg-5 inner-card-img', text: 'El software puede llevar a cabo una comparación en tiempo real con todos los rostros almacenados en esta base de datos para determinar si una persona se encuentra almacenada allí.'},
      {image: 'biometric-5.svg', imgHeight: '129', step: '5', align: 'col-lg-6 offset-lg-1 rect-img inner-card-img', text: 'La biometría es un proceso de probabilidades, por lo que una vez que el software encuentra una potencial coincidencia, arroja un porcentaje que define qué tan probable es que correspondan a la misma persona.'}
    ].map(e => { return <CardWithImage image={require('../assets/img/' + e.image)} imgHeight={e.imgHeight} step={e.step} align={e.align} text={e.text} /> })

    const TextWithImageContent = [
      {image: 'verification.svg', imgHeight: '158', imgAlt: 'Verificación', imgClass: 'pb-4 desk-only', class: 'col-lg-3 col-12 offset-lg-3 verification', text: 'Mediante la verificación se contrasta un dato biométrico con otro almacenado en una base de datos correspondiente exclusivamente a la persona que está siendo verificada. (1:1)', mobImage: 'verification-mob.svg', mobImgAlt: 'Verificación', mobImgClass: 'pb-4 mob-only'},
      {image: 'recognition.svg', imgHeight: '158', imgAlt: 'Identificación', imgClass: 'w-100 pb-4', class: 'col-lg-3 col-12 recognition', text: 'La identificación, por el contrario, es cuando un dato biométrico es contrastado con la totalidad de las plantillas biométricas almacenadas en la base de datos (1:n). Por eso cuando se individualiza a una persona en una multitud mediante reconocimiento facial, decimos que se realizó un proceso de identificación.'}
    ].map(e => { return <TextWithImage image={e.image} imgHeight={e.imgHeight} imgClass={e.imgClass} class={e.class} title={e.title} imgAlt={e.imgAlt} mobImage={e.mobImage} mobImgAlt={e.mobImgAlt} mobImgClass={e.mobImgClass} text={e.text} /> })

    const RisksCardContent = [
      { image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Uso encubierto - no se requiere consentimiento.', colClass: 'col-lg-4 offset-3' },
      { image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'No hay base legal en Argentina que regule específicamente el uso.', colClass: 'col-lg-4 offset-3' },
      { image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Filtración/hackeo de la base de datos por una pobre o nula implementación de medidas de seguridad.', colClass: 'col-lg-4 offset-3' },
      { image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Uso ubicuo - puede implementarse en tiempo real o utilizar fotografías / videos que hayan sido capturadas / grabados en el pasado.', colClass: 'col-lg-4 offset-3' },
      { image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Inversión de la carga de la prueba: todos son culpables hasta que el sistema /algoritmo diga que no lo son. Afectación a garantías del debido proceso.', colClass: 'col-lg-4 offset-3' },
      { image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Permite individualizar y realizar un seguimiento preciso de cada persona.', colClass: 'col-lg-4 offset-3' },
      { image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Discriminación: la tecnología es imprecisa y arroja un alto porcentaje de falsos positivos contra personas de tez no blanca y mujeres (además de otras comunidades vulnerables).', colClass: 'col-lg-4 offset-3' },
      { image: 'risks-icon.svg', imgHeight: '61', imgWidth: '61', imgAlt: 'icono riesgos', text: 'Facilita la vigilancia masiva en forma automatizada: los algoritmos de reconocimiento facial deben necesariamente detectar todas las caras que ven las cámaras en donde están implementados, por eso, por más que tu nombre no esté vinculado a tu rostro, el software igualmente te está reconociendo.', colClass: 'col-lg-4 offset-3' }
    ].map(e => { return <RisksCard image={e.image} imgHeight={e.imgHeight} imgWidth={e.imgWidth} imgAlt={e.imgAlt} text={e.text} colClass={e.colClass} /> })

    const socialIconsContent = [
      { image: 'social-fb.svg', imgAlt: 'facebook icon', imgHeight: '56', url: '#' },
      { image: 'social-ig.svg', imgAlt: 'instagram icon', imgHeight: '56', url: '#' },
      { image: 'social-link.svg', imgAlt: 'linkedin icon', imgHeight: '56', url: '#' },
      { image: 'social-tw.svg', imgAlt: 'twitter icon', imgHeight: '56', url: '#' },
      { image: 'social-yt.svg', imgAlt: 'youtube icon', imgHeight: '56', url: '#' }
    ].map(e => { return <SocialMedia image={e.image} imgHeight={e.imgHeight} imgAlt={e.imgAlt} url={e.url} /> })

    const shareIconsContent = [
      { image: 'share-fb.svg', imgAlt: 'facebook icon', imgHeight: '40', url: '#' },
      { image: 'share-tw.svg', imgAlt: 'twitter icon', imgHeight: '40', url: '#' },
      { image: 'share-wsp.svg', imgAlt: 'whatsapp icon', imgHeight: '40', url: '#' },
      { image: 'share-print.svg', imgAlt: 'printer icon', imgHeight: '40', url: '#' }
    ].map(e => { return <SocialMedia image={e.image} imgHeight={e.imgHeight} imgAlt={e.imgAlt} url={e.url} /> })

    return (
      <div className='App'>
        <Header />
        <Intro />
        <Working cardsList={cardWithImageContent} textWithImage={TextWithImageContent} />
        <Risks riskCardsList={RisksCardContent} />
        <AboutADC shareIcons={shareIconsContent} socialList={socialIconsContent} />
        <Footer />
      </div>
    )
  }
}

export default App
