// Hooks
import { useSelector } from "react-redux";

// App Navigation
import { ROUTE_NAMES } from "routes/routes";
import { useHistory } from "react-router-dom";

// Layout
import Page from "components/layout/Page/Page";

// Component UI
import { Typography } from "@material-ui/core";
import AlertButton from "components/layout/AlertButton";
import CardMedia from "@material-ui/core/CardMedia";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Animation
import MotionWrapper from "animations/MotionWrapper";

// Assets
import doubleChinBeb from "assets/double-chin-beb.jpg";

// Data retrival / posting
import { getLoginStatusSelector } from "selectors/selectors";

const AccessDeniedPage = (props: any) => {
  // Styles
  const h2Styles = makeStyles((theme) => ({
    root: {
      textAlign: "center",
      marginBottom: "50px",
      fontWeight: 700,
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5rem",
        marginBottom: "30px",
      },
    },
  }))();

  const imgStyle = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: 200
      }
    }
  }))();

  const buttonStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7rem"
      }
    },
  }))();

  let history = useHistory();
  const isLoggedIn = useSelector(getLoginStatusSelector).isLoggedIn;

  const goBackToHomePageHandler = (event: any) => {
    // sends user back to login page. if already logged in, will send to home page (through redirect in router)
    history.push(ROUTE_NAMES.login);
  };

  return (
    <Page>
      <Typography variant="h2" className={h2Styles.root}>
        You are NOT allowed to view this page!!
        <br />
        <br />
        LEAVE AT ONCE!!
      </Typography>

      <MotionWrapper spring={true}>
        <CardMedia image={doubleChinBeb} component="img" className={imgStyle.root} />
      </MotionWrapper>

      {!isLoggedIn && (
        <Typography variant="h6" className={h2Styles.root}>
          Do you not realize you are not logged in!!
        </Typography>
      )}

      <AlertButton onClick={goBackToHomePageHandler} className={buttonStyles.root}>
        Go back to whence you came, plebian!!
      </AlertButton>
    </Page>
  );
};

export default AccessDeniedPage;
