# Health Recommendation System

A comprehensive machine learning-based health recommendation system that provides intelligent medical insights based on symptoms analysis.

## Overview

This project leverages advanced machine learning algorithms to analyze user symptoms and provide personalized health recommendations. The system offers a complete health management solution with predictive capabilities and actionable insights.

## Features

### 🔍 Symptom Analysis
- Input symptoms through an intuitive web interface
- Advanced ML models analyze symptom patterns
- High-accuracy disease prediction

### 💊 Personalized Recommendations
Our system provides comprehensive recommendations including:
- Top 5 relevant medications
- Detailed prescriptions
- Customized workout plans
- Dietary suggestions

### 🌐 User-Friendly Interface
- Clean, responsive web application built with Flask
- Easy-to-navigate interface
- Mobile-friendly design

## Technical Implementation

### Machine Learning Model
- **Algorithm**: Support Vector Classifier (SVC)
- **Training Data**: Comprehensive symptom-disease dataset
- **Accuracy**: High-precision predictions based on symptom analysis
- **Model Persistence**: Serialized using pickle for optimal performance

### Technology Stack
- **Backend**: Python, Flask
- **Machine Learning**: Scikit-learn, Pandas, NumPy
- **Frontend**: HTML5, CSS3, Bootstrap, JavaScript
- **Data Processing**: CSV-based datasets for symptoms, medications, and recommendations

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd Medicine_Recommendation
```

2. Install required dependencies:
```bash
pip install -r requirements.txt
```

3. Run the application:
```bash
python main.py
```

4. Open your browser and navigate to `http://localhost:5000`

## Usage

1. **Access the Web Interface**: Open the application in your browser
2. **Input Symptoms**: Enter your symptoms in the provided interface
3. **Get Predictions**: The ML model analyzes your input and predicts potential conditions
4. **Review Recommendations**: Receive personalized medication, diet, and exercise suggestions

## Dataset Information

The system uses multiple CSV datasets:
- `Training.csv`: Main training dataset for ML model
- `symptoms_df.csv`: Symptom information and severity
- `medications.csv`: Medication database
- `diets.csv`: Dietary recommendations
- `workout_df.csv`: Exercise suggestions
- `precautions_df.csv`: Precautionary measures

## Project Structure

```
├── main.py                 # Flask application
├── svc.pkl                # Trained ML model
├── templates/             # HTML templates
├── static/               # CSS, JS, images
└── data/                # CSV datasets
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Disclaimer

This system is for educational and informational purposes only. Always consult with qualified healthcare professionals for medical advice and treatment.

Data : 	CSV datasets (symptoms, medications, workouts)

ML Model	 : SVM (svc.pkl) trained on symptom-disease mappings


