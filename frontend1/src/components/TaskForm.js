import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Stack
} from '@chakra-ui/react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" maxW="500px">
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Due Date</FormLabel>
          <Input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="teal" type="submit">
          Add Task
        </Button>
      </Stack>
    </Box>
  );
};

export default TaskForm;
