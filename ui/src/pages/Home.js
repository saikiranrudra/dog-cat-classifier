import React from "react";

import { Grid, Typography } from "@material-ui/core";
import ImagePredictor from "./../components/ImagePredictor";

import { makeStyles } from "@material-ui/core/styles";

const Home = () => {
    const classes = useStyles();
    return (
        <Grid 
            container 
            spacing={2} 
            direction="row"
            style={{ alignItems: "center", width: "100%" }}
        >
            <Grid item md={6} sm={12}>
                <Typography 
                    variant="h2" 
                    component="h2" 
                    className={classes.heading}
                    align="center"
                >
                    🐶 Dog 😽 Cat Classifier
                </Typography>
            </Grid>

            <Grid item md={6} sm={12} style={{ width: "100%" }}>
                <div style={{ display: "grid", placeContent: "center"}}>
                    <ImagePredictor />
                </div>
            </Grid>

        </Grid>
    )
};

const useStyles = makeStyles({
    heading: {
        color: "#fff",
    }
})

export default Home;