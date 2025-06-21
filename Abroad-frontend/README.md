# Abroad Frontend

This is the frontend for the "Study Abroad" project, built using **React.js** with **Vite** as the build tool and **Tailwind CSS** for styling. It provides a responsive and interactive user interface for users to explore programs, manage profiles, and access recommendations.

---

## Features

- **Authentication**: Login and registration with JWT-based authentication.
- **Dynamic Program Listings**: Displays university programs fetched from the backend.
- **User Profile Management**: Allows users to view and update their profiles.
- **University Recommendations**: Provides personalized university recommendations based on user input.
- **Interactive Heatmap**: Displays a heatmap of student data.
- **Application Process Guide**: Step-by-step guide for applying to universities.
- **Responsive Design**: Optimized for both desktop and mobile devices.

---

## Installation

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v16 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** as a package manager.

### Steps to Install and Run the Project

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Abroad-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   This will install all the required libraries and frameworks, including:
   - React.js
   - Vite
   - Tailwind CSS
   - Framer Motion
   - Lucide Icons
   - React Router

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```properties
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

---

## Installing Individual Dependencies

If you need to install individual dependencies manually, use the following commands:

1. **React.js**:
   ```bash
   npm install react react-dom
   ```

2. **Vite**:
   ```bash
   npm install vite
   ```

3. **Tailwind CSS**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

4. **Framer Motion**:
   ```bash
   npm install framer-motion
   ```

5. **Lucide Icons**:
   ```bash
   npm install lucide-react
   ```

6. **React Router**:
   ```bash
   npm install react-router-dom
   ```

7. **Axios** (if used for API calls):
   ```bash
   npm install axios
   ```

---

## Project Structure

```
Abroad-frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer section
│   │   ├── Sidebar.jsx      # Sidebar for navigation and filters
│   │   ├── ProgramCard.jsx  # Card component for displaying program details
│   │   └── ProtectedRoute.jsx # Route protection for authenticated users
│   ├── pages/               # Pages for different routes
│   │   ├── Home.jsx         # Home page
│   │   ├── Programs.jsx     # Programs listing page
│   │   ├── Profile.jsx      # User profile page
│   │   ├── Recommend.jsx    # University recommendation page
│   │   ├── Stories.jsx      # Student stories page with heatmap
│   │   ├── Process.jsx      # Application process guide
│   │   ├── Auth.jsx         # Login and registration page
│   │   └── About.jsx        # About us page
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point for the React app
│   └── index.css            # Global styles
├── .env                     # Environment variables
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
└── package.json             # Project metadata and dependencies
```

---

## Key Pages and Features

### 1. **Home Page (`/`)**
   - Displays featured programs with details like university name, location, duration, and price.
   - Includes a hero section for welcoming users.

### 2. **Programs Page (`/programs`)**
   - Fetches and displays university programs from the backend.
   - Supports pagination for loading more programs dynamically.

### 3. **Profile Page (`/profile`)**
   - Displays user details like name, email, website, and wishlist.
   - Allows users to edit and update their profile information.

### 4. **Recommendation Page (`/recommend`)**
   - Provides personalized university recommendations based on user input (degree, course, country, and budget).
   - Fetches recommendations from an external API.

### 5. **Student Stories Page (`/stories`)**
   - Displays an interactive heatmap showing student data.
   - Includes facts and insights about studying abroad.

### 6. **Application Process Page (`/process`)**
   - Step-by-step guide for applying to universities.
   - Includes visuals and descriptions for each step.

### 7. **Authentication Page (`/auth`)**
   - Login and registration forms with validation.
   - Integrates with the backend for user authentication.

### 8. **About Us Page (`/about`)**
   - Provides information about the platform and its mission.

---

## Styling and Animations

- **Tailwind CSS**: Used for responsive and modern UI design.
- **Framer Motion**: Adds smooth animations and transitions to components.

---

## Protected Routes

- Routes like `/profile`, `/recommend`, and `/programs` are protected and require the user to be authenticated.
- The `ProtectedRoute` component ensures only authenticated users can access these routes.

---

## API Integration

- The frontend communicates with the backend using the `VITE_API_URL` environment variable.
- Axios or Fetch API is used for making HTTP requests.

---

