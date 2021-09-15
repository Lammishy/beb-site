import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

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

const fontFams = {
    montserrat: "'Montserrat', sans-serif",
    azeretMono: "'Azeret Mono', monospace",
    roboto: "'Roboto', sans-serif;"
};

const theme = createTheme({
    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {
                    height: "100%",
                },
                body: {
                    height: "100%" // if this is set to minHeight, then child components with height: 100% will not work. 
                    // minHeight is NOT an explicit declaration of an element's height.
                    // Height percentages are calculated from their parent's height
                    // https://stackoverflow.com/a/8468131
                }
            }
        }
    },
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
        fontFamily: fontFams.montserrat
    }
})

export const alertButtonTheme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: red[400]
        }
    }
})

export default theme;