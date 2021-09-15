import routes from "routes/routes";

// Navigation around site
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useSelector } from 'react-redux';

// Selector
import { getLoginStatusSelector } from 'selectors/selectors';

// Theme / styles 
import theme from "./styles/create-theme";
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";

// Pages
import AuthPage from "components/pages/AuthPage";

// Layout
import BottomNavbar from "components/BottmNavbar/BottomNavbar";

function App() {
  /**
   * Handles Routing of pages 
   * Global styles
   */

  let isLoggedIn: boolean;
  isLoggedIn = useSelector(getLoginStatusSelector).isLoggedIn;

  // Lazy to redo login logic that's tied to redux store. so just doing a hacky check here if we have already logged in previously (workaround for isLoggedIn variable being destroyed when we refresh page / new link)
  if (!isLoggedIn) { 
    // If login was already successful previously, then loginStatus should be inside session storage.
    // Therefore, this code only really kicks in when user refreshes page / goes to new link (navigates around site)
    const hasLoggedInBefore = sessionStorage.getItem("loginStatus")
    isLoggedIn = hasLoggedInBefore ? true : isLoggedIn;
   }

  console.log("XJ App rendered");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Always render login page, no matter what url if not logged in */}
      {!isLoggedIn ?
        <AuthPage /> :
        <Router>
          <Switch>
            {routes.map((route: any) => <Route path={route.path} component={route.Component} />)}
          </Switch>
        </Router>}

      {isLoggedIn && <BottomNavbar />}
    </ThemeProvider>
  );
}

export default App;
