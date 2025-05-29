import React from 'react';
import { Check } from 'lucide-react';
import type { Task } from '../types/Task';
import { getDateIndicator } from '../utils/dateUtils';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  const indicator = getDateIndicator(task.dueDate);
  
  const getIndicatorClass = (color: string) => {
    if (color.includes('blue')) return 'indicator-today';
    if (color.includes('orange')) return 'indicator-tomorrow';
    if (color.includes('green')) return 'indicator-upcoming';
    return 'indicator-default';
  };

  return (
    <div className="task-item">
      <button
        onClick={() => onToggle(task.id)}
        className={`checkbox-button ${task.completed ? 'completed' : ''}`}
      >
        {task.completed && <Check className="check-icon" />}
      </button>
      <span className={`task-title ${task.completed ? 'completed' : ''}`}>
        {task.title}
      </span>
      <span className={`date-indicator ${getIndicatorClass(indicator.color)}`}>
        {indicator.text}
      </span>
    </div>
  );
};

export default TaskItem;