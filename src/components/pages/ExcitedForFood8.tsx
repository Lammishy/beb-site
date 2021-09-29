// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/styles";

// Layout
import Page from "components/layout/Page/Page";

const ThirdPage = (props: any) => {
  const classes = makeStyles((_) => ({
    center: {
      textAlign: "center",
    },
  }))();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>ESPECIALLY</b> the last piece.
      </Typography>
    </Page>
  );
};

export default ThirdPage;
