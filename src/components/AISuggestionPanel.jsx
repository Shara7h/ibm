import { Sparkles, CheckCircle, User } from 'lucide-react';

const AISuggestionPanel = ({ suggestion, onAccept, onDecline }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-4">
        <Sparkles className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-800">AI Recommendation</h3>
        <span className="ml-auto text-sm font-medium text-blue-600">
          {suggestion.confidence}% Match
        </span>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">For task:</p>
        <p className="font-semibold text-gray-800">{suggestion.taskTitle}</p>
      </div>

      <div className="bg-white rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={`https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200`}
            alt={suggestion.suggestedDeveloper.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-800">{suggestion.suggestedDeveloper.name}</p>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <User className="w-3 h-3" />
              <span>Suggested Developer</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Why this developer?</p>
          {suggestion.suggestedDeveloper.reason.map((reason, index) => (
            <div key={index} className="flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">{reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={onAccept}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Accept Suggestion
        </button>
        <button
          onClick={onDecline}
          className="flex-1 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Assign Manually
        </button>
      </div>
    </div>
  );
};

export default AISuggestionPanel;
