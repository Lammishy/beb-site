// Animation

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

  return (
    <Page>
      <Typography variant="h1" className={classes.center}>
        It's a face of "I'm going to eat your food and I don't even care if
        you're hungry".
      </Typography>
    </Page>
  );
};

export default ThirdPage;
