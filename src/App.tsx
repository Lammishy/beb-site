import React, { useState } from 'react';
import Button from "@material-ui/core/Button";

// Theme / styles 
import theme from "./styles/create-theme";
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from "@material-ui/core";

// Components
import AuthPage from "components/pages/AuthPage";

function App() {
  /**
   * Handles Routing of pages 
   * Global styles
   */

  const [loggedIn, setloggedIn] = useState<Boolean>(false);

  const handleLoginStatus = (loginSuccess: boolean) => {
    if (loginSuccess) setloggedIn(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {!loggedIn && <AuthPage handleLoginStatus={handleLoginStatus}/>}
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
