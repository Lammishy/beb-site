// Styles
import { makeStyles } from "@material-ui/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

const ThirdPage = (props: any) => {
  const classes = makeStyles({
    center: {
      textAlign: "center",
    },
  })();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>THIS AUTUMN</b>
        <br />
        <br />
        <MotionWrapper transition={{ delay: `${ANIMATION_DURATION * 2.5}` }}>
          2<sup>nd</sup> October{" "}
          <MotionWrapper transition={{ delay: `${ANIMATION_DURATION * 5.5}` }}>
            <b>2021</b>
          </MotionWrapper>
          {/* <b>{dateToDisplay}</b> */}
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default ThirdPage;
