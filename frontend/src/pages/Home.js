import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Task Management System</h1>
      <p>Manage your tasks efficiently and effectively.</p>
      <div className="home-buttons">
        <Link to="/tasks">
          <button className="home-button">View All Tasks</button>
        </Link>
        <Link to="/new">
          <button className="home-button">Add New Task</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
















// import { useEffect }   from "react";
// import { useTasksContext } from "../hooks/useWorkoutsContext";

// import TaskDetails from '../components/TaskDetails'
// import TaskForm from '../components/TaskForm'


// const Home = ()=>{

//     const{tasks,dispatch}=  useTasksContext()


//     useEffect(()=>{
//         const fetchTasks= async()=>{
//             const response = await fetch('/api/tasks')
//             const json = await response.json()

//             if (response.ok) {
//                 dispatch({type: 'SET_TASKS', payload: json})
//             }
//         }

//         fetchTasks()
    
//     },[dispatch])



//     return (
//         <div className="home">
//             <div className="tasks">
//                 {tasks&&tasks.map((task)=>(
//                     <TaskDetails key = {task._id} task = {task} />
//                 ))}
//             </div>
//             <TaskForm />
//         </div>
//     )
// }

// export default Home;