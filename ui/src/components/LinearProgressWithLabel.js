import React from "react";

import { Grow } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

function LinearProgressWithLabel(props) {
    const classes = useStyles();
    return (
      <div className={classes.progressBar}>
            <Grow in={true}>
                <div 
                    className={classes.bar}
                    style={{ width: `${props.value}%`  }}
                >
                </div>
            </Grow>          
      </div>
    );
}

const useStyles = makeStyles({
    progressBar: {
        backgroundColor: "#CCCCCC",
        borderRadius: "10rem",
        height: ".7rem",
        display: "flex"
    },
    bar: {
        display: "inline-block",
        borderRadius: "10rem",
        height: ".8rem",
        backgroundImage: "linear-gradient(to right, #FF6A00, #EE0979)",
        alignItems: "center"
    }
})

export default LinearProgressWithLabel