import {
  INITIALIZED,
  ERROR,
  CLEAR,
  CREATE_PRODUCT,
  SINGLE_PRODUCT,
  ALL_PRODUCTS,
  ADDED_TO_CART
} from '../constants';

const initialState = {
  initialized: false,
  error: false,
  product: {},
  singleProduct: {},
  allProducts: [],
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
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
    case ADDED_TO_CART:
      const cart = JSON.parse(localStorage.getItem('cart'))
      return {
        ...state,
        cart
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