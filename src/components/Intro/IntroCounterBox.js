import React from 'react'
import './IntroCounterBox.scss'
import Counter from '../common/Counter/Counter'
import VisibilitySensor from 'react-visibility-sensor'

const IntroCounterBox = (props) => {
  return (
    <VisibilitySensor partialVisibility>
      {({isVisible}) =>
        <div className={'IntroCounterBox ' + props.className}>
          {(isVisible && <Counter max={props.max} units='%' delay={Math.random() * 100} />) || <span className='Counter'>0%</span>}
          <span>Coincidencia</span>
        </div>
      }
    </VisibilitySensor>
  )
}

export default IntroCounterBox
