import React, { useState } from 'react';
import tasks from '../data/tasks';
import FancyText from './FancyText';

const motivationalMessages = [
  "Keep up the hard work!",
  "Don't give up!",
  "You're doing a great job!",
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const toggleTaskCompletion = () => {
    tasks[currentTaskIndex].isCompleted = !tasks[currentTaskIndex].isCompleted;
    setCurrentTaskIndex(currentTaskIndex);
  };

  const { name, isCompleted, color } = tasks[currentTaskIndex];
  const status = isCompleted ? "Completed" : "Pending";

  return (
    <div className="container">
      <FancyText title={true} text={name} color={color} />
      <p className="status">Status: {status}</p>
      <div className="button-container">
        <button onClick={toggleTaskCompletion} className="button">
          {isCompleted ? "Mark as Pending" : "Mark as Completed"}
        </button>
        <button onClick={nextTask} className="button">Next Task</button>
      </div>
      <FancyText title={false} text={motivationalMessages[currentTaskIndex % motivationalMessages.length]} />
    </div>
  );
};

export default TaskGenerator;