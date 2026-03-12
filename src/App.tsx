import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import TaskBoardPage from './pages/TaskBoardPage';
import CreateTaskPage from './pages/CreateTaskPage';
import TeamPage from './pages/TeamPage';
import AISuggestionsPage from './pages/AISuggestionsPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <DashboardPage />
              </Layout>
            }
          />
          <Route
            path="/tasks"
            element={
              <Layout>
                <TaskBoardPage />
              </Layout>
            }
          />
          <Route
            path="/create-task"
            element={
              <Layout>
                <CreateTaskPage />
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <Layout>
                <TeamPage />
              </Layout>
            }
          />
          <Route
            path="/ai-suggestions"
            element={
              <Layout>
                <AISuggestionsPage />
              </Layout>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
