import React from "react";
import {getToken} from "./actions";

export const authInitialState = {
  token: getToken() || "",
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

export const newsInitialState = {
  news: [],
  loading: false,
};

export const NewsReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_NEWS':
      return {
        ...initialState,
        loading: true,
      };
    case 'NEWS_SUCCESS':
      return {
        ...initialState,
        news: action.payload,
        loading: false,
      };
    case 'NEWS_ERROR':
      return {
        ...initialState,
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const postPhotoInitialState = {
  loading: false,
  result: false,
};

export const PostPhotoReducer = (initialState, action) => {
  switch (action.type) {
    case 'REQUEST_POST_PHOTO':
      return {
        ...initialState,
        loading: true,
      };
    case 'POST_PHOTO_SUCCESS':
      return {
        ...initialState,
        result: action.payload,
        loaded: true,
        loading: false,
      };
    case 'POST_PHOTO_ERROR':
      return {
        ...initialState,
        loading: false,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
