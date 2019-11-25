import React from 'react'
import './IntroCamera360.scss'
import CounterBox from './IntroCounterBox'
import Cam from '../../assets/img/cam.svg'

const IntroCamera360 = (props) => {
  return (
    <div className={'IntroCamera360 ' + props.className}>
      <img src={Cam} height='67' alt='Cam' className='intro-cam' />
      <CounterBox max='79' className='cb-1' />
      <CounterBox max='89' className='cb-2' />
    </div>
  )
}

export default IntroCamera360
