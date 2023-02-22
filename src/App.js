import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] =  useState([
    {
        id: 1,
        text: 'shop for school',
        day: 'August 29th 5pm',
        reminder: true
    },

    {
        id: 2,
        text: 'write a few line sof code with brad traversy',
        day: 'August 30th 5pm',
        reminder: true
    },

    {
        id: 3,
        text: 'Go to the grocery store',
        day: 'August 31st 1:30pm',
        reminder: false
    }
])

const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1

  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

// when task Double CLicked
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder } : task
   )
  )
}

  return (
    <div className="container">
      <Header title={"Task Tracker"} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
     { tasks.length > 0 ? ( 
       <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) : (
        "No Task Added" 
        )}
       
    </div>
  );
}

export default App;
