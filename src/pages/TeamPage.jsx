import { useState } from 'react';
import { useApp } from '../context/AppContext';
import TeamMemberCard from '../components/TeamMemberCard';
import { Users } from 'lucide-react';

const TeamPage = () => {
  const { users, tasks, assignTask } = useApp();
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAssignModal, setShowAssignModal] = useState(false);

  const unassignedTasks = tasks.filter(task => !task.assignedTo || task.assignedTo === null);

  const handleAssignTask = (member) => {
    setSelectedMember(member);
    setShowAssignModal(true);
  };

  const assignTaskToMember = (taskId) => {
    if (selectedMember) {
      assignTask(taskId, selectedMember.id);
      setShowAssignModal(false);
      setSelectedMember(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Users className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Team Members</h1>
          <p className="text-gray-600 mt-1">Manage your team and assign tasks</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((member) => (
          <TeamMemberCard
            key={member.id}
            member={member}
            onAssignTask={handleAssignTask}
          />
        ))}
      </div>

      {showAssignModal && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowAssignModal(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">
                  Assign Task to {selectedMember?.name}
                </h2>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {unassignedTasks.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>No unassigned tasks available</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {unassignedTasks.map((task) => (
                      <div
                        key={task.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{task.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                              <span className="px-2 py-1 bg-gray-100 rounded">
                                {task.priority} Priority
                              </span>
                              <span>Due: {new Date(task.deadline).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <button
                            onClick={() => assignTaskToMember(task.id)}
                            className="ml-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Assign
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={() => setShowAssignModal(false)}
                  className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TeamPage;
