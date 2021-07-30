import React, { useState } from 'react';
import TaskForm from './TaskForm';
import {ImBin} from 'react-icons/im';
import {GiAtom} from 'react-icons/gi';

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
        <ImBin
          onClick={() => removeTask(task.id)}
          className='delete-icon'
        />
        <GiAtom
          onClick={() => setEdit({ id: task.id, value: task.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Task;