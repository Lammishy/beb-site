// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/styles";

// Layout
import Page from "components/layout/Page/Page";

const ThirdPage = (props: any) => {
  const classes = makeStyles((_) => ({
    root: {
      display: "flex",
      justifyContent: "space-around",
      marginBottom: "40px",
      overflow: "hidden",
    },
    imageList: {
      width: 500,
      height: 450,
    },
    center: {
      textAlign: "center",
    },
  }))();

  const createIncrementingDuration = ((num: number = 4) => {
    /**
     * Function that serves as a generator that saves and increases a number wheenver it is run again
     */
    return () => {
      const n = num; // to return the first instance of num (number 4)
      num = num + num; // save new value of num, store it in function above.
      return n;
    };
  })();

  return (
    <Page>
      <MotionWrapper>
        <Typography variant="h1" className={classes.center}>
          Until there is nothing left.
          <br />
          <br />
          <MotionWrapper
            transition={{
              delay: ANIMATION_DURATION * createIncrementingDuration(),
            }}
          >
            Not <b>even</b> the last piece.
          </MotionWrapper>
        </Typography>
      </MotionWrapper>
    </Page>
  );
};

export default ThirdPage;
