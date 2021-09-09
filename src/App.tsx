import React from 'react';
import { useSelector } from 'react-redux';

// Selector
import { getLoginStatusSelector } from 'selectors/selectors';

// Theme / styles 
import theme from "./styles/create-theme";
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";

// Custom Components
import AuthPage from "components/pages/AuthPage";
import TodoPage from "components/pages/Todo/Todo";

function App() {
  /**
   * Handles Routing of pages 
   * Global styles
   */

  const { isLoggedIn } = useSelector(getLoginStatusSelector);

  console.log("Rendered");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {!isLoggedIn && <AuthPage />}
      {isLoggedIn && <TodoPage />}
      {/* <Page>
          <header>
            <h1>App initialized with Typescript and Material UI (not typography element)</h1>
            <div className="w-100 d-flex">
              <Button variant="contained" color="secondary" onClick={openDeadlineReminder}>Click Me!</Button>
            </div>
          </header>
      </Page> */}
    </ThemeProvider>

  );
}

export default App;
