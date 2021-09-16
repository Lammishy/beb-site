import { ComponentRoute, ROUTE_NAMES, mainContentRoutes } from "routes/routes";

// Navigation around site
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import history from "store/history";

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

// Selector
import { getLoginStatusSelector } from 'selectors/selectors';

// Theme / styles 
import theme from "./styles/create-theme";
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";

// Pages
import AuthPage from "components/pages/AuthPage";
import AccessDeniedPage from "components/pages/AccessDeniedPage";
import NotFoundPage from "components/pages/NotFoundPage";

// Layout
import BottomNavbar from "components/BottmNavbar/BottomNavbar";

// Login-related
import { loginSuccess } from "actions/actions";


const renderPageWithAccessDeniedRedirect = (isLoggedIn: boolean, userOnMainContentRoute: boolean, Component: React.ElementType) => {
  return (
    (!isLoggedIn && userOnMainContentRoute) ?
      <Redirect to={ROUTE_NAMES.accessDenied} /> :
      <Component />
  )
}

const checkIfUserOnMainContentRoute = () => {
  const currentPath = window.location.pathname;
  return mainContentRoutes.some((route: ComponentRoute) => {
    return route.path === currentPath;
  })
}

const App = (props: any) => {
  /**
   * Handles Routing of pages 
   * Handles Authentication
   * Handles Styling themes
   */

  const dispatch = useDispatch();
  const [userOnMainContentRoute, setUserOnMainContentRoute] = useState(checkIfUserOnMainContentRoute());

  // get login status from store
  let isLoggedIn = useSelector(getLoginStatusSelector).isLoggedIn;
  // always returns false first when user refreshes page, 
  // because initial state in loginReducer is set to false

  useEffect(() => {
    // Re-evaluate if user on main content pages after login
    // necessary 
    // because App is not re-rendered when route changes.
    if (isLoggedIn) setUserOnMainContentRoute(checkIfUserOnMainContentRoute()); 
    // We need app to re-run when login status changes
    //  so we can re-evaluate if user is on main route

  }, [isLoggedIn, userOnMainContentRoute])

  /**
   * IMPORTANT CHECK HERE
   * Workaround for isLoggedIn returning false first 
   * when page refreshes 
   * but user has already loggedin
   */
  if (!isLoggedIn) {
    /**
     * Sets isLoggedIn to true if user has already logged in before. 
     * Prevents incorrect value of isLoggedIn value
     */
    // if login is false (on page refresh and store refreshes, or because user simply has not logged in before)
    let userLoggedInBefore = sessionStorage.getItem("loginStatus"); // check if user has logged in before

    // if user has logged in before, set isLoggedIn status to true
    // IMPORTANT. because on first render "isLoggedIn" would be FALSE (because loginReducer initial state is false)
    // therefore we manually set this to true here 
    // prevents AccessDeniedPage from rendering incorrectly
    isLoggedIn = userLoggedInBefore ? true : isLoggedIn;

    // update store that user HAS logged in before
    if (isLoggedIn) dispatch(loginSuccess());
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Switch>
          {/* Login Redirect to start page if already logged in */}
          <Route path={ROUTE_NAMES.login} exact>
            {isLoggedIn ? <Redirect to={ROUTE_NAMES.journeyStart} /> : <AuthPage />}
          </Route>

          {/* Redirect to access denied page if user tries to access main pages without first logging in */}
          {mainContentRoutes.map((route: ComponentRoute) => {
            return <Route path={route.path} exact>
              {renderPageWithAccessDeniedRedirect(isLoggedIn, userOnMainContentRoute, route.Component)}
            </Route>
          })}
          {/* <Route path={ROUTE_NAMES.journeyStart} exact>
            {(!isLoggedIn && userOnMainContentRoute) ? <Redirect to={ROUTE_NAMES.accessDenied} /> : <JourneyStartPage />}
          </Route> */}


          <Route path={ROUTE_NAMES.accessDenied} exact component={AccessDeniedPage} />
          {/* Fallback page that shows everytime user tries a link that does not exist */}
          <Route path="*" component={NotFoundPage} />

        </Switch>

        {isLoggedIn && userOnMainContentRoute && <BottomNavbar />}
      </Router>
    </ThemeProvider>
  );
}

export default App;




// {/* Always r(ender login page, no matter what url if not logged in */}
// <Router>
// <Switch>
//   {/* Redirect to start of journey if user already logged in */}
//   <Route path={ROUTE_NAMES.login} exact>
//     {isLoggedIn ? <Redirect to={ROUTE_NAMES.journeyStart} /> : <AuthPage />}
//   </Route>

//   {/* Direct to Access Denied page if user tries to access sites when not logged in yet */}
//   <ProtectedRouteToAccessDenied path={ROUTE_NAMES.journeyStart} component={JourneyStartPage}/>

//   {/* Fallback / error sites */}
//   <Route exact path={ROUTE_NAMES.accessDenied} component={AccessDeniedPage} />
//   <Route path="*" component={NotFoundPage}/>

//   {isLoggedIn && <BottomNavbar />}
// </Switch>
// </Router>)