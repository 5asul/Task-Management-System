const Task = require('../models/Task');
const mongoose = require('mongoose')

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({createAt:-1});
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getTask = async (req, res) => {
  try{

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such task'})
    }
  
    const task = await Task.findById(id)
  
    if (!task) {
      return res.status(404).json({error: 'No such task'})
    }
  
    res.status(200).json(task)
    
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Public
exports.createTask = async (req, res) => {
  
  const { title, description, dueDate } = req.body;

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!description) {
    emptyFields.push('description')
  }
  if (!dueDate) {
    emptyFields.push('dueDate')
  }
  // if (emptyFields.length > 0) {
  //   return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
  // }
  try {
    
    const newTask = await Task.create({ title, description, dueDate });
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc    Update an existing task
// @route   PUT /api/tasks/:id
// @access  Public
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    const updatedTask = await Task.findByIdAndUpdate({_id:id},{
      ...req.body
    })
    if (!updatedTask) {
      return res.status(404).json({error: 'No such task'})
    }
    return res.status(200).json(updatedTask);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Public
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such task'})
    }
    const deletedTask = await Task.findByIdAndDelete({_id: id});
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(deletedTask);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
