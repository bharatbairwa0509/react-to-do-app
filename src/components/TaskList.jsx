// / src/components/TaskList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/taskSlice';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <List>
      {sortedTasks.map((task) => (
        <ListItem
          key={task.id}
          style={{
            background: task.priority === 'High' ? '#ffdddd' : task.priority === 'Medium' ? '#ffffcc' : '#ddffdd',
            marginBottom: '5px',
            borderRadius: '5px',
            padding: '10px',
          }}
        >
          <ListItemText
            primary={task.text}
            secondary={`Priority: ${task.priority}${task.weather ? ` | Weather: ${task.weather}` : ''}`}
          />
          <IconButton onClick={() => dispatch(deleteTask(task.id))} color="secondary">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
