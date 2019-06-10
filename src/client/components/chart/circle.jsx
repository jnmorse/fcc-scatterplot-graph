import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

    const beenDoping = this.props.racer.Doping !== ''

    return (
      <g>
        <circle
          onMouseEnter={this.props.showTooltip}
          onMouseLeave={this.props.hideTooltip}
          {...circlePos}
          fill={beenDoping ? color.doping.normal : color.noDoping.normal}
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
