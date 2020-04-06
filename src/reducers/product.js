import { INITIALIZED, ERROR, CLEAR, CREATE_PRODUCT, SINGLE_PRODUCT, ALL_PRODUCTS } from '../constants';

const initialState = {
  initialized: false,
  error: false,
  product: {},
  singleProduct: {},
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
    case SINGLE_PRODUCT:
      let singleProduct = Object.assign({}, action.product);
      return {
        ...state,
        singleProduct
      }
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload]
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