import React from "react";

import Home from "./pages/Home";
import { Typography  } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.backgroudColor}>
            <Typography variant="h1" component="h1" className={classes.logo}>
                SAIKIRAN RUDRA
            </Typography>    
            <Home />
        </div>
    )
}

const useStyles = makeStyles({
   backgroudColor: {
        background: "#ee0979", /* fallback for old browsers */
        // eslint-disable-next-line
        background: "-webkit-linear-gradient(to right, #ee0979, #ff6a00)", /* Chrome 10-25, Safari 5.1-6 */
        // eslint-disable-next-line
        background: "linear-gradient(to right, #ee0979, #ff6a00)",
   },
   logo: {
       fontWeight: 700,
       fontSize: "1.2rem",
       color: "#fff",
       padding: "1.5rem 1.3rem",
   }
})

export default App;