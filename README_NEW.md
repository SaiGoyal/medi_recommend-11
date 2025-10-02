# 🏥 Health Recommendation System

A personalized medical recommendation system that uses machine learning to predict potential diseases based on symptoms and provides tailored health guidance.

## 🌟 Features

- **Symptom-based Disease Prediction**: Input symptoms and get accurate disease predictions using machine learning
- **Personalized Recommendations**: Get customized medicine suggestions, workout routines, and dietary advice
- **User-friendly Web Interface**: Clean and intuitive Flask-based web application
- **Comprehensive Health Data**: Extensive database of symptoms, diseases, medications, and treatments

## 🚀 How It Works

1. **Input Symptoms**: Users enter their symptoms through the web interface
2. **ML Analysis**: Our trained SVM model analyzes the symptoms
3. **Disease Prediction**: The system predicts potential diseases with confidence scores
4. **Personalized Guidance**: Provides relevant medicines, precautions, workout routines, and dietary recommendations

## 🛠️ Technology Stack

- **Backend**: Python, Flask
- **Machine Learning**: Scikit-learn (SVM Classifier)
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap
- **Data**: CSV datasets for symptoms, medications, workouts, and precautions
- **Model**: Pre-trained SVM model (svc.pkl)

## 📁 Project Structure

```
├── main.py                    # Flask application
├── svc.pkl                   # Trained ML model
├── index.html                # Main web interface
├── about.html                # About page
├── contact.html              # Contact page
├── blog.html                 # Blog page
├── Training.csv              # Training dataset
├── symtoms_df.csv           # Symptoms data
├── medications.csv          # Medications database
├── precautions_df.csv       # Precautions data
├── workout_df.csv           # Workout recommendations
├── diets.csv                # Dietary suggestions
└── description.csv          # Disease descriptions
```

## 🏃‍♂️ Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd health-recommendation-system
   ```

2. **Install dependencies**
   ```bash
   pip install flask numpy pandas scikit-learn
   ```

3. **Run the application**
   ```bash
   python main.py
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 🎯 Usage

1. Open the web application
2. Select your symptoms from the available options
3. Click "Predict" to get disease predictions
4. View personalized recommendations including:
   - Predicted diseases with confidence scores
   - Recommended medications
   - Preventive measures and precautions
   - Suggested workout routines
   - Dietary recommendations

## 📊 Model Performance

The system uses a Support Vector Machine (SVM) classifier trained on a comprehensive dataset of symptoms and diseases, achieving high accuracy in disease prediction.

## ⚠️ Disclaimer

This system is for educational and informational purposes only. It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created and maintained by Astitva Garg

---

⭐ **Star this repository if you found it helpful!**