import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

class CardWithImage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  onChangeVisibility = (isVisible) => {
    if (!this.state.visible && isVisible) {
      this.setState({visible: isVisible})
    }
  }

  render () {
    return (
      <VisibilitySensor partialVisibility onChange={this.onChangeVisibility}>
        {({isVisible}) =>
          <div className={'card mb-4 w-100 ' + this.props.align + (isVisible || this.state.visible ? ' in' : '')}>
            <div className='row no-gutters'>
              <div className='col mob-step-cont mob-only'>
                <div className='mob-step-inner step'>
                  <span className='d-flex mob-step'>{this.props.step}</span>
                </div>
              </div>
              <div className='col-lg-5'>
                <div className='card-img-cont'>
                  <img src={this.props.image} height={this.props.imgHeight} className='card-img' alt={this.props.imgAlt} />
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='card-body'>
                  <span className='d-flex mb-4 step desk-step desk-only'>{this.props.step}</span>
                  <p className='card-text'>{this.props.text}</p>
                </div>
              </div>
            </div>
          </div>
        }
      </VisibilitySensor>
    )
  }
}

export default CardWithImage
