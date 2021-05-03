import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { FC, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
  TaskCheck,
  TaskStyle,
  stylesTask,
  TaskText,
  TaskTextViews,
  TaskDateText
} from './taskStyles';
import { TaskType } from './taskTypes';

const Task: FC<TaskType> = ({ children, setTasks, tasks, id, date }) => {
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

      <TaskTextViews>
        <TaskText checked={isCheck}>{children}</TaskText>

        <TaskDateText>{date}</TaskDateText>
      </TaskTextViews>

      <TouchableOpacity onPress={handleDelete}>
        <FontAwesomeIcon size={25} icon={faTimes} />
      </TouchableOpacity>
    </TaskStyle>
  );
};

export default Task;
