import React from "react";
// Layout Components
import Container from "@material-ui/core/Container";

// Styles
import { makeStyles } from "@material-ui/core/styles";
import FadeMotionWrapper from "animations/FadeMotionWrapper";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100vw",
        height: "100%"
    }
})

/**
 * Serves to center all elements in page
 */

const Page = ({ children, animate = true }: { children: any, animate?: boolean }) => {
    const classes = useStyles();

    return (
        <>
            {animate ?
                <Container className={classes.root} >
                    <FadeMotionWrapper>
                        <Container className={classes.root} component="section">
                            {children}
                        </Container>
                    </FadeMotionWrapper>
                </Container> :
                <Container className={classes.root} component="section">
                    {children}
                </Container>
            }
        </>


    )
}

export default Page;