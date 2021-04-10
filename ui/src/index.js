import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CssBaseline } from '@material-ui/core';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: ["'Montserrat'", 'sans-serif'].join(',')
    }
})

ReactDOM.render(
    <CssBaseline>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </CssBaseline>,
    document.getElementById("root")
)