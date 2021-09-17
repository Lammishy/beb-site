import { useDispatch } from "react-redux";

// Actions
import { loginFail } from "actions/actions";

// Styles
import { makeStyles } from "@material-ui/core";

// Component UI
import { Button } from "@material-ui/core";

const SignOut = (props: any) => {
    // Styles
    const classes = makeStyles(() => ({
        root: {
            position: "absolute",
            top: "10px",
            right: "10px"
        }
    }))();

    const dispatch = useDispatch();

    const onSignOut = () => {
        dispatch(loginFail());
    };

    return <Button variant="contained" color="primary" className={classes.root} onClick={onSignOut}>
        Sign Out
    </Button>

};


export default SignOut;