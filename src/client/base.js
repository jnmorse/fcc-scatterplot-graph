import React, { Component } from 'react'
import { Header } from './components/Header'

class Base extends Component {
  render() {
    return (
      <div className='base-component'>
        <Header className='container-fluid' subtitle='Webpack' title='React'/>
        <p>
          <i className='glyphicon glyphicon-road' />
          Time to write some code, and chew bubblegum. Only I'm all out of gum.
        </p>
      </div>
    )
  }
}

export default Base
