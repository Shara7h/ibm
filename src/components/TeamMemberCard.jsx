import { Mail, Briefcase, CheckCircle } from 'lucide-react';

const TeamMemberCard = ({ member, onAssignTask }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-16 h-16 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>

          <div className="flex items-center space-x-2 mt-1 text-sm text-gray-600">
            <Briefcase className="w-4 h-4" />
            <span>{member.role}</span>
          </div>

          <div className="flex items-center space-x-2 mt-1 text-sm text-gray-500">
            <Mail className="w-4 h-4" />
            <span>{member.email}</span>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Skills</p>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>{member.currentTaskCount} active tasks</span>
        </div>

        <button
          onClick={() => onAssignTask && onAssignTask(member)}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
        >
          Assign Task
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
