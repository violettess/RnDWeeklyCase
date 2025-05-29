export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const compareDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const compareToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const compareTomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate());

  if (compareDate.getTime() === compareToday.getTime()) {
    return 'Today';
  } else if (compareDate.getTime() === compareTomorrow.getTime()) {
    return 'Tomorrow';
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
};

export const isTaskExpired = (dueDate: string): boolean => {
  const taskDate = new Date(dueDate);
  const today = new Date();
  
  const compareTaskDate = new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate());
  const compareToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
  return compareTaskDate.getTime() < compareToday.getTime();
};

export const isToday = (dateString: string): boolean => {
  const date = new Date(dateString);
  const today = new Date();
  
  return date.getFullYear() === today.getFullYear() &&
         date.getMonth() === today.getMonth() &&
         date.getDate() === today.getDate();
};