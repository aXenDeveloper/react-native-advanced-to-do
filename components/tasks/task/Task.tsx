import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { TaskCheck, TaskStyle, stylesTask, TaskText } from './taskStyles';
import { TaskType } from './taskTypes';

const Task: FC<TaskType> = ({ children, setTasks, tasks, id }) => {
  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = () => {
    const currentIndex = tasks.findIndex(el => el.id === id);

    if (currentIndex < 0) return;
    setIsCheck(!isCheck);

    const currentTasks = tasks;
    const currentTask = currentTasks[currentIndex];
    currentTask.check = !currentTask.check;

    setTasks(currentTasks);
  };

  const handleDelete = () => {
    const tasksWithoutItem = tasks.filter(el => el.id !== id);
    setTasks(tasksWithoutItem);
  };

  return (
    <TaskStyle>
      <TouchableOpacity onPress={handleCheck} activeOpacity={0.5}>
        <TaskCheck>
          {isCheck && <FontAwesomeIcon icon={faCheck} style={stylesTask.svgCheck} />}
        </TaskCheck>
      </TouchableOpacity>

      <TaskText checked={isCheck}>{children}</TaskText>

      <TouchableOpacity onPress={handleDelete}>
        <FontAwesomeIcon size={25} icon={faTimes} />
      </TouchableOpacity>
    </TaskStyle>
  );
};

export default Task;
