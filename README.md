# React + Vite
# React To-Do App with Weather Integration

## 📌 Overview
This is a **React-based To-Do App** with the following features:
- **Task Management**: Add and remove tasks.
- **Priority Selection**: Assign `High`, `Medium`, or `Low` priority.
- **Weather Integration**: Fetch weather data based on a city input.
- **User Authentication**: Sign up and log in using local storage.
- **State Management**: Implemented using Redux.

---

## 🚀 Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Environment Variables**
Create a `.env` file in the project root and add:
```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

### 4️⃣ **Run the Project**
```sh
npm run dev
```
The app will be available at **`http://localhost:5173/`**.

---

## 🎮 Features

### ✅ **User Authentication**
- **Sign Up**: Users can register an account.
- **Login**: Users can log in with their credentials.
- **Local Storage Authentication**: Keeps users logged in.

### ✅ **Task Management**
- **Add a Task**: Enter task details and select a priority.
- **Delete a Task**: Remove tasks from the list.
- **Sort by Priority**: Tasks are displayed in order of priority.

### ✅ **Weather Integration**
- **City Input**: Users can enter a city to fetch the current temperature.
- **OpenWeather API**: Uses OpenWeather's free API to get real-time weather data.

---

## 📁 Project Structure
```
react-todo-app/
│── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   ├── redux/
│   │   ├── store.js
│   │   ├── taskSlice.js
│   │   ├── authSlice.js
│   ├── api/
│   │   ├── weatherAPI.js
│   ├── App.jsx
│   ├── main.jsx
│── .env
│── package.json
│── README.md
```

---

## 🔗 API Integration
- **OpenWeatherMap API** for weather data
- **Redux Toolkit** for state management

---

## 🛠 Technologies Used
- **React.js**
- **Redux Toolkit**
- **React Router**
- **Material UI**
- **OpenWeather API**

---

## 🚀 Deployment
To deploy on **Vercel**:
```sh
npm run build
vercel deploy
```
To deploy on **Netlify**:
```sh
npm run build
netlify deploy
```

---

## 🤝 Contributing
Feel free to fork the repo and submit pull requests!

---

## 📜 License
This project is licensed under the MIT License.


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
