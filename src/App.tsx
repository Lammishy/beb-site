// Navigation around site
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { ComponentRoute, ROUTE_NAMES, mainContentRoutes } from "routes/routes";

// Hooks
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, Suspense } from "react";

// Selector
import { getLoginStatusSelector } from 'selectors/selectors';

// Login-related
import { loginSuccess } from "actions/actions";

/**
 * Components
 */
// Pages
import AuthPage from "components/pages/AuthPage";
import AccessDeniedPage from "components/pages/AccessDeniedPage";
import NotFoundPage from "components/pages/NotFoundPage";

// Website UIs
import BottomNavbar from "components/BottmNavbar/BottomNavbar";
import SignOut from "components/SignOut/SignOut";
import LoadingSpinner from "components/layout/LoadingSpinner";


/**
 * Theme / Styles
 */
import theme from "./styles/create-theme";
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";

/**
 * Animation
 */
import { AnimatePresence } from "framer-motion";


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
  const location = useLocation();

  const [userOnMainContentRoute, setUserOnMainContentRoute] = useState(checkIfUserOnMainContentRoute());

  // get login status from store
  let isLoggedIn = useSelector(getLoginStatusSelector).isLoggedIn;
  // always returns false first when user refreshes page, 
  // because initial state in loginReducer is set to false

  useEffect(() => {
    // Re-evaluate whenever location changes
    setUserOnMainContentRoute(checkIfUserOnMainContentRoute());

  }, [location.pathname]);

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

    let userLoggedInBeforeBool = userLoggedInBefore === "false" ? false : true; // convert to bool. sessionstorage only allows storing of string values
    isLoggedIn = userLoggedInBeforeBool ? true : false;

    // update store that user HAS logged in before
    if (isLoggedIn) dispatch(loginSuccess());
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoggedIn && userOnMainContentRoute && <SignOut />}
      <Suspense fallback={<LoadingSpinner />}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            {/* Login Redirect to start page (first page of mainContentRoutes) if already logged in */}
            <Route path={ROUTE_NAMES.login} key={ROUTE_NAMES.login} exact>
              {isLoggedIn ? <Redirect to={mainContentRoutes[0].path} /> : <AuthPage />}
            </Route>

            {/* Redirect to access denied page if user tries to access main pages without first logging in */}
            {mainContentRoutes.map((route: ComponentRoute) => {
              return <Route key={route.path} path={route.path} exact>
                {renderPageWithAccessDeniedRedirect(isLoggedIn, userOnMainContentRoute, route.Component)}
              </Route>
            })}

            {/* Fallback pages */}
            <Route path={ROUTE_NAMES.accessDenied} key={ROUTE_NAMES.accessDenied} component={AccessDeniedPage} />
            <Route path={ROUTE_NAMES.notFound} key={ROUTE_NAMES.notFound} exact component={NotFoundPage} />
            <Route path="*">
              <Redirect to={ROUTE_NAMES.notFound} />
            </Route>
          </Switch>
        </AnimatePresence>
      </Suspense>
      {isLoggedIn && userOnMainContentRoute && <BottomNavbar />}
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