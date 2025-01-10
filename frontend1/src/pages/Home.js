import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, VStack, Text } from '@chakra-ui/react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get('/api/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add Task
  const addTask = async (taskData) => {
    try {
      const res = await axios.post('/api/tasks', taskData);
      setTasks([...tasks, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  // Update Task
  const updateTask = async (id, updatedData) => {
    try {
      const res = await axios.put(`/api/tasks/${id}`, updatedData);
      const updatedTasks = tasks.map((task) =>
        task._id === id ? res.data : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error(error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <VStack spacing={8}>
      <TaskForm onAdd={addTask} />
      <Box w="full">
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          Your Tasks
        </Text>
        <TaskList tasks={tasks} onUpdate={updateTask} onDelete={deleteTask} />
      </Box>
    </VStack>
  );
};

export default Home;
