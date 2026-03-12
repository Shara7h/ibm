import { Calendar, User, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const TaskCard = ({ task, onDragStart, draggable = true }) => {
  const { users } = useApp();
  const assignedUser = users.find(u => u.id === task.assignedTo);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const isOverdue = () => {
    const deadline = new Date(task.deadline);
    const today = new Date();
    return deadline < today && task.status !== 'Completed';
  };

  return (
    <div
      draggable={draggable}
      onDragStart={(e) => onDragStart && onDragStart(e, task)}
      className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-move"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-800 text-sm">{task.title}</h3>
        <span
          className={`px-2 py-1 rounded text-xs font-medium border ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{task.description}</p>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <User className="w-3 h-3" />
          <span>{assignedUser?.name || 'Unassigned'}</span>
        </div>

        <div className={`flex items-center space-x-1 ${isOverdue() ? 'text-red-600 font-medium' : ''}`}>
          {isOverdue() && <AlertCircle className="w-3 h-3" />}
          <Calendar className="w-3 h-3" />
          <span>{new Date(task.deadline).toLocaleDateString()}</span>
        </div>
      </div>

      {assignedUser && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <img
              src={assignedUser.avatar}
              alt={assignedUser.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs text-gray-600">{assignedUser.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
