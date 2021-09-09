import React from "react";


// Actions
import { loginSuccess, loginFail } from "actions/actions"; // login
import { setUsername, setUsernameSuccess, setUsernameFail, setUserFieldTouched } from "actions/actions"; // username
import { setPassword, setPasswordSuccess, setPasswordFail, setPasswordFieldTouched } from "actions/actions"; // password

// Selectors
import { getUsernameStatusSelector, getPasswordStatusSelector } from "selectors/selectors";

import { useSelector, useDispatch } from "react-redux";



// Common Components
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

// From Components
import TextField from "@material-ui/core/TextField";

// Layout Components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

// Icons
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// Typography
import Typography from "@material-ui/core/Typography";

// Styles
import makeStyles from "@material-ui/core/styles/makeStyles";

// Constants
import { BEB_CREDENTIALS } from "constants/constants";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 350,
        textAlign: "center",
        padding: "30px 30px",
        borderRadius: 20,
        display: "flex",
        flexDirection: "column"
    },
    avatar: {
        margin: "auto",
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.secondary.light,
    },
    cardActions: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: 20
    }
}))

const SignIn = (props: any) => {
    // Styles
    const classes = useStyles();

    // allows us to query the store
    const dispatch = useDispatch();

    // Form-related information from store
    const usernameInfo = useSelector(getUsernameStatusSelector);
    const pwInfo = useSelector(getPasswordStatusSelector);

    // Controls
    const usernameErrorMsg = `You.. dunno your name?`;
    const pwErrorMsg = `What the beb like to do to beeb when eatin`;

    // Functions 
    const loginHandlerStore = (event: any) => {
        event.preventDefault();

        // Fields only considered touched after submit button clicked.
        // 
        if (!usernameInfo.userFieldTouched) dispatch(setUserFieldTouched());
        if (!pwInfo.pwFieldTouched) dispatch(setPasswordFieldTouched());

        // Validate Login (this logic needs to be reworked in the future)
        validateLoginStatus();
        // Validate username
        validateUsernameFieldState();
        // Validate password
        validatePasswordFieldState();

    }

    /**
     * Validations
     */
    const validateLoginStatus = () => {
        /**
         * TODO: FUTURE PLAN
         * Find a way to use usernameIsValid and pwIsValid store values instead. 
         * The issue here is that you only set usernameIsValid && pwIsValid = true onSubmit
         * Therefore, this line of code is unable to get the latest usernameinfo.usernameIsValid & pwInfo.pwIsValid
         */
        if (usernameInfo.username === BEB_CREDENTIALS.user && pwInfo.pw === BEB_CREDENTIALS.pw) {
            dispatch(loginSuccess());
        } else {
            dispatch(loginFail());
        }
    }

    const validateUsernameFieldState = () => {

        if (usernameInfo.username === BEB_CREDENTIALS.user) {
            dispatch(setUsernameSuccess());
        } else {
            dispatch(setUsernameFail(usernameErrorMsg));
        }
    }

    const validatePasswordFieldState = () => {
        if (pwInfo.pw === BEB_CREDENTIALS.pw) {
            dispatch(setPasswordSuccess());
        } else {
            dispatch(setPasswordFail(pwErrorMsg));
        }
    }


    /**
     * Form Controls
     */
    const onUsernameChange = ({ target: { value } }: { target: { value: string } }) => {
        dispatch(setUsername(value));
    }

    const onPasswordChange = ({ target: { value } }: { target: { value: string } }) => {
        dispatch(setPassword(value));
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                {/* Locked Out Icon */}
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon fontSize="large" />
                </Avatar>
                {/* Login Header */}
                <Typography variant="h2">
                    Login
                </Typography>
            </CardContent>

            {/* Buttons */}
            <CardActions className={classes.cardActions}>
                <form className={classes.form} noValidate onSubmit={loginHandlerStore} autoComplete="off">
                    <TextField
                        id="username"
                        variant="outlined"
                        label="Beb username"
                        onChange={onUsernameChange}
                        error={!usernameInfo.usernameIsValid && usernameInfo.userFieldTouched}
                        helperText={usernameInfo?.errorMsg}
                        required />
                    <TextField
                        id="password"
                        variant="outlined"
                        label="Beb pass"
                        onChange={onPasswordChange}
                        error={!pwInfo.pwIsValid && pwInfo.pwFieldTouched}
                        helperText={pwInfo?.errorMsg}
                        required />
                    <Button variant="contained" color="primary" type="submit" disableElevation>
                        Begin Journey
                    </Button>
                </form>
            </CardActions>
        </Card>
    )
}

export default SignIn;