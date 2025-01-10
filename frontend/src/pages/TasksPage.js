import { useEffect } from 'react'
import { useTasksContext } from '../hooks/useTasksContext'
import TaskDetails from '../components/TaskDetails'
import './TasksPage.css' // ملف CSS مخصص إذا لزم الأمر

const TasksPage = () => {
  const { tasks, dispatch } = useTasksContext()

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks')
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_TASKS', payload: json })
      }
    }

    fetchTasks()
  }, [dispatch])

  return (
    <div className="tasks-page">
      <h2>All Tasks</h2>
      <div className="tasks">
        {tasks && tasks.map((task) => (
          <TaskDetails key={task._id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default TasksPage
