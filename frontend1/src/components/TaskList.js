import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Text,
  Button,
  HStack,
  Input,
  Textarea,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  const [editableTask, setEditableTask] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editDueDate, setEditDueDate] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEditClick = (task) => {
    setEditableTask(task);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditDueDate(task.dueDate ? task.dueDate.split('T')[0] : '');
    onOpen();
  };

  const handleUpdate = () => {
    onUpdate(editableTask._id, {
      title: editTitle,
      description: editDescription,
      dueDate: editDueDate
    });
    onClose();
  };

  return (
    <>
      {tasks && tasks.length ? (
        tasks.map((task) => (
          <Flex
            key={task._id}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            mb={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Text fontWeight="bold">{task.title}</Text>
              <Text fontSize="sm">{task.description}</Text>
              {task.dueDate && (
                <Text fontSize="xs" color="gray.500">
                  Due: {new Date(task.dueDate).toLocaleDateString()}
                </Text>
              )}
            </Box>
            <HStack spacing={2}>
              <IconButton
                icon={<EditIcon />}
                onClick={() => handleEditClick(task)}
                aria-label="Edit Task"
              />
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => onDelete(task._id)}
                aria-label="Delete Task"
              />
            </HStack>
          </Flex>
        ))
      ) : (
        <Text>No tasks found.</Text>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
          <ModalBody>
            <Text mb={2}>Title</Text>
            <Input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <Text mt={4} mb={2}>
              Description
            </Text>
            <Textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
            />

            <Text mt={4} mb={2}>
              Due Date
            </Text>
            <Input
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskList;
