import React from 'react';
import {authInitialState, AuthReducer, newsInitialState, NewsReducer} from "./reducer";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();
const NewsContext = React.createContext();

export function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}

export function useNewsContext() {
  const context = React.useContext(NewsContext);
  if (context === undefined) {
    throw new Error('useNewsContext has no context');
  }
  return context;
}

export const AuthProvider = ({children}) => {
  const [user, dispatch] = React.useReducer(AuthReducer, authInitialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

export const NewsProvider = (props) => {
  const [news, dispatch] = React.useReducer(NewsReducer, newsInitialState);

  return (
    <NewsContext.Provider value={{news, dispatch}}>
      {props.children}
    </NewsContext.Provider>
  );
};
