import { useState } from 'react'

const TaskCreator = ({createNewTask}) => {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmit = (e) => {

      if (newTaskName.trim() === ''){
        alert("Please enter a task name")
        return
      }

      e.preventDefault()
      createNewTask(newTaskName)
      setNewTaskName('')
      
    }

  return (

    <form onSubmit={handleSubmit}>

        <input 
            type="text"
            placeholder="Enter a new task"
            onChange={(e) => setNewTaskName(e.target.value)}
        />

        <button>
            Save task
        </button>

    </form>

  )
}

export default TaskCreator