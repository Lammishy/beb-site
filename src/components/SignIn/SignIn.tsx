import React, { useState } from "react";

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
    const classes = useStyles();

    // Validation Logic
    const [username, setUsername] = useState<string>("");
    const [userError, setUserError] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [pwError, setPwError] = useState<string>("");

    const { handleLoginStatus }: { handleLoginStatus: any} = props;


    const loginHandler = (event: any) => {
        event.preventDefault(); // prevent site from reloading
        if (username !== BEB_CREDENTIALS.user) {
            // set user error msg
            setUserError("Dis wrong user!!");
        } else {
            // set user error msg to empty string
            setUserError(""); // will therefore evaluate error on TextField to false
        }

        if (password !== BEB_CREDENTIALS.pw) {
            // set pw error msg 
            setPwError("Hint: Dis what beb like to do to beeb when eating together");
        } else {
            // set pw error msg to empty string
            setPwError(""); // will therefore evaluate error on TextField to false
        }

        if (username === BEB_CREDENTIALS.user && password === BEB_CREDENTIALS.pw) {
            // clear error msgs 
            setUserError("");
            setPwError("");

            // pass login
            const successfulLogin = !userError && !pwError; // successfully login if both user and pass correct
            handleLoginStatus(successfulLogin); // from app (handles state of hiding login)
        }
    }

    const onUsernameChange = ({ target: { value } }: { target: { value: string } }) => {
        setUsername(value);
    }

    const onPasswordChange = ({ target: { value } }: { target: { value: string } }) => {
        setPassword(value);
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
                <form className={classes.form} noValidate onSubmit={loginHandler} autoComplete="off">
                    <TextField
                        id="username"
                        variant="outlined"
                        label="Beb username" 
                        onChange={onUsernameChange} 
                        error={Boolean(userError)} 
                        helperText={userError} 
                        required />
                    <TextField
                        id="password"
                        variant="outlined"
                        label="Beb pass" 
                        onChange={onPasswordChange} 
                        error={Boolean(pwError)} 
                        helperText={Boolean(pwError) ? pwError : ""} 
                        required />
                    <Button variant="contained" color="primary" type="submit" >
                        Begin Journey
                    </Button>
                </form>
            </CardActions>
        </Card>
    )
}

export default SignIn;