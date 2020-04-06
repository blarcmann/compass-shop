import {
  INITIALIZED,
  CLEAR,
  CREATE_PRODUCT,
  ALL_PRODUCTS,
  SINGLE_PRODUCT,
  ADDED_TO_CART
} from '../constants';
import axios from 'axios';
import toaster from "toasted-notes";
import { BASE_URL } from '../constants/mock';
const url = `${BASE_URL}/products`;

export function createProduct(props, payload) {
  const userToken = localStorage.getItem('csUserToken');
  return (dispatch) => {
    dispatch(initialized());
    axios.post(`${url}/add_product`, payload, {
      headers: {
        'Authorization': userToken
      }
    })
      .then((response) => {
        if (response.data.success === false) {
          return console.log(response, 'not successful');
        }
        const product = response.data;
        dispatch(productCreated(product));
        dispatch(clear());
        props.history.push('/shop');
      })
      .catch(error => {
        console.log('catch error register', error.message);
        throw (error);
      })
  }
}

export function fetchProducts() {
  return (dispatch) => {
    dispatch(clear());
    axios.get(`${url}/all`)
      .then(response => {
        if (response.data.success === false) {
          alert(response.status);
          return console.log(response, 'not successful');
        }
        const payload = response.data.products;
        dispatch(allProducts(payload))
      })
  }
}

export function fetchProduct(id) {
  return (dispatch) => {
    dispatch(clear());
    axios.get(`${url}/${id}`)
      .then(response => {
        if (response.data.success === false) {
          alert(response.status);
          return console.log(response, 'not successful');
        }
        const product = response.data.product;
        dispatch(singleProduct(product));
      })
  }
}

export function addToCart(product) {
  return (dispatch) => {
    dispatch(initialized());
    const cart = localStorage.getItem('cart')
    if (cart) {
      const updatedCart = [...JSON.parse(cart), product];
      updatedCart.forEach((item) => {
        item.quantity = 1
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
      const updatedCart = [product];
      updatedCart.forEach((item) => {
        item.quantity = 1
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
    dispatch(addedToCart('w'));
    dispatch(initialized());
    toaster.notify('Added to cart', { duration: 2000, position: 'bottom-right' });
  }
}


function productCreated(data) {
  return {
    type: CREATE_PRODUCT,
    payload: data
  }
}

function allProducts(data) {
  return {
    type: ALL_PRODUCTS,
    payload: data
  }
}
function singleProduct(product) {
  return {
    type: SINGLE_PRODUCT,
    product
  }
}

function addedToCart(payload) {
  return {
    type: ADDED_TO_CART,
    payload
  }
}

function initialized() {
  return {
    type: INITIALIZED,
    payload: ''
  }
}

function clear() {
  return {
    type: CLEAR,
    payload: ''
  }
}