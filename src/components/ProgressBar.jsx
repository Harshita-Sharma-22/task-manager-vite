export default function ProgressBar({ percentage }) {
  return (
    <div className="mb-6">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-1 text-center">
        {percentage}% completed
      </p>
    </div>
  );
}