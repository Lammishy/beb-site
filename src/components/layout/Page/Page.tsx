import React from "react";
import Box from "@material-ui/core/Box";

/**
 * Serves to center all elements in page
 */

const Page = ({ children }: { children: any} ) => {
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" width="100%">
            {children}
        </Box>
    )
}

export default Page;