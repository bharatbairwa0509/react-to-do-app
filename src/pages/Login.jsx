import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { Button, Container, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user_credentials'));
    console.log('Stored User:', storedUser); // Debugging log
    console.log('Entered:', { username, password });

    if (!storedUser) {
      setError('No user found. Please sign up first.');
      return;
    }

    // Ensure both username and password match exactly
    if (
      storedUser.username.trim().toLowerCase() === username.trim().toLowerCase() &&
      storedUser.password === password
    ) {
      dispatch(login());
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h5">Login</Typography>
      <TextField label="Username" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: '20px' }}>
        Login
      </Button>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Don't have an account? <Button onClick={() => navigate('/signup')}>Sign Up</Button>
      </Typography>
    </Container>
  );
};

export default Login;
