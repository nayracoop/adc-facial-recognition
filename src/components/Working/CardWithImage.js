import React from 'react'

const CardWithImage = (props) => {
  return (
    <div className={'card mb-4 w-100 ' + props.align}>
      <div className='row no-gutters'>
        <div className='col mob-step-cont mob-only'>
          <div className='mob-step-inner step'>
            <span className='d-flex mob-step'>{props.step}</span>
          </div>
        </div>
        <div className='col-lg-5'>
          <div className='card-img-cont'>
            <img src={props.image} height={props.imgHeight} className='card-img' alt={props.imgAlt} />
          </div>
        </div>
        <div className='col-lg-6 offset-lg-1'>
          <div className='card-body'>
            <span className='d-flex mb-4 step desk-step desk-only'>{props.step}</span>
            <p className='card-text'>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardWithImage
