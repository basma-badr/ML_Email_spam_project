import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
import joblib
 
from model.data_cleaning import clean_email

# ========== 1) Load dataset ==========
df = pd.read_csv("dataset/spam_or_not_spam.csv")

# Remove missing emails
df = df.dropna()

# Clean text
df["email"] = df["email"].apply(clean_email)

# Split columns
X = df["email"]
y = df["label"]

# ========== 2) Split data ==========
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# ========== 3) Create vectorizer ==========
vectorizer = TfidfVectorizer()

# Transform text
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# ========== 4) Train model ==========
model = LogisticRegression(max_iter=200)
model.fit(X_train_vec, y_train)

# ========== 5) Evaluate ==========
accuracy = model.score(X_test_vec, y_test)
print("Accuracy:", accuracy)

# ========== 6) Save model ==========
joblib.dump(model, "model/spam_model.joblib")
joblib.dump(vectorizer, "model/tfidf_vectorizer.joblib")

print("Model saved successfully!")
 