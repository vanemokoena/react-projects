import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Fetching tasks from the backend API
    axios.get('/api/tasks').then((response) => setTasks(response.data));
  }, []);

  const handleAddTask = () => {
    // Adding task to the backend API
    axios.post('/api/tasks', { task: newTask }).then((response) => {
      setTasks([...tasks, response.data]);
      setNewTask('');
    });
  };

  const handleDeleteTask = (id) => {
    // Deleting task from the backend API
    axios.delete(`/api/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
  };

  return (
    <Container>
      <h2>Tasks</h2>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="New Task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        </Form.Group>
        <Button variant="primary" onClick={handleAddTask}>Add Task</Button>
      </Form>

      <Card>
        <ListGroup variant="flush">
          {tasks.map((task) => (
            <ListGroup.Item key={task.id}>
              {task.task}
              <Button variant="danger" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
}

export default TaskPage;
