import React, {useState, createContext} from 'react';
import axios from "axios";
import {PZ_ENDPOINTS} from "../constants/pz-endpoints.constants";
import {PZ_AUTH_CONSTANTS} from "../constants/pz.constants";

const AuthContext = createContext({
  isLoggedIn: false,
});

const AuthContextProvider = (props) => {
  return (
    <AuthContext.Provider value={{isLoggedIn: false}}>{props.children}</AuthContext.Provider>
  );
};

export {AuthContextProvider, AuthContext}
