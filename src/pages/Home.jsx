// src/pages/Home.jsx
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Advanced To-Do List
      </Typography>
      <TaskInput />
      <TaskList />
    </Container>
  );
};

export default Home;
