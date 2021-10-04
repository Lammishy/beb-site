// Navigation
import { ROUTE_NAMES, mainContentRoutes } from "routes/routes";
import { useHistory } from "react-router-dom";

// Layout
import Page from "components/layout/Page/Page";

// Alert Button
import AlertButton from "components/layout/AlertButton";

// Common UI Components
import { ButtonGroup, Button } from "@material-ui/core";
import { SvgIcon } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Typography
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Assets
import bebSleeping from "assets/sleeping-beb-1.jpg";
import { ReactComponent as DevilSvgIcon } from "assets/icons/devil.svg";
import { ReactComponent as AngelSvgIcon } from "assets/icons/angel.svg";

const DevilIcon = (props: any) => {
  return (
    <SvgIcon {...props}>
      <DevilSvgIcon />
    </SvgIcon>
  );
};

export const AngelIcon = (props: any) => {
  return (
    <SvgIcon {...props}>
      <AngelSvgIcon />
    </SvgIcon>
  );
};

const NotFoundPage = (props: any) => {
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

  const buttonStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7rem"
      }
    },
  }))();

  const imgStyle = makeStyles((theme) => ({
    root: {
      maxHeight: 700,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: 300,
      },
    },
  }))();

  let history = useHistory();

  const goBackToHomePageHandler = (event: any) => {
    // sends user back to login page. if already logged in, will send to home page (through redirect in router)
    history.push(ROUTE_NAMES.login);
  };

  const gotToRandomMainPage = () => {
    const randomPage =
      mainContentRoutes[Math.floor(Math.random() * mainContentRoutes.length)];
    history.push(randomPage.path);
  };

  return (
    <Page>
      <Typography variant="h3" className={h2Styles.root}>
        Hey there.
      </Typography>

      <Typography variant="h3" className={h2Styles.root}>
        You seem to have stumbled upon a page that does not exist.
      </Typography>

      <MotionWrapper transition={{ delay: ANIMATION_DURATION * 3 }}>
        <CardMedia
          image={bebSleeping}
          component="img"
          className={imgStyle.root}
        />
      </MotionWrapper>

      <ButtonGroup variant="contained">
        <AlertButton
          onClick={goBackToHomePageHandler}
          startIcon={<AngelIcon />}
          color="primary"
          className={buttonStyles.root}
        >
            Here, let me guide you back home
        </AlertButton>
        <Button
          onClick={gotToRandomMainPage}
          color="secondary"
          endIcon={<DevilIcon />}
          className={buttonStyles.root}
        >
            Or.. would you prefer to explore..?
        </Button>
      </ButtonGroup>
    </Page>
  );
};

export default NotFoundPage;
