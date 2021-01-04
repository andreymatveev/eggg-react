import React from "react";
import {Redirect} from "react-router-dom";
import {NewsPage} from "../pages/NewsPage/NewsPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";

const routes = [
  {
    path: '/',
    component: () => <Redirect to="/news"/>,
  },
  {
    path: '/news',
    component: NewsPage,
    isPrivate: true,
  },
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '*',
    component: () => '404',
  },
];
export default routes;
