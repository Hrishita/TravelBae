import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";

//imports are lazy loaded for better performance and to reduce size of bundle.
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterUser = React.lazy(() => import("./containers/Registration"));
const ItineraryPage = React.lazy(() => import("./pages/ItineraryPage"));
const DayItineraryPage = React.lazy(() => import("./pages/DayItineraryPage"));

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
            path="/itinerary"
            render={() => {
              return <ItineraryPage />;
            }}
          />
          <Route
            exact
            path="/dayItinerary"
            render={() => {
              return <DayItineraryPage />;
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
