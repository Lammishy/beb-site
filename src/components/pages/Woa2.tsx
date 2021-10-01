// Styles
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

// Layout
import Page from "components/layout/Page/Page";

const Woa2 = (props: any) => {
  const classes = makeStyles({
    center: {
      textAlign: "center",
    },
  })();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>1</b> She's extra sensitive and feeling.
      </Typography>
    </Page>
  );
};

export default Woa2;
