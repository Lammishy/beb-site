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

    // Form-related information
    const usernameInfo = useSelector(getUsernameStatusSelector);
    const pwInfo = useSelector(getPasswordStatusSelector);

    const dispatch = useDispatch(); // allows us to query the store

    const loginHandlerStore = (event: any) => {
        event.preventDefault();

        // Validate Login
        if (usernameInfo.username === BEB_CREDENTIALS.user && pwInfo.pw === BEB_CREDENTIALS.pw) {
            dispatch(loginSuccess());
        } else {
            dispatch(loginFail());
        }

        // Fields only considered touched after submit button clicked
        if (!usernameInfo.userFieldTouched) dispatch(setUserFieldTouched());
        if (!pwInfo.pwFieldTouched) dispatch(setPasswordFieldTouched());

        // Validate username
        if (usernameInfo.username === BEB_CREDENTIALS.user) {
            dispatch(setUsernameSuccess());
        } else {
            dispatch(setUsernameFail("Dis not be your name beb"));
        }

        // Validate password
        if (pwInfo.pw === BEB_CREDENTIALS.pw) {
            dispatch(setPasswordSuccess());
        } else {
            dispatch(setPasswordFail("Hint: What the beb loves to do to beeb when eating"));
        }
    }

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