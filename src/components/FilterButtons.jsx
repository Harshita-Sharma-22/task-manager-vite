import { motion } from 'framer-motion';

export default function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <div className="flex space-x-2 mb-6 p-1 bg-gray-100 rounded-xl">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`relative px-4 py-2 text-sm rounded-lg transition-colors ${
            currentFilter === filter.value
              ? 'text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {filter.label}
          {currentFilter === filter.value && (
            <motion.div
              layoutId="activeFilter"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}