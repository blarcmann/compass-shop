import { INITIALIZED, ERROR, CLEAR, CREATE_PRODUCT } from '../constants';

const initialState = {
  initialized: false,
  error: false,
  product: {},
  allProducts: []
}

export default function product(state = initialState, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      let product = Object.assign({}, action.payload);
      return {
        ...state,
        product
      }
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