import React from 'react'
import PropTypes from 'prop-types'

export const SubTitle = (props) => {
  const { title } = props

  return <small>{title}</small>
}

SubTitle.displayName = 'SubTitle'

SubTitle.propTypes = {
  title: PropTypes.string
}
