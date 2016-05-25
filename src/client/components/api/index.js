import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadData } from '../../actions'

export default function Api(options) {
  return function(ComposedComponent) {
    class Api extends Component {
      static propTypes = {
        loadData: PropTypes.func.isRequired,
        results: PropTypes.array.isRequired,
        error: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired
      }

      componentWillMount() {
        this.props.loadData(options.url)
      }

      render() {
        const { results, error, loading } = this.props

        if (loading) {
          return (
            <div style={{
              display: 'flex',
              height: '100vh',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <h2>Loading...</h2>
            </div>
          )
        }

        else {
          if (results.length) {
            return <ComposedComponent data={results} />
          }

          else if (error) {
            return <div className='bg-danger'>{error}</div>
          }

          return null
        }
      }
    }

    const mapStateToProps = state => state.api

    return connect(mapStateToProps, { loadData })(Api)
  }
}
