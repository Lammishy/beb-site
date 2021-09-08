import { createTheme } from "@material-ui/core/styles";

// Refer to below site for picking theme colors
// https://material.io/design/color/the-color-system.html#tools-for-picking-colors

const darkTheme = {
    primary: "#7E57C2",
    complementary: "#9bc257",
    analogousOne: "#5765c2",
    analogousTwo: "#b457c2",
    tradicOne: "#c2579b",
    tradicTwo: "#c27e57"
}

const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: darkTheme.primary
        },
        secondary: {
            main: darkTheme.tradicOne
        }
    },
    typography: {
        fontFamily: "'Azeret Mono', monospace"
    }
})

export default theme;