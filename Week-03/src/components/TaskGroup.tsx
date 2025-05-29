import React from 'react';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import type { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface TaskGroupProps {
  title: string;
  tasks: Task[];
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onToggleTask: (id: string) => void;
}

const TaskGroup: React.FC<TaskGroupProps> = ({
  title,
  tasks,
  isCollapsed,
  onToggleCollapse,
  onToggleTask
}) => {
  return (
    <div className="task-group">
      <button
        onClick={onToggleCollapse}
        className="group-header"
      >
        {isCollapsed ? (
          <ChevronUp className="chevron-icon" />
        ) : (
          <ChevronDown className="chevron-icon" />
        )}
        <Calendar className="calendar-icon-header" />
        <span>{title}</span>
        <span className="task-count">
          {tasks.length}
        </span>
      </button>
      {!isCollapsed && (
        <div className="task-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} onToggle={onToggleTask} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskGroup;