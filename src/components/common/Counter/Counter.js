import React from 'react'

class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      level: 0,
      maxLevel: Number(this.props.max) || 100,
      velocity: Number(this.props.vel) || 20,
      units: this.props.units,
      k: 0
    };
  }

  componentDidMount() {
    this.timeOut = setTimeout(
      () => {
        this.timer = setInterval(
          () => this.updateLevel(),
          this.state.velocity
        );
      }, Number(this.props.delay)
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
    clearInterval(this.timer);
  }

  updateLevel() {
    let newK = this.state.k + (0.05-this.state.k) * 0.01;
    let currentLevel = this.state.level + (this.state.maxLevel-this.state.level) * newK;
    if(Math.round(currentLevel) >= this.state.maxLevel) {
      currentLevel = this.state.maxLevel;
      clearInterval(this.timer);
      if(this.props.onComplete) this.props.onComplete();
    }
    this.setState({ level: currentLevel, k: newK });
  }
  
  render() {

    return (
      <span className='Counter'>
        {Math.round(this.state.level)}{this.props.units}
      </span>
    )
  }
}

export default Counter