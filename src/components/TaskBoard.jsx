import { useState } from 'react';
import TaskCard from './TaskCard';
import { useApp } from '../context/AppContext';

const TaskBoard = () => {
  const { tasks, updateTaskStatus } = useApp();
  const [draggedTask, setDraggedTask] = useState(null);

  const columns = [
    { id: 'Todo', title: 'To Do', color: 'bg-gray-100' },
    { id: 'In Progress', title: 'In Progress', color: 'bg-blue-100' },
    { id: 'Review', title: 'Review', color: 'bg-yellow-100' },
    { id: 'Completed', title: 'Completed', color: 'bg-green-100' }
  ];

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedTask && draggedTask.status !== newStatus) {
      updateTaskStatus(draggedTask.id, newStatus);
    }
    setDraggedTask(null);
  };

  const getTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column) => (
        <div
          key={column.id}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column.id)}
          className="flex flex-col"
        >
          <div className={`${column.color} rounded-t-lg p-4 border-b-4 border-gray-300`}>
            <h3 className="font-semibold text-gray-800 flex items-center justify-between">
              <span>{column.title}</span>
              <span className="bg-white px-2 py-1 rounded-full text-sm">
                {getTasksByStatus(column.id).length}
              </span>
            </h3>
          </div>

          <div className="bg-gray-50 rounded-b-lg p-4 space-y-3 min-h-[400px] flex-1">
            {getTasksByStatus(column.id).map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onDragStart={handleDragStart}
              />
            ))}
            {getTasksByStatus(column.id).length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No tasks
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
