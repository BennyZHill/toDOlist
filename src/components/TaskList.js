import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
  };

  const updateTask = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTasks(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTask = id => {
    const removedArr = [...tasks].filter(task => task.id !== id);

    setTasks(removedArr);
  };

  const completeTask = id => {
    let updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TaskForm onSubmit={addTask} />
      <Task
        tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </>
  );
}

export default TaskList;