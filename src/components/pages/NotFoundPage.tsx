// Navigation
import { ROUTE_NAMES } from "routes/routes";
import { useHistory } from "react-router-dom";

// Layout
import Page from "components/layout/Page/Page";
import { ImageList, ImageListItem } from "@material-ui/core";

// Alert Button
import AlertButton from "components/layout/AlertButton";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

// Typography
import { Typography } from "@material-ui/core";

// Styles
import { makeStyles } from "@material-ui/styles";

// Assets
import bebSleeping from "assets/sleeping-beb-1.jpg"

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
        console.log("XJ goback is run");
        // console.log("XJ history: ", history);
        history.push(ROUTE_NAMES.login);
    };

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

            <AlertButton onClick={goBackToHomePageHandler} startIcon={<InsertEmoticonIcon />}>
                Here, let me guide you back home
            </AlertButton>
        </Page>
    )
}

export default NotFoundPage;