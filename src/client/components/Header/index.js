import React from 'react'
import PropTypes from 'prop-types'
import { SubTitle } from './sub-title.js'

export const Header = (props) => {
  const {className, style, title, subtitle} = props

  return (
    <header className={className} style={style}>
      <h1 className='col-xs-12'>
        <span>{title}</span>
        <SubTitle title={subtitle} />
      </h1>
    </header>
  )
}

Header.displayName = 'Header'

Header.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  subtitle: PropTypes.string
}
