export default function TaskItem({ task, onUpdate, onDelete }) {
  const isCompleted = task.status === 'completed';

  return (
    <div className={`p-4 mb-4 rounded-lg border ${isCompleted ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'} shadow-sm flex items-center justify-between transition-colors`}>
      <div className="flex-1">
        <h3 className={`text-lg font-semibold ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
          {task.title}
        </h3>
        {task.description && (
          <p className={`text-sm mt-1 ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
            {task.description}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onUpdate(task.id, isCompleted ? 'pending' : 'completed')}
          className={`px-3 py-1 text-sm rounded cursor-pointer ${isCompleted ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
        >
          {isCompleted ? 'Mark Pending' : 'Complete'}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 text-sm rounded cursor-pointer bg-red-100 text-red-700 hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
