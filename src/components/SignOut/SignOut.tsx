import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions
import { loginFail } from "actions/actions";

// Styles
import { makeStyles } from "@material-ui/core";
import theme from "styles/create-theme";

// Component UI
import { Button } from "@material-ui/core";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SignOut = (props: any) => {
  // Styles
  const classes = makeStyles((theme) => ({
    root: {
      position: "absolute",
      top: "20px",
      right: "20px",
    },
    icon: {
      [theme.breakpoints.down("xs")]: {
        marginRight: 0,
      },
    },
    label: {
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        marginLeft: "5px" // to center the button. it's off because the svg itself isn't centered
      },
    },
  }))();

  const smBreakpoint = theme.breakpoints.values.sm;
  const [width, setWidth] = useState(window.innerWidth);

  // Handling window resize and changing button to only symbol
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log("this is run");
    };

    window.addEventListener("resize", handleResize);

    // remove event listener
    // otherwise you're creating multiple eventlisteners
    // which execute code on the same event, exponentially increasing the number of calls to your code
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(loginFail());
  };

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.root}
      classes={{ startIcon: classes.icon, label: classes.label }}
      onClick={onSignOut}
      startIcon={<ExitToAppIcon />}
    >
      {width <= smBreakpoint ? "" : "Get tha fak out"}
    </Button>
  );
};

export default SignOut;
