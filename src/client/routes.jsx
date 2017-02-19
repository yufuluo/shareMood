import React from "react";
import { Route, IndexRedirect } from "react-router";
import Header from "./components/header";
import Calendar from "./components/calendar";

export const routes = (
  <Route path="/" component={Header}>
    <IndexRedirect to="/calendar" />
    <Route path="calendar" component={Calendar} />
  </Route>
);
