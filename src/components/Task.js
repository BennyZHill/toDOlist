import React, { useState } from 'react';
import TaskForm from './TaskForm';
import {TiBackspaceOutline} from 'react-icons/ti';
import {FiEdit3} from 'react-icons/fi';

const Task = ({ tasks, completeTask, removeTask, updateTask }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTask(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TaskForm edit={edit} onSubmit={submitUpdate} />;
  }

  return tasks.map((task, index) => (
    <div
      className={task.isComplete ? 'task-row complete' : 'task-row'}
      key={index}
    >
      <div key={task.id} onClick={() => completeTask(task.id)}>
        {task.text}
      </div>
      <div className='icons'>
        <TiBackspaceOutline
          onClick={() => removeTask(task.id)}
          className='delete-icon'
        />
        <FiEdit3
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Task;