import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAddTask(title)
      setTitle('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex shadow-sm rounded-lg">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <button 
          type="submit" 
          className="bg-primary-500 text-white px-4 py-2 rounded-r-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors flex items-center"
        >
          <FaPlus className="mr-2" />
          Add
        </button>
      </div>
    </form>
  )
}