import { INITIALIZED, CLEAR, CREATE_PRODUCT } from '../constants';
import axios from 'axios';
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


function productCreated(data) {
  return {
    type: CREATE_PRODUCT,
    payload: data
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