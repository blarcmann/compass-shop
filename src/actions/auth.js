import { LOGIN, INITIALIZED, CLEAR } from '../constants';
import axios from 'axios';
import toaster from "toasted-notes";
import { BASE_URL } from '../constants/mock';
const url = `${BASE_URL}/users`;

export function signin(payload) {
  console.log(payload);
  return (dispatch) => {
    dispatch(initialized());
    axios.post(`${url}/signup`, payload)
      .then((response) => {
        if (response.data.success === false) {
          dispatch(clear());
          return console.log(response, 'not successful');
        }
        toaster.notify('Success', { duration: 2000, position: 'bottom-right' });
        dispatch(clear());
        console.log(response.data);
      })
      .catch(error => {
        dispatch(clear());
        console.log('catch error register', error);
        throw (error);
      })
  }
}

export function login(props, payload) {
  return (dispatch) => {
    axios.post(`${url}/login`, payload)
      .then((response) => {
        if (response.data.success === false) {
          return console.log(response, 'not successful');
        }
        const res = response.data;
        localStorage.setItem('userToken', res.token);
        dispatch(saveUserAuth(res));
        props.history.push('/shop');
      })
      .catch(error => {
        console.log('catch error register', error);
        throw (error);
      })
  }
}

function saveUserAuth(data) {
  return {
    type: LOGIN,
    payload: data
  };
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