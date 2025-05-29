import React, { useState, useEffect } from 'react';
import type { Task } from './types/Task';
import { formatDate, isToday, isOverdue } from './utils/dateUtils';
import TaskForm from './components/TaskForm';
import TaskGroup from './components/TaskGroup';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [todayCollapsed, setTodayCollapsed] = useState(false);
  const [otherCollapsed, setOtherCollapsed] = useState(false);

  // Remove overdue tasks on component mount and when tasks change
  useEffect(() => {
    setTasks(prevTasks => prevTasks.filter(task => !isOverdue(task.dueDate)));
  }, []);

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks by today and other
  const todayTasks = tasks.filter(task => isToday(task.dueDate));
  const otherTasks = tasks.filter(task => !isToday(task.dueDate));

  const currentDate = new Date();

  return (
    <div className="app">
      <div className="app-container">
        {/* Header */}
        <div className="header">
          <h1>
            Good Morning, User 👋
          </h1>
          <p>
            It's {formatDate(currentDate)}
          </p>
        </div>

        {/* Task Form */}
        <TaskForm onAddTask={addTask} />

        {/* Task Groups */}
        <div>
          {todayTasks.length > 0 && (
            <TaskGroup
              title="Today"
              tasks={todayTasks}
              isCollapsed={todayCollapsed}
              onToggleCollapse={() => setTodayCollapsed(!todayCollapsed)}
              onToggleTask={toggleTask}
            />
          )}

          {otherTasks.length > 0 && (
            <TaskGroup
              title="Other"
              tasks={otherTasks}
              isCollapsed={otherCollapsed}
              onToggleCollapse={() => setOtherCollapsed(!otherCollapsed)}
              onToggleTask={toggleTask}
            />
          )}

          {tasks.length === 0 && (
            <div className="empty-state">
              <p>No tasks yet. Create your first task above!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;