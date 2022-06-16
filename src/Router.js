import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Write from "./pages/WriteBlog";
//imports are lazy loaded for better performance and to reduce size of bundle.
const HomePage = React.lazy(() => import("./pages/HomePage"));
const RegisterUser = React.lazy(() => import("./containers/Registration"));
const LoginUser = React.lazy(() => import("./containers/Login"));
const ItineraryPage = React.lazy(() =>
  import("./pages/Itinerary/ItineraryPage")
);
const BucketList = React.lazy(() => import("./pages/BucketList"));
const DayItineraryPage = React.lazy(() =>
  import("./pages/Itinerary/DayItineraryPage")
);
const CityItineraryPage = React.lazy(() =>
  import("./pages/Itinerary/CityItineraryPage")
);
const TripPlannerPage = React.lazy(() => import("./pages/TripPlannerPage"));
const City = React.lazy(() => import("./pages/Plan/City"));
const Travel = React.lazy(() => import("./pages/Plan/Travel"));
const Itinerary = React.lazy(() => import("./pages/Plan/Itinerary"));
const Destinations = React.lazy(() => import("./pages/Destinations"));
const Destination = React.lazy(() => import("./pages/Destination"));
const ThingsToCarryPage = React.lazy(() => import("./pages/ThingsToCarryPage"));
const AccommodationListPage = React.lazy(() =>
  import("./pages/AccommodationListPage")
);
const AccommodationPage = React.lazy(() => import("./pages/AccommodationPage"));
const ActivitiesToDoListPage = React.lazy(() =>
  import("./pages/ActivitiesToDoListPage")
);
const ActivitiesToDoMainPage = React.lazy(() =>
  import("./pages/ActivitiesToDoMainPage")
);

const Trips = React.lazy(() => import("./pages/UserDashboardTrip"));
const Blogs = React.lazy(() => import("./pages/UserDashboardBlog"));
const SearchFlights = React.lazy(() => import("./pages/SearchFlights"));
const ViewBlog = React.lazy(() => import("./pages/ViewBlog"));
const Flags = React.lazy(() => import("./pages/UserDashboardFlag"));
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
          <Route exact path="/login" component={LoginUser} />

          <Route
            exact
            path="/destinations"
            render={() => {
              return <Destinations />;
            }}
          />
          <Route
            exact
            path="/itinerary"
            render={() => {
              return <ItineraryPage />;
            }}
          />
          <Route
            exact
            path="/cityItinerary"
            render={() => {
              return <CityItineraryPage />;
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
            path="/accommodationlist"
            render={() => {
              return <AccommodationListPage />;
            }}
          />
          <Route
            exact
            path="/accommodation"
            render={() => {
              return <AccommodationPage />;
            }}
          />
          <Route
            exact
            path="/userdashbord-trips"
            render={() => {
              return <Trips />;
            }}
          />

          <Route
            exact
            path="/userdashbord-blogs"
            render={() => {
              return <Blogs />;
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
            path="/activitylist"
            render={() => {
              return <ActivitiesToDoListPage />;
            }}
          />

          <Route
            exact
            path="/flights"
            render={() => {
              return <SearchFlights />;
            }}
          />

          <Route
            exact
            path="/view-blogs"
            render={() => {
              return <ViewBlog />;
            }}
          />
          <Route
            exact
            path="/write-blog"
            render={() => {
              return <Write />;
            }}
          />
          <Route
            exact
            path="/bucket-list"
            render={() => {
              return <BucketList />;
            }}
          />
          <Route
            exact
            path="/destination"
            render={() => {
              return <Destination />;
            }}
          />
          <Route
            exact
            path="/userdashboard-flags"
            render={() => {
              return <Flags />;
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
