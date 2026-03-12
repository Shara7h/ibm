import { useApp } from '../context/AppContext';
import AISuggestionPanel from '../components/AISuggestionPanel';
import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AISuggestionsPage = () => {
  const { aiSuggestions, assignTask } = useApp();
  const navigate = useNavigate();

  const handleAccept = (suggestion) => {
    assignTask(suggestion.taskId, suggestion.suggestedDeveloper.id);
  };

  const handleDecline = (suggestion) => {
    navigate('/team');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <Sparkles className="w-8 h-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">AI Suggestions</h1>
          <p className="text-gray-600 mt-1">
            Smart recommendations for optimal task assignments
          </p>
        </div>
      </div>

      {aiSuggestions.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <Sparkles className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            No AI Suggestions Available
          </h2>
          <p className="text-gray-600">
            All tasks have been assigned or no matching developers found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {aiSuggestions.map((suggestion) => (
            <AISuggestionPanel
              key={suggestion.taskId}
              suggestion={suggestion}
              onAccept={() => handleAccept(suggestion)}
              onDecline={() => handleDecline(suggestion)}
            />
          ))}
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-gray-800 mb-2">How AI Suggestions Work</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex items-start space-x-2">
            <span className="text-blue-600">•</span>
            <span>
              Analyzes developer skills and matches them with task requirements
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600">•</span>
            <span>
              Considers current workload to ensure balanced task distribution
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600">•</span>
            <span>
              Evaluates availability and past performance for optimal assignments
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-blue-600">•</span>
            <span>
              Provides confidence scores based on multiple matching factors
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AISuggestionsPage;
