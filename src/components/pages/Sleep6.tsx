// Common UI Components
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/core/styles";

// Layout
import Page from "components/layout/Page/Page";

const Sleep6 = (props: any) => {
  const classes = makeStyles((theme) => ({
    center: {
      textAlign: "center",
    },
  }))();

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        <b>After she's done disturbing you and you've dealt with said energy</b>
      </Typography>
    </Page>
  );
};

export default Sleep6;
