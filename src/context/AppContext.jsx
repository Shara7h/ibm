import { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers, mockTasks, mockNotifications, mockActivities, mockAISuggestions } from '../data/mockData';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState(mockTasks);
  const [users, setUsers] = useState(mockUsers);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [activities, setActivities] = useState(mockActivities);
  const [aiSuggestions, setAiSuggestions] = useState(mockAISuggestions);

  const login = (email, password) => {
    const user = users.find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const register = (userData) => {
    const newUser = {
      id: users.length + 1,
      ...userData,
      currentTaskCount: 0,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'
    };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const createTask = (taskData) => {
    const newTask = {
      id: tasks.length + 1,
      ...taskData,
      status: 'Todo',
      createdAt: new Date().toISOString().split('T')[0]
    };
    setTasks([...tasks, newTask]);

    addActivity({
      user: currentUser?.name || 'System',
      action: 'created',
      task: taskData.title,
      timestamp: new Date().toISOString()
    });

    return newTask;
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));

    const task = tasks.find(t => t.id === taskId);
    if (task) {
      addActivity({
        user: currentUser?.name || 'System',
        action: newStatus === 'Completed' ? 'completed' : `moved to ${newStatus.toLowerCase()}`,
        task: task.title,
        timestamp: new Date().toISOString()
      });
    }
  };

  const assignTask = (taskId, userId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, assignedTo: userId } : task
    ));

    const task = tasks.find(t => t.id === taskId);
    const user = users.find(u => u.id === userId);

    if (task && user) {
      addNotification({
        type: 'task_assigned',
        message: `You have been assigned to "${task.title}"`,
        timestamp: new Date().toISOString()
      });

      addActivity({
        user: currentUser?.name || 'System',
        action: 'assigned',
        task: `${task.title} to ${user.name}`,
        timestamp: new Date().toISOString()
      });
    }
  };

  const addNotification = (notification) => {
    const newNotification = {
      id: notifications.length + 1,
      read: false,
      ...notification
    };
    setNotifications([newNotification, ...notifications]);
  };

  const markNotificationAsRead = (notificationId) => {
    setNotifications(notifications.map(notif =>
      notif.id === notificationId ? { ...notif, read: true } : notif
    ));
  };

  const addActivity = (activity) => {
    const newActivity = {
      id: activities.length + 1,
      ...activity
    };
    setActivities([newActivity, ...activities]);
  };

  const getTaskStats = () => {
    return {
      total: tasks.length,
      inProgress: tasks.filter(t => t.status === 'In Progress').length,
      completed: tasks.filter(t => t.status === 'Completed').length,
      overdue: tasks.filter(t => {
        const deadline = new Date(t.deadline);
        const today = new Date();
        return deadline < today && t.status !== 'Completed';
      }).length
    };
  };

  const value = {
    currentUser,
    tasks,
    users,
    notifications,
    activities,
    aiSuggestions,
    login,
    register,
    logout,
    createTask,
    updateTaskStatus,
    assignTask,
    markNotificationAsRead,
    getTaskStats
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
