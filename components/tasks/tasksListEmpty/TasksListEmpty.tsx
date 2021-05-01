import React from 'react';
import { TasksListEmptyStyle, TasksListEmptyTextStyle } from './TasksListEmpty.style';

const TasksListEmpty = () => {
  return (
    <TasksListEmptyStyle>
      <TasksListEmptyTextStyle>You don't have any tasks!</TasksListEmptyTextStyle>
    </TasksListEmptyStyle>
  );
};

export default TasksListEmpty;
