import * as types from '../../actions/types'

export default function(
  state = {
    loading: false,
    results: [],
    error: ''
  },
  action
) {
  switch (action.type) {
  case types.DATA_LOADING:
    return { ...state, loading: true }
  case types.DATA_LOAD_SUCCESS:
    return {
      ...state,
      results: action.payload,
      loading: false
    }
  case types.DATA_LOAD_FAILURE:
    return {
      ...state,
      error: action.payload,
      loading: false
    }
  default:
    return state
  }
}
