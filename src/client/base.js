import React, { Component } from 'react'
import { Header } from './components/Header'
import Chart from './components/chart'

class Base extends Component {
  render() {
    return (
      <div className='base-component'>
        <Header className='container-fluid' title='FCC Scatter Plot Graph'/>
        <Chart />
      </div>
    )
  }
}

export default Base
