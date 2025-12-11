from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib

# Load model + vectorizer
model = joblib.load("model/spam_model.joblib")
vectorizer = joblib.load("model/tfidf_vectorizer.joblib")

app = FastAPI()

# Allow CORS (important!)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailInput(BaseModel):
    text: str

@app.post("/predict")
def predict_email(data: EmailInput):
    # Transform email text
    features = vectorizer.transform([data.text])
    prediction = model.predict(features)[0]

    label = "spam" if prediction == 1 else "not_spam"

    return {"prediction": label}
