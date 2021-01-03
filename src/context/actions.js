import axios from "axios";
import {PZ_AUTH_CONSTANTS} from "../constants/pz.constants";
import {PZ_ENDPOINTS} from "../constants/pz-endpoints.constants";

export async function login(dispatch, {name, password}) {
  dispatch({type: 'REQUEST_LOGIN'});
  return axios
    .post(PZ_ENDPOINTS.login(), {
      name,
      password
    }, {
      responseType: 'json',
    })
    .then((response) => {
      if (response.data && response.data.token) {
        localStorage.setItem(PZ_AUTH_CONSTANTS.tokenStorageName, response.data.token);
        dispatch({type: 'LOGIN_SUCCESS', payload: response.data});
        return response;
      }
      dispatch({type: 'LOGIN_ERROR'});
      return response;
    })
    .catch(() => {
      dispatch({type: 'LOGIN_ERROR'});
      return logout(dispatch);
    });
}

export async function logout(dispatch) {
  dispatch({type: 'LOGOUT'});
  localStorage.removeItem(PZ_AUTH_CONSTANTS.tokenStorageName);
}

export function isLoggedIn(authContext) {
  return authContext && !!authContext.token;
}

