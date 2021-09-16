// Navigation
import { ROUTE_NAMES, mainContentRoutes } from "routes/routes";
import { useHistory } from "react-router-dom";

// Layout
import Page from "components/layout/Page/Page";
import { ImageList, ImageListItem, SvgIcon } from "@material-ui/core";

// Alert Button
import AlertButton from "components/layout/AlertButton";

// Common UI Components
import { ButtonGroup, Button } from "@material-ui/core";

// Typography
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/styles";

// Assets
import bebSleeping from "assets/sleeping-beb-1.jpg"
import { ReactComponent as DevilSvgIcon } from "assets/icons/devil.svg";
import { ReactComponent as AngelSvgIcon } from "assets/icons/angel.svg";

const DevilIcon = (props: any) => {
    return <SvgIcon {...props}>
        <DevilSvgIcon />
    </SvgIcon>
}

const AngelIcon = (props: any) => {
    return <SvgIcon {...props}>
        <AngelSvgIcon/>
    </SvgIcon>
}

const NotFoundPage = (props: any) => {
    // Styles 
    const h2Styles = makeStyles(_ => ({
        root: {
            textAlign: "center",
            marginBottom: "50px",
            fontWeight: 700
        }
    }))();

    const classes = makeStyles(_ => ({
        root: {
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "40px",
            overflow: "hidden"
        },
        imageList: {
            width: 500,
            height: 450
        },
    }))();

    let history = useHistory();

    const goBackToHomePageHandler = (event: any) => {
        // sends user back to login page. if already logged in, will send to home page (through redirect in router)
        history.push(ROUTE_NAMES.login);
    };

    const gotToRandomMainPage = () => {
        const randomPage = mainContentRoutes[Math.floor(Math.random() * mainContentRoutes.length)];
        history.push(randomPage.path);
    }

    return (
        <Page>
            <Typography variant="h3" className={h2Styles.root}>
                Hey there.
            </Typography>

            <Typography variant="h3" className={h2Styles.root}>
                You seem to have stumbled upon a page that does not exist.
            </Typography>

            <div className={classes.root}>
                <ImageList rowHeight={200} gap={1} className={classes.imageList}>
                    <ImageListItem key={69} cols={2} rows={2}>
                        <img src={bebSleeping} alt="sleeping-beb" />
                    </ImageListItem>
                </ImageList>
            </div>

            <ButtonGroup variant="contained">
                <AlertButton onClick={goBackToHomePageHandler} startIcon={<AngelIcon />} color="primary">
                    Here, let me guide you back home
                </AlertButton>
                <Button onClick={gotToRandomMainPage} color="secondary" endIcon={<DevilIcon />}>
                    Or.. would you prefer to explore..?
                </Button>
            </ButtonGroup>

        </Page>
    )
}

export default NotFoundPage;