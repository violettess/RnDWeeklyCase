import React from 'react';
import type { Task } from '../types/Task';
import { formatDate } from '../utils/dateUtils';

interface TaskItemProps {
  task: Task;
  onToggleTask: (taskId: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleTask }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
          className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
        />
        <span className={`text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.title}
        </span>
      </div>
      <span className="text-sm text-gray-500 font-medium">
        {formatDate(task.dueDate)}
      </span>
    </div>
  );
};

export default TaskItem;