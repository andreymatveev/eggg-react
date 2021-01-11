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

export function getToken() {
  return localStorage.getItem(PZ_AUTH_CONSTANTS.tokenStorageName) || '';
}

export function isLoggedIn(authContext) {
  return authContext && !!authContext.token;
}

export async function getNewsList(dispatch, params) {
  dispatch({type: 'REQUEST_NEWS'});

  return axios
    .get(PZ_ENDPOINTS.news(), {
      params,
      headers: {...getAuthHeader()},
    })
    .then((response) => {
      if (response && response.data && Array.isArray(response.data.articles)) {
        dispatch({type: 'NEWS_SUCCESS', payload: response.data.articles});
        return response.data.articles;
      }
      dispatch({type: 'NEWS_ERROR'});
      return [];
    })
    .catch(() => {
      dispatch({type: 'NEWS_ERROR'});
      return [];
    });
}

export async function postPhoto(dispatch, params) {
  dispatch({type: 'REQUEST_POST_PHOTO'});

  return Promise.resolve().then(() => {
    dispatch({type: 'POST_PHOTO_SUCCESS', payload: true});
  });
  // return axios
  //   .post(PZ_ENDPOINTS.photo(), params, {
  //     headers: {...getAuthHeader()},
  //   })
  //   .then((response) => {
  //     dispatch({type: 'POST_PHOTO_SUCCESS', payload: true});
  //     return null;
  //   })
  //   .catch(() => {
  //     dispatch({type: 'POST_PHOTO_ERROR'});
  //     return null;
  //   });
}

function getAuthHeader() {
  return {
    [PZ_AUTH_CONSTANTS.tokenHeaderName]: `Bearer ${getToken()}`,
  };
}
