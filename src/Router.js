import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";

//imports are lazy loaded for better performance and to reduce size of bundle.
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterUser = React.lazy(() => import("./containers/Registration"));
const ItineraryPage = React.lazy(() => import("./pages/ItineraryPage"));
const DayItineraryPage = React.lazy(() => import("./pages/DayItineraryPage"));
const TripPlannerPage = React.lazy(() => import("./pages/TripPlannerPage"));
const City = React.lazy(() => import("./pages/Plan/City"));
const Travel = React.lazy(() => import("./pages/Plan/Travel"));
const Itinerary = React.lazy(() => import("./pages/Plan/Itinerary"));
const Destinations = React.lazy(() => import("./pages/Destinations"));
const ThingsToCarryPage = React.lazy(() => import("./pages/ThingsToCarryPage"));
const Trips = React.lazy(() => import("./pages/UserDashbordTrip"));

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
            path="/destinations"
            render={() => {
              return <Destinations />;
            }}
          />
          <Route
            exact
            path="/dayItinerary"
            render={() => {
              return <DayItineraryPage />;
            }}
          />
          <Route
            exact
            path="/trip-planner"
            render={() => {
              return <TripPlannerPage />;
            }}
          />
          <Route
            exact
            path="/trip-planner/plan"
            render={() => {
              return <City />;
            }}
          />
          <Route
            exact
            path="/trip-planner/travel"
            render={() => {
              return <Travel />;
            }}
          />
          <Route
            exact
            path="/trip-planner/itinerary"
            render={() => {
              return <Itinerary />;
            }}
          />
          <Route
            exact
            path="/thingstocarry"
            render={() => {
              return <ThingsToCarryPage />;
            }}
          />

          <Route
            exact
            path="/userdashbord-trips"
            render={() => {
              return <Trips />;
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
