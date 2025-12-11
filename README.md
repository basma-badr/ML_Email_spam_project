
# Email Spam Detector 🛡️

A professional web application that uses machine learning to detect spam emails in real-time. Built with FastAPI backend and modern JavaScript frontend with a sleek dark theme interface.

![Status](https://img.shields.io/badge/Status-Production_Ready-success)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

 Features
 
Core Functionality
- **Real-time Spam Detection**: Instant analysis of email content using ML algorithms
- **High Accuracy**: Logistic Regression model with >95% accuracy
- **Confidence Scoring**: Visual confidence meter with percentage indicators
- **Privacy-Focused**: Local processing with secure API communication

  Professional Interface
- **Dark Theme Design**: Modern black background with vibrant accent colors
- **Responsive Layout**: Fully responsive design for all device sizes
- **Interactive Elements**: Smooth animations and hover effects
- **Real-time Feedback**: Live character counter and processing indicators

  Technical Features
- **FastAPI Backend**: High-performance REST API with CORS support
- **Machine Learning**: TF-IDF vectorization with Logistic Regression
- **Model Persistence**: Joblib-saved models for quick deployment
- **Comprehensive Error Handling**: User-friendly error messages

 

*Professional dark theme interface with gradient accents*

  Tech Stack

 Backend
- **Python 3.9+** - Core programming language
- **FastAPI** - Modern web framework for building APIs
- **Scikit-learn** - Machine learning library
- **Joblib** - Model serialization
- **Pandas** - Data manipulation
- **Uvicorn** - ASGI server

 Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS Grid & Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

 Machine Learning
- **Algorithm**: Logistic Regression
- **Vectorization**: TF-IDF (Term Frequency-Inverse Document Frequency)
- **Preprocessing**: Text cleaning and normalization

  📁 Project Structure

```
email-spam-detector/
├── 📄 index.html          # Main HTML file
├── 📄 style.css           # CSS styles (dark theme)
├── 📄 script.js           # Frontend JavaScript
├── 📄 api.py              # FastAPI backend
├── 📄 train_model.py      # ML model training script
├── 📄 data_cleaning.py    # Text preprocessing utilities
├── 📁 model/              # Saved ML models
│   ├── spam_model.joblib
│   └── tfidf_vectorizer.joblib
└── 📁 dataset/            # Training data
    └── spam_or_not_spam.csv
```

  Quick Start

  Prerequisites
- Python 3.9 or higher
- Modern web browser

  Installation & Setup

 Clone or download the project files**

 Install Python dependencies:**
```bash
pip install fastapi uvicorn scikit-learn pandas joblib
```

 Train the model (optional - pre-trained included):**
```bash
python train_model.py
```

 Start the backend server:**
```bash
uvicorn api:app --reload --host 127.0.0.1 --port 8000
```

 Open the frontend:**
   - Open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8080`

 How to Use

1. **Access the application** at `http://localhost:8080` (or your chosen port)
2. **Paste email content** into the text area
3. **Click "Analyze for Spam"** button
4. **View the results**:
   - ✅ Green: Legitimate email
   - 🚨 Red: Spam detected
   - 📊 Confidence percentage shown
 Model Details

- **Algorithm**: Logistic Regression
- **Accuracy**: >95% on test data
- **Processing Time**: <1 second
- **Features**: TF-IDF vectorization
- **Training Data**: Labeled email dataset

  Privacy & Security

- **No Data Storage**: Email content processed in memory only
- **Local Processing**: All ML inference happens on your server
- **Secure API**: CORS configured for controlled access
- **No External Calls**: Complete data privacy

 Testing the Application

 Start both servers:**
   - Backend: `uvicorn api:app --reload --port 8000`
   - Frontend: `python -m http.server 8080`

 Test with example emails:**
   - Spam: "Congratulations! You've won a prize..."
   - Legitimate: "Hi team, meeting tomorrow at 2 PM..."

  Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

  License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Dataset providers for training data
- FastAPI and Scikit-learn communities
- All contributors and testers
 
 

 

 
