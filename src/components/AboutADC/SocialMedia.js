import React from 'react'

const SocialMedia = (props) => {
  return (
    <a href={props.url}>
      <img src={require('../../assets/img/' + props.image)} alt={props.imgAlt} height={props.imgHeight} />
    </a>
  )
}

export default SocialMedia
