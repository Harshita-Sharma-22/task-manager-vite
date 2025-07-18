import { motion, AnimatePresence } from 'framer-motion';
import { FaTrash, FaCheck, FaRegCircle } from 'react-icons/fa';

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="space-y-3">
      <AnimatePresence>
        {tasks.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 py-4"
          >
            No tasks found
          </motion.p>
        ) : (
          tasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-xl shadow-sm ${
                task.completed ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="flex items-center">
                <button
                  onClick={() => onToggleTask(task.id)}
                  className={`mr-3 text-xl ${
                    task.completed ? 'text-green-500' : 'text-gray-300'
                  }`}
                >
                  {task.completed ? <FaCheck /> : <FaRegCircle />}
                </button>
                <span
                  className={`flex-grow text-lg ${
                    task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                  }`}
                >
                  {task.title}
                </span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-2"
                >
                  <FaTrash />
                </button>
              </div>
            </motion.li>
          ))
        )}
      </AnimatePresence>
    </ul>
  );
}