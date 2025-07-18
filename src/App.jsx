import { useState } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import FilterButtons from './components/FilterButtons'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a task manager', completed: false },
    { id: 3, title: 'Deploy to production', completed: false }
  ])
  const [filter, setFilter] = useState('all')

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId))
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-md px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Task Manager</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <TaskForm onAddTask={addTask} />
          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
          <TaskList 
            tasks={filteredTasks} 
            onToggleTask={toggleTask} 
            onDeleteTask={deleteTask} 
          />
        </div>
      </div>
    </div>
  )
}

export default App