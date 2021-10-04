// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const Woa1 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      [theme.breakpoints.down("xs")]: {
        fontSize: "3rem"
      }
    },
  }))();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>There are some things</b>
        <MotionWrapper transition={{ delay: ANIMATION_DURATION * 5 }}>
          that are really charming about this chonk of clumsiness.
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default Woa1;
