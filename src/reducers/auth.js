import { INITIALIZED, ERROR, CLEAR } from '../constants';

const initialState = {
  initialized: false,
  error: false,
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case INITIALIZED:
      return {
        ...state,
        initialized: true,
      }
    case ERROR:
      return {
        ...state,
        error: true,
        initialized: false,
      }
    case CLEAR:
      return {
        ...state,
        error: false,
        initialized: false,
      }
    default:
      return state;
  }
}