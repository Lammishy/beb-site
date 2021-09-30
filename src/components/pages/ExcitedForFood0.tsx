// Animation
import MotionWrapper from "animations/MotionWrapper";
import { ANIMATION_DURATION } from "animations/constants/constants";

// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Layout
import Page from "components/layout/Page/Page";

// Helpers
import map from "lodash/map";

// Functions
const incrementer = ((num: number = 1, incrementer: number = 1) => {
  return () => {
    const n = num;
    num = num + incrementer;
    return n;
  };
})();

const renderReasonsWithFade = (item: any, animationDelay: any) => {
  return (
    <MotionWrapper transition={{ delay: animationDelay() }}>
      <Typography variant="h3" key={item.key} style={{ marginBottom: "70px" }}>
        <b>{item.key}.</b> {item.reason}
      </Typography>
    </MotionWrapper>
  );
};

interface Reason {
  key: number;
  reason: string;
}

const reasons: Reason[] = [
  {
    key: incrementer(),
    reason: "Beeb is hungry.",
  },
  {
    key: incrementer(),
    reason: "The food is very yum.",
  },
  {
    key: incrementer(),
    reason: "IS MAI FOOD",
  },
];

/**
 * Component
 */
const ExcitedForFood0 = (props: any) => {
  const classes = makeStyles((theme) => ({
    left: {
      textAlign: "left",
    },
  }))();

  const incrementDuration = ((
    num: number = ANIMATION_DURATION,
    incrementor: number = 2
  ) => {
    return () => {
      let n = num;
      num = num + incrementor;
      return n;
    };
  })();

  return (
    <Page>
      <div className={classes.left}>
        {map(reasons, (reason) =>
          renderReasonsWithFade(reason, incrementDuration)
        )}
      </div>
    </Page>
  );
};

export default ExcitedForFood0;
