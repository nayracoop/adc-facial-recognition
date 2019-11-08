import React from 'react'

const CardWithImage = (props) => {
  return (
    <div class={'card mb-4 w-100 ' + props.align}>
      <div class='row no-gutters'>
        <div class='col-lg-4'>
          <img src={props.image} height={props.imgHeight} class='card-img' alt={props.imgAlt} />
        </div>
        <div class='col-lg-7 offset-lg-1'>
          <div class='card-body'>
            <span class='d-flex mb-4'>{props.step}</span>
            <p class='card-text'>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardWithImage
