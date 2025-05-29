export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export const getDateIndicator = (dueDate: string): { text: string; color: string } => {
  const today = new Date();
  const due = new Date(dueDate);
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return { text: 'Today', color: 'bg-blue-100 text-blue-600' };
  } else if (diffDays === 1) {
    return { text: 'Tomorrow', color: 'bg-orange-100 text-orange-600' };
  } else if (diffDays > 1 && diffDays <= 7) {
    return { 
      text: due.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' }),
      color: 'bg-green-100 text-green-600'
    };
  } else {
    return { 
      text: due.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
      color: 'bg-gray-100 text-gray-600'
    };
  }
};

export const isToday = (dateString: string): boolean => {
  const today = new Date();
  const date = new Date(dateString);
  return today.toDateString() === date.toDateString();
};

export const isOverdue = (dateString: string): boolean => {
  const today = new Date();
  const date = new Date(dateString);
  return date < today && !isToday(dateString);
};