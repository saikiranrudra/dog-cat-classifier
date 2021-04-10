from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from werkzeug.utils import secure_filename
from flask_cors import CORS
import numpy as np
import os

model = load_model("./model/dogcat.h5")

app = Flask(__name__)
CORS(app)

def predict(PATH):
    image_data = image.load_img(PATH, target_size = (64,64))
    image_array = image.img_to_array(image_data)
    image_array = image_array/255
    image_array = np.expand_dims(image_array, axis=0)
    
    prediction = model.predict(image_array)

    return prediction

def cleanup(PATH):
    os.remove(PATH)

@app.route("/predict", methods=["POST"])
def fetch_and_predict_image():
    response_files = request.files
    if (len(response_files) > 0):
        image_response = response_files['image']
        
        BASE_PATH = os.path.dirname(__file__)
        FILE_PATH = os.path.join(BASE_PATH, "uploads", secure_filename(image_response.filename))
        
        print(FILE_PATH)
        
        image_response.save(FILE_PATH)
        
        result = predict(FILE_PATH)
        
        def cleanup(PATH):
            os.remove(PATH)
        return jsonify({ "result": str(result[0][0]) })

    else :
        return jsonify({ "status": "INVALID_REQUEST" })