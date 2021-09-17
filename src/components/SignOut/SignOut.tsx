import { useDispatch } from "react-redux";

// Actions
import { loginFail } from "actions/actions";

// Styles
import { makeStyles } from "@material-ui/core";

// Component UI
import { Button } from "@material-ui/core";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SignOut = (props: any) => {
    // Styles
    const classes = makeStyles(() => ({
        root: {
            position: "absolute",
            top: "20px",
            right: "20px"
        }
    }))();

    const dispatch = useDispatch();

    const onSignOut = () => {
        dispatch(loginFail());
    };

    return <Button variant="contained" color="primary" className={classes.root} onClick={onSignOut} startIcon={<ExitToAppIcon/>}>
        Get tha fak out
    </Button>

};


export default SignOut;