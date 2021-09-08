import React from "react";

// Layout Components
import Container from "@material-ui/core/Container";

// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100vw",
        minHeight: "100vh"
    }
})

/**
 * Serves to center all elements in page
 */

const Page = ({ children }: { children: any} ) => {
    const classes = useStyles();
    return (
        <Container className={classes.root} component="section">
            {children}
        </Container>
    )
}

export default Page;