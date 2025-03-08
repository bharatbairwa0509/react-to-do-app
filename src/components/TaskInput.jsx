
// src/components/TaskInput.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { fetchWeather } from '../api/weatherAPI'; // Import weather API function
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, MenuItem } from '@mui/material';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = async () => {
    if (!task.trim()) return;

    let weatherData = null;
    if (city.trim()) {
      weatherData = await fetchWeather(city); // Fetch weather data
    }

    dispatch(addTask({
      id: uuidv4(),
      text: task,
      priority,
      city,
      weather: weatherData ? `${weatherData}°C` : 'N/A',
    }));

    setTask('');
    setCity('');
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', alignItems: 'center' }}>
      <TextField
        label="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        fullWidth
      />
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ width: 180 }}
      />
      <TextField
        select
        label="Priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ width: 180 }}
      >
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add
      </Button>
    </div>
  );
};

export default TaskInput;
