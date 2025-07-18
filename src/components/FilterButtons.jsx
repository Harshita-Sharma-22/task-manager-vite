export default function FilterButtons({ currentFilter, onFilterChange }) {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'completed', label: 'Completed' }
  ]

  return (
    <div className="flex space-x-2 mb-6">
      {filters.map(filter => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            currentFilter === filter.value 
              ? 'bg-primary-500 text-white shadow-sm' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}