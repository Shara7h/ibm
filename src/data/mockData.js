export const mockUsers = [
  {
    id: 1,
    name: 'Rahul Kumar',
    email: 'rahul@example.com',
    role: 'Developer',
    skills: ['React', 'Node.js', 'MongoDB'],
    currentTaskCount: 2,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@example.com',
    role: 'Manager',
    skills: ['Project Management', 'Agile', 'Leadership'],
    currentTaskCount: 5,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 3,
    name: 'Amit Patel',
    email: 'amit@example.com',
    role: 'Developer',
    skills: ['Python', 'Django', 'PostgreSQL'],
    currentTaskCount: 3,
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    email: 'sneha@example.com',
    role: 'Developer',
    skills: ['React', 'TypeScript', 'GraphQL'],
    currentTaskCount: 1,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram@example.com',
    role: 'Admin',
    skills: ['DevOps', 'AWS', 'Kubernetes'],
    currentTaskCount: 4,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export const mockTasks = [
  {
    id: 1,
    title: 'Build Login API',
    description: 'Create authentication endpoints for user login',
    priority: 'High',
    status: 'Todo',
    assignedTo: 1,
    deadline: '2026-03-15',
    requiredSkill: 'Node.js',
    createdAt: '2026-03-10'
  },
  {
    id: 2,
    title: 'Design Dashboard UI',
    description: 'Create wireframes and mockups for the main dashboard',
    priority: 'Medium',
    status: 'In Progress',
    assignedTo: 4,
    deadline: '2026-03-18',
    requiredSkill: 'React',
    createdAt: '2026-03-09'
  },
  {
    id: 3,
    title: 'Database Schema Design',
    description: 'Design and implement the database schema',
    priority: 'High',
    status: 'In Progress',
    assignedTo: 3,
    deadline: '2026-03-14',
    requiredSkill: 'PostgreSQL',
    createdAt: '2026-03-08'
  },
  {
    id: 4,
    title: 'Write Unit Tests',
    description: 'Write comprehensive unit tests for authentication module',
    priority: 'Medium',
    status: 'Review',
    assignedTo: 1,
    deadline: '2026-03-16',
    requiredSkill: 'Testing',
    createdAt: '2026-03-07'
  },
  {
    id: 5,
    title: 'Setup CI/CD Pipeline',
    description: 'Configure automated deployment pipeline',
    priority: 'High',
    status: 'Completed',
    assignedTo: 5,
    deadline: '2026-03-12',
    requiredSkill: 'DevOps',
    createdAt: '2026-03-05'
  },
  {
    id: 6,
    title: 'Implement Task Board',
    description: 'Create drag and drop task board interface',
    priority: 'High',
    status: 'Todo',
    assignedTo: 4,
    deadline: '2026-03-20',
    requiredSkill: 'React',
    createdAt: '2026-03-11'
  },
  {
    id: 7,
    title: 'API Documentation',
    description: 'Document all API endpoints',
    priority: 'Low',
    status: 'Todo',
    assignedTo: 2,
    deadline: '2026-03-25',
    requiredSkill: 'Technical Writing',
    createdAt: '2026-03-10'
  },
  {
    id: 8,
    title: 'Performance Optimization',
    description: 'Optimize application performance and load times',
    priority: 'Medium',
    status: 'Review',
    assignedTo: 3,
    deadline: '2026-03-22',
    requiredSkill: 'Performance',
    createdAt: '2026-03-09'
  }
];

export const mockNotifications = [
  {
    id: 1,
    type: 'task_assigned',
    message: 'You have been assigned to "Build Login API"',
    timestamp: '2026-03-11T10:30:00',
    read: false
  },
  {
    id: 2,
    type: 'task_completed',
    message: 'Vikram Singh completed "Setup CI/CD Pipeline"',
    timestamp: '2026-03-11T09:15:00',
    read: false
  },
  {
    id: 3,
    type: 'deadline_approaching',
    message: 'Deadline approaching for "Database Schema Design" (Due: Mar 14)',
    timestamp: '2026-03-11T08:00:00',
    read: true
  },
  {
    id: 4,
    type: 'task_assigned',
    message: 'New task "Implement Task Board" assigned to you',
    timestamp: '2026-03-10T16:45:00',
    read: true
  }
];

export const mockActivities = [
  {
    id: 1,
    user: 'Vikram Singh',
    action: 'completed',
    task: 'Setup CI/CD Pipeline',
    timestamp: '2026-03-11T09:15:00'
  },
  {
    id: 2,
    user: 'Sneha Reddy',
    action: 'started working on',
    task: 'Design Dashboard UI',
    timestamp: '2026-03-11T08:30:00'
  },
  {
    id: 3,
    user: 'Amit Patel',
    action: 'moved to review',
    task: 'Performance Optimization',
    timestamp: '2026-03-10T17:20:00'
  },
  {
    id: 4,
    user: 'Rahul Kumar',
    action: 'commented on',
    task: 'Write Unit Tests',
    timestamp: '2026-03-10T15:45:00'
  },
  {
    id: 5,
    user: 'Priya Sharma',
    action: 'created',
    task: 'API Documentation',
    timestamp: '2026-03-10T14:30:00'
  }
];

export const mockAISuggestions = [
  {
    taskId: 1,
    taskTitle: 'Build Login API',
    suggestedDeveloper: {
      id: 1,
      name: 'Rahul Kumar',
      reason: [
        'Strong skill match in Node.js',
        'Low current workload (2 tasks)',
        'Available for immediate assignment'
      ]
    },
    confidence: 92
  },
  {
    taskId: 6,
    taskTitle: 'Implement Task Board',
    suggestedDeveloper: {
      id: 4,
      name: 'Sneha Reddy',
      reason: [
        'Expert in React and TypeScript',
        'Lowest workload among React developers',
        'Previous experience with drag-and-drop features'
      ]
    },
    confidence: 88
  }
];
