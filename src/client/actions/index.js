import axios from 'axios'
import * as types from './types'

export function loadData(url) {
  const request = axios.get(url)

  return dispatch => {
    dispatch({
      type: types.DATA_LOADING
    })

    request.then(result => dispatch({
      type: types.DATA_LOAD_SUCCESS,
      payload: result.data
    }))

      .catch(error => dispatch({
        type: types.DATA_LOAD_FAILURE,
        payload: error.message
      }))
  }
}
