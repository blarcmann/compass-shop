import { SIGN_UP } from '../constants';
import axios from 'axios';
import { BASE_URL } from '../constants/mock';
const url = `${BASE_URL}/users`;

export function signin(props, payload) {
  return (dispatch) => {
    axios.post(`${url}/register`, payload)
      .then((response) => {
        if (response.data.success === false) {
          return console.log(response, 'not successful');
        }
        const user = response.data;
        dispatch(profileCreated(user));
        props.history.push('/login');
      })
      .catch(error => {
        console.log('catch error register', error);
        throw (error);
      })
  }
}


function profileCreated(data) {
  return {
    type: SIGN_UP,
    payload: data
  }
}