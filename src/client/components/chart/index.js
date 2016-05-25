import React, { Component, PropTypes } from 'react'
import d3 from 'd3'
import api from '../api'

class Chart extends Component {
  _svg = {
    width: 1280,
    height: 720
  }

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  componentWillMount() {
    const data = this.props.data
    console.log(data)

    let minValue = d3.min(data, d => d.seconds * 1000)
    console.log(minValue)

    const xScale = d3.time.scale()
      .domain(d3.extent(data, d => d.Seconds * 1000))
      .range([1200, 50])

    const yScale = d3.scale.linear()
      .domain(d3.extent(data, d => d.Place))
      .range([20, 700])

    console.log(xScale(new Date(2210 * 1000)), yScale(1))

    this._scales = { xScale, yScale }
  }

  componentDidMount() {
    const xAxis = d3.svg.axis()
      .scale(this._scales.xScale)
      .tickFormat(d3.time.format('%M:%S'))

    const yAxis = d3.svg.axis()
      .orient('left')
      .scale(this._scales.yScale)

    d3.select(this._xAxis)
      .call(xAxis)

    d3.select(this._yAxis)
      .call(yAxis)
  }

  render() {
    return (
      <svg {...this._svg}>
        <circle
          cx={10}
          cy={10}
          r={5}
          fill={'green'}
        />

        <g
          className='y-axis axis'
          ref={yAxis => { this._yAxis = yAxis}}
          transform='translate(50, 0)'
        />

        <g
          className='x-axis axis'
          ref={xAxis => { this._xAxis = xAxis}}
          transform='translate(0, 700)'
        />
      </svg>
    )
  }
}

export default api({
  url: 'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
})(Chart)
