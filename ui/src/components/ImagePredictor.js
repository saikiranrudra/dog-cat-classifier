import React, { useRef, useState } from "react";

// Components
import { Paper, Typography, Button } from "@material-ui/core";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import Spacer from "./Spacer";

// Utils
import model from "./../Apis/model";

import { makeStyles } from "@material-ui/core/styles";

const ImagePredictor = (props) => {
    const classes = useStyles();
    const inputFile = useRef();
    const [ file, setFile ] = useState({ name: null, data: null, url: null })
    const [btnState, setBtnState] = useState({ name: "Predict", isDisabled: false })
    const [ prediction, setPrediction ] = useState(0.5);

    const handleFileChange = () => {
        const file = inputFile.current.files[0];
        setFile({ name: file.name, data: file, url: URL.createObjectURL(file) })
    }

    const handlePrediction = async () => {
        try {
            setBtnState({ name: "Loading...", isDisabled: true });
            const formData = new FormData()
            formData.append("image", file.data)
            const response  = await model.post("/predict", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setPrediction(response.data.result)
            setBtnState({ name: "Predict", isDisabled: false });
        } catch(err) {
            console.log("PREDICTION__ERROR");
            setBtnState({ name: "Predict", isDisabled: false });
            alert(err);
        }
    }

    return (
        <>
            <Paper 
                className={classes.imageContainer}
                onClick={() => { inputFile.current.click() }}
                elevation={3}
                style={{
                    background: file.url ? `url(${file.url}) no-repeat`: null,
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                    
                }}
            >
                <input 
                    type="file"  
                    ref={inputFile}
                    onChange={handleFileChange}  
                    className={classes.inputFileField}        
                />
                <Typography varaint="subtitle1" align="center">
                    {file.name ? null : "Upload Image"}
                </Typography>
            </Paper>
            <Paper className={classes.predictionContainer}>
                <Typography variant="h4" align="center" className={classes.predictionHeading}>
                    Prediction
                </Typography>

                <Spacer>
                    <Typography variant="h6" className={classes.predictionClass}>
                        Dog
                    </Typography>
                    <LinearProgressWithLabel 
                        value={prediction*100} 
                    />
                </Spacer>
                
                <Spacer>
                    <Typography variant="h6" className={classes.predictionClass}>
                        Cat
                    </Typography>
                    <LinearProgressWithLabel 
                        value={(1 - prediction)*100} 
                    />
                </Spacer>
                
                <Spacer style={{ textAlign: "center", padding: "1rem" }}>
                    <Button 
                        variant="contained" 
                        className={classes.gradient}
                        onClick={handlePrediction}
                        disabled={btnState.isDisabled}
                    >
                        {btnState.name}
                    </Button>
                </Spacer>
            </Paper>

        </>
    )
}

const useStyles = makeStyles({
    imageContainer: {
        display: "grid",
        placeContent: "center",
        width: "336px",
        height: "300px",
        textTransform: "uppercase",
        fontWeight: 400,
        cursor: "pointer",
        position: "relative",
        zIndex: 2
    },
    predictionContainer: {
        position: "relative",
        width: "336px",
        zIndex: 1,
        top: "-.2rem"
    },
    predictionHeading: {
        textTransform: "uppercase",
        fontSize: "1rem",
        color: "#EE0979",
        padding: "1.3rem",
        fontWeight: 700
    },
    inputFileField: {
        display: "none"
    },
    predictionClass: {
        color: "#FF6A00",
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: ".8rem"
    },

    gradient: {
        backgroundImage: "linear-gradient(to right, #FF6A00, #EE0979)",
        color: "#fff",
        fontWeight: 700,
    }
})

export default ImagePredictor;