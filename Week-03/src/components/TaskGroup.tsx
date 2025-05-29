import React from 'react';
import type { Task } from '../types/Task';
import TaskItem from './TaskItem';

interface TaskGroupProps {
  title: string;
  tasks: Task[];
  isExpanded: boolean;
  onToggleExpand: () => void;
  onToggleTask: (taskId: string) => void;
}

const TaskGroup: React.FC<TaskGroupProps> = ({ 
  title, 
  tasks, 
  isExpanded, 
  onToggleExpand, 
  onToggleTask 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border mb-4">
      <div 
        className="flex items-center gap-2 p-4 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onToggleExpand}
      >
        <span className="text-gray-600">
          {isExpanded ? '▼' : '▶'}
        </span>
        <h3 className="text-lg font-semibold text-gray-800">
          {title} ({tasks.length})
        </h3>
      </div>
      {isExpanded && (
        <div className="px-4 pb-4 space-y-2">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No tasks in this group</p>
          ) : (
            tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggleTask={onToggleTask}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TaskGroup;