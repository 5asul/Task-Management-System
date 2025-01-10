import { useTasksContext } from "../hooks/useTasksContext";



const TaskDetails = ({task})=> {
    const {dispatch} = useTasksContext()


    const handleClick = async()=>{
        const response = await fetch('/api/tasks/'+task._id,{
            method: 'DELETE',
           
        })
        const json = await response.json()


        if (response.ok){
            dispatch({type:'DELETE_TASK', payload: json})
        }
    }


    return(
        <div className="task-details">
            <h4>{task.title}</h4>
            <p><strong>{task.description}</strong></p>
            <p className="due-date"><strong>{task.dueDate}</strong></p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>

    )
}

export default TaskDetails;