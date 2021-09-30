import { Suspense, lazy } from "react";
import LoadingSpinner from "components/layout/LoadingSpinner";

// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Layout
import Page from "components/layout/Page/Page";

// Assets
const Dance10FPS = lazy(() => import("assets/edna-dance-10fps.component"));
// const Dance25FPS = lazy(() => import("assets/edna-dance-25fps.component")); // might change to this

const Sleep4 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      marginBottom: "40px",
    },
  }))();

  const gifStyle = makeStyles((theme) => ({
    root: {
      width: "100%",
      height: 700,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        height: 400,
      },
    },
  }))();

  const incrementDuration = ((
    num: number = ANIMATION_DURATION,
    incrementer: number = 4
  ) => {
    return () => {
      const n = num;
      num = num + incrementer;
      return n;
    };
  })();

  return (
    <Page>
      <Typography variant="h3" className={classes.center}>
        <b>Only to face this kind of energy when the Singapore bird isn't even awake yet.</b>
      </Typography>

      <Suspense fallback={<LoadingSpinner />}>
        <MotionWrapper transition={{ delay: incrementDuration() + 2 }}>
          <Dance10FPS className={gifStyle.root} />
        </MotionWrapper>
      </Suspense>
    </Page>
  );
};

export default Sleep4;
