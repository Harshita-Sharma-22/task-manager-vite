import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import ProgressBar from './components/ProgressBar';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete React project', completed: false },
    { id: 2, title: 'Buy groceries', completed: true },
    { id: 3, title: 'Go for a walk', completed: false }
  ]);
  const [filter, setFilter] = useState('all');

  const addTask = (title) => {
    setTasks([...tasks, {
      id: Date.now(),
      title: title.trim(),
      completed: false
    }]);
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const completionPercentage = tasks.length 
    ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Task Manager</h1>
          <p className="text-gray-500">Organize your life one task at a time</p>
        </header>

        <ProgressBar percentage={completionPercentage} />

        <div className="bg-white rounded-2xl shadow-lg p-6">
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
  );
}