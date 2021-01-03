import React, {useReducer} from "react";
import {PZ_AUTH_CONSTANTS} from "../constants/pz.constants";

let token = localStorage.getItem(PZ_AUTH_CONSTANTS.tokenStorageName) || '';

export const initialState = {
  token: token || "",
  loading: false,
  errorMessage: null
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      console.log('success');
      return {
        ...initialState,
        token: action.payload.token,
        loading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
        token: ""
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
