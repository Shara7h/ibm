import TaskBoard from '../components/TaskBoard';
import { useNavigate } from 'react-router-dom';
import { PlusCircle } from 'lucide-react';

const TaskBoardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Task Board</h1>
          <p className="text-gray-600 mt-2">Drag and drop tasks to update their status</p>
        </div>
        <button
          onClick={() => navigate('/create-task')}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Create Task</span>
        </button>
      </div>

      <TaskBoard />
    </div>
  );
};

export default TaskBoardPage;
