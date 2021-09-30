// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Layout
import Page from "components/layout/Page/Page";

const Sleep1 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        fontSize: "7rem"
      }
    },
  }))();

  return (
    <Page>
      <Typography variant="h2" className={classes.center}>
        <b>Furthermore</b>
      </Typography>
    </Page>
  );
};

export default Sleep1;
