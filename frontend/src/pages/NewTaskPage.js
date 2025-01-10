import TaskForm from '../components/TaskForm'
import './NewTaskPage.css'  

const NewTaskPage = () => {
  return (
    <div className="new-task-page">
      <h2>Create a New Task</h2>
      <TaskForm />
    </div>
  )
}

export default NewTaskPage
