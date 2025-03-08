import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Container } from '@mui/material';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const storedUser = JSON.parse(localStorage.getItem('user_credentials'));

  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to={storedUser ? "/login" : "/signup"} replace />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
