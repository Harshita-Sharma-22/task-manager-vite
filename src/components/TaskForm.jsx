import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full p-4 pt-6 text-lg border-2 rounded-xl transition-all duration-200 ${
            isFocused ? 'border-blue-500 shadow-md' : 'border-gray-200'
          }`}
          placeholder=" "
        />
        <label
          className={`absolute left-4 transition-all duration-200 ${
            isFocused || title
              ? 'top-2 text-xs text-blue-500'
              : 'top-4 text-gray-400'
          }`}
        >
          What needs to be done?
        </label>
        <button
  type="submit"
  className="absolute right-2 top-2 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
>
  <FaPlus />
  ADD
</button>

      </div>
    </form>
  );
}