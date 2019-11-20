import React from 'react'

const SocialMedia = (props) => {
  return (
    <a href={props.url} target='_blank' rel='noopener noreferrer'>
      <img src={require('../../assets/img/' + props.image)} alt={props.imgAlt} height={props.imgHeight} />
    </a>
  )
}

export default SocialMedia
