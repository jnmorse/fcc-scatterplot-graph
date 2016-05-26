import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'

/**
 * Configure store for redux
 *
 * @arg {object} initialState Initial State
 * @return {function} Store object
 */
export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
