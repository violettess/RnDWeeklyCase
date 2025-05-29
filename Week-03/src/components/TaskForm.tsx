import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import type { Task } from '../types/Task';

interface TaskFormProps {
  onAddTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (title.trim() && dueDate) {
      onAddTask({
        title: title.trim(),
        dueDate,
        completed: false
      });
      setTitle('');
      setDueDate('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="task-form">
      <div className="form-grid">
        <div className="form-field">
          <label className="form-label">
            What do you want to do?
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Study for mid exams..."
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label className="form-label">
            When should it be done?
          </label>
          <div className="date-input-container">
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="form-input date-input"
            />
            <Calendar className="calendar-icon" />
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="create-button"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default TaskForm;