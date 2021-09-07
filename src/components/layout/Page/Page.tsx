import React from "react";
import Container from "@material-ui/core/Container";

/**
 * Serves to center all elements in page
 */

const Page = ({ children }: { children: any} ) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Page;