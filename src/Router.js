import React, { useState, useContext, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";


//imports are lazy loaded for better performance and to reduce size of bundle.
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterUser = React.lazy(() => import("./containers/Registration"));

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
        
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
