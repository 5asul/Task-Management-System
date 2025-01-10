import { useState } from "react"
import { useTasksContext } from "../hooks/useTasksContext";


const TaskForm = ()=>{
    const {dispatch} = useTasksContext()

    const [title, setTitle ]= useState('')
    const [description, setDescription ]= useState('')
    const [dueDate, setDueDate ]= useState('')
    const [error, setError ]= useState(null)
    // const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e)=>{
        e.preventDefault()

        const task = {title, description, dueDate }

        const response = await fetch('/api/tasks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
            // setEmptyFields(json.emptyFields)
        }
        if (response.ok){
            // setEmptyFields([])
            setError(null)
            setTitle('')
            setDescription('')
            setDueDate('')
            
            console.log('new workout added', json)

            dispatch({type: 'CREATE_TASKS', payload: json})
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Task</h3>

            <label  >Task Title</label>
            <input 
            type="text"
            onChange={(e)=> setTitle(e.target.value)}
            value = {title}
            // className={emptyFields.includes('title') ? 'error' : ''}
             />
            <label >Task description</label>
            <input 
            type="text"
            onChange={(e)=> setDescription(e.target.value)}
            value = {description}
            // className={emptyFields.includes('title') ? 'error' : ''}
             />
            <label >Task dueDate</label>
            <input 
            type="date"
            onChange={(e)=> setDueDate(e.target.value)}
            value = {dueDate}
            // className={emptyFields.includes('title') ? 'error' : ''}
             />

             <button>Add Task</button>
             {error && <div className="error">{error}</div>}
        </form>
    )
}

export default TaskForm