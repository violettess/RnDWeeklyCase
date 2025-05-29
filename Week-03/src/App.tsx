import React, { useState, useEffect } from 'react';
import type { Task } from './types/Task';
import { isTaskExpired, isToday } from './utils/dateUtils';
import TaskForm from './components/TaskForm';
import TaskGroup from './components/TaskGroup';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [todayExpanded, setTodayExpanded] = useState(true);
  const [otherExpanded, setOtherExpanded] = useState(true);

  useEffect(() => {
    setTasks(prevTasks => 
      prevTasks.filter(task => !isTaskExpired(task.dueDate))
    );
  }, []);

  const addTask = (title: string, dueDate: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTask = (taskId: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const todayTasks = tasks.filter(task => isToday(task.dueDate));
  const otherTasks = tasks.filter(task => !isToday(task.dueDate));

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Management</h1>
          <p className="text-gray-600">Stay organized and get things done</p>
        </div>

        <TaskForm onAddTask={addTask} />

        <div className="space-y-4">
          <TaskGroup
            title="Today"
            tasks={todayTasks}
            isExpanded={todayExpanded}
            onToggleExpand={() => setTodayExpanded(!todayExpanded)}
            onToggleTask={toggleTask}
          />

          <TaskGroup
            title="Other"
            tasks={otherTasks}
            isExpanded={otherExpanded}
            onToggleExpand={() => setOtherExpanded(!otherExpanded)}
            onToggleTask={toggleTask}
          />
        </div>

        {tasks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
            </div>
            <p className="text-gray-500 text-lg">No tasks yet</p>
            <p className="text-gray-400">Create your first task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;