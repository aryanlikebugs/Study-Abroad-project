# Study Abroad Project

The "Study Abroad" project is a comprehensive platform designed to assist students in exploring international education opportunities. It integrates a **backend**, **frontend**, and **machine learning (ML)** components to provide a seamless and personalized user experience.

---

## Project Overview

### 1. **Backend**
The backend is built using **Node.js**, **Express**, and **MongoDB**. It provides APIs for:
- User authentication and profile management.
- CRUD operations for university data.
- Integration with ML models for personalized recommendations.

For more details, refer to the [Backend README](./Abroad-backend/README.md).

---

### 2. **Frontend**
The frontend is developed using **React.js** with **Vite** as the build tool and **Tailwind CSS** for styling. It offers:
- A responsive and interactive user interface.
- Features like program listings, user profile management, and university recommendations.

For more details, refer to the [Frontend README](./Abroad-frontend/README.md).

---

### 3. **Machine Learning Integration**
The ML component enhances the platform by providing:
- **Data Scraper**: Scrapes university data from the internet and generates JSON files for manual storage in MongoDB.
- **Recommendation Model**: Suggests universities based on user preferences (e.g., degree, course, country, budget).
- **Heatmap Visualization**: Displays insights about student data using clustering and geospatial analysis.

#### ML Technologies Used:
- **Python**: For building and running ML components.
- **BeautifulSoup & Requests**: For web scraping.
- **Pandas & NumPy**: For data preprocessing and analysis.
- **Matplotlib, Seaborn & Folium**: For data visualization.
- **Flask**: For exposing ML models as APIs.

---

## Integration Workflow

### 1. **Frontend and Backend**
- The frontend communicates with the backend using REST APIs.
- The backend handles user authentication, profile updates, and university data management.

### 2. **Backend and ML**
- The backend interacts with the ML components via Flask APIs.
- Example ML API endpoints:
  - `/recommend`: Accepts user preferences and returns recommended universities.
  - `/heatmap`: Displays a heatmap of student data.

### 3. **Frontend and ML**
- The frontend indirectly interacts with ML components through the backend.
- Example workflow:
  - The user submits preferences on the frontend.
  - The backend forwards the request to the ML API.
  - The ML API processes the data and returns results to the backend, which are then displayed on the frontend.

---

## Installation and Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.8 or higher)
- **MongoDB** (local or remote instance)

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd Project-Study_Abroad
   ```

2. **Set Up the Backend**:
   - Navigate to the backend directory:
     ```bash
     cd Abroad-backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and configure environment variables:
     ```properties
     MONGO_URI=mongodb://0.0.0.0/Abroad
     JWT_SECRET=MY_Key
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Set Up the Frontend**:
   - Navigate to the frontend directory:
     ```bash
     cd ../Abroad-frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and configure the API URL:
     ```properties
     VITE_API_URL=http://localhost:5000/api
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Set Up the ML Component**:
   - Navigate to the ML directory:
     ```bash
     cd ../Abroad-ml
     ```
   - Create a virtual environment and activate it:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```
   - Install dependencies:
     ```bash
     pip install -r requirements.txt
     ```
   - Start the Flask server:
     ```bash
     python app.py
     ```

---

## Project Structure

```
Project-Study_Abroad/
├── Abroad-backend/          # Backend codebase
├── Abroad-frontend/         # Frontend codebase
├── Abroad-ml/               # Machine learning models and APIs
├── README.md                # Root README for the project
```

---

## Key Features

1. **User Authentication**:
   - Secure login and registration using JWT.
   - Profile management with wishlist functionality.

2. **University Data Management**:
   - Add, update, and retrieve university details.

3. **Personalized Recommendations**:
   - Suggests universities based on user preferences using ML models.

4. **Interactive Visualizations**:
   - Heatmaps and insights about student data.

5. **Data Scraping**:
   - Scrapes university details from the internet for manual storage in MongoDB.

---

## Running the Complete Project

1. Ensure all components (backend, frontend, ML) are running.
2. Access the frontend at:
   ```
   http://localhost:5173
   ```
3. Use the platform to explore programs, manage profiles, and get recommendations.

---

## Future Enhancements

- Add more advanced ML models for better recommendations.
- Integrate payment gateways for application fee processing.
- Expand the database with more universities and programs.

---


