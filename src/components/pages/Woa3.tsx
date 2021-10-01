// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

import { differenceInYears } from "date-fns";

// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const Woa3 = (props: any) => {
  const classes = makeStyles({
    center: {
      textAlign: "center",
    },
  })();

  const incrementDuration = ((
    timesLonger = 5,
    incrementer = 7,
    baseDuration = ANIMATION_DURATION
  ) => {
    return () => {
      const duration = baseDuration * timesLonger;
      timesLonger = timesLonger + incrementer;
      return duration;
    };
  })();

  const today = new Date();
  const dateEndaMoved = new Date(2020, 8, 19);
  const yearDiff = differenceInYears(today, dateEndaMoved);

  console.log(
    `XJ Easter Egg! The "A year ago" will continuously change as the years go by!`
  );

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>2</b> She's the <b>MOST amazing</b> go-getter.
        <br />
        <br />
        <MotionWrapper transition={{ delay: incrementDuration() }}>
          <Typography variant="h3" className={classes.center}>
            {yearDiff === 1 ? "A" : yearDiff} year{yearDiff !== 1 ? "s" : ""}{" "}
            ago, this girl decided on her own that she'd go out, and rent a
            place on her own.
          </Typography>
        </MotionWrapper>
      </Typography>
    </Page>
  );
};

export default Woa3;
