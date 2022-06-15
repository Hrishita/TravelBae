import React, { useState, useContext, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";

//imports are lazy loaded for better performance and to reduce size of bundle.
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterUser = React.lazy(() => import("./containers/Registration"));
const Destinations = React.lazy(() => import("./pages/Destinations"));
const ThingsToCarryPage = React.lazy(() => import("./pages/ThingsToCarryPage"));

function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <HomePage />;
            }}
          />
          <Route exact path="/register" component={RegisterUser} />
          <Route
            exact
            path="/destinations"
            render={() => {
              return <Destinations />;
            }}
          />
          <Route
            exact
            path="/thingstocarry"
            render={() => {
              return <ThingsToCarryPage />;
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
