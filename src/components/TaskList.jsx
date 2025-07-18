import { FaTrash } from 'react-icons/fa'

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">No tasks found. Add a new task above!</p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {tasks.map(task => (
        <li 
          key={task.id} 
          className={`flex items-center p-4 rounded-lg border ${task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 shadow-xs'}`}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
            className="h-5 w-5 text-primary-500 rounded border-gray-300 focus:ring-primary-500 mr-3 cursor-pointer"
          />
          <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
            {task.title}
          </span>
          <button
            onClick={() => onDeleteTask(task.id)}
            className="text-red-500 hover:text-red-700 focus:outline-none transition-colors p-1 rounded-full hover:bg-red-50"
            aria-label="Delete task"
          >
            <FaTrash className="h-5 w-5" />
          </button>
        </li>
      ))}
    </ul>
  )
}