import React, { Component, PropTypes } from 'react'
import * as color from './colors'

class Circle extends Component {
  state = {
    displayTooltip: false
  }

  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    racer: PropTypes.object.isRequired,
    showTooltip: PropTypes.func.isRequired,
    hideTooltip: PropTypes.func.isRequired
  }

  showTooltip() {
    this.setState({
      displayTooltip: true
    })
  }

  hideTooltip() {
    this.setState({
      displayTooltip: false
    })
  }

  render() {
    const circlePos = {
      cx: this.props.x,
      cy: this.props.y
    }

    const textPos = {
      x: circlePos.cx + 6,
      y: circlePos.cy + 5
    }

    return (
      <g
        onMouseEnter={this.props.showTooltip}
        onMouseLeave={this.props.hideTooltip}
      >
        <circle
          {...circlePos}
          fill={this.props.Doping ? color.doping.normal : color.noDoping.normal}
          r='5'
        />

        <text {...textPos}>
          {this.props.racer.Name}
        </text>
      </g>
    )
  }
}

export default Circle
