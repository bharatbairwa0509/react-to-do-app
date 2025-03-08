// src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography } from '@mui/material';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (username.trim() && password.trim()) {
      localStorage.setItem('user_credentials', JSON.stringify({ username, password }));
      navigate('/login');
    } else {
      setError('Please fill all fields.');
    }
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h5">Sign Up</Typography>
      <TextField label="Username" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <Typography color="error">{error}</Typography>}
      <Button variant="contained" color="primary" onClick={handleSignup} style={{ marginTop: '20px' }}>
        Sign Up
      </Button>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Already have an account? <Button onClick={() => navigate('/login')}>Login</Button>
      </Typography>
    </Container>
  );
};

export default Signup;

// src/App.jsx
