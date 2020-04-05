import { CREATE_PRODUCT } from '../constants';
import axios from 'axios';
import { BASE_URL } from '../constants/mock';
const url = `${BASE_URL}/users`;

export function createProduct(props, payload) {
  return (dispatch) => {
    axios.post(`${url}/add_product`, payload)
      .then((response) => {
        if (response.data.success === false) {
          return console.log(response, 'not successful');
        }
        const user = response.data;
        dispatch(productCreated(user));
        props.history.push('/login');
      })
      .catch(error => {
        console.log('catch error register', error);
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