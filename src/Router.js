import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";

//imports are lazy loaded for better performance and to reduce size of bundle.
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterUser = React.lazy(() => import("./containers/Registration"));
const AccommodationPage = React.lazy(() => import("./pages/AccommodationPage"));
const AccommodationListPage = React.lazy(() =>
  import("./pages/AccommodationListPage")
);
const ActivitiesToDoMainPage = React.lazy(() =>
  import("./pages/ActivitiesToDoMainPage")
);
const ActivitiesToDoListPage = React.lazy(() =>
  import("./pages/ActivitiesToDoListPage")
);

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
            path="/accommodation"
            render={() => {
              return <AccommodationPage />;
            }}
          />
          <Route
            exact
            path="/accommodationlist"
            render={() => {
              return <AccommodationListPage />;
            }}
          />
          <Route
            exact
            path="/activities"
            render={() => {
              return <ActivitiesToDoMainPage />;
            }}
          />
          <Route
            exact
            path="/activitieslist"
            render={() => {
              return <ActivitiesToDoListPage />;
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
