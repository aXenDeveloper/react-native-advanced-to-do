import React from 'react';
import { TasksListEmptyStyle, TasksListEmptyTextStyle } from './TasksListEmpty.style';

const TasksListEmpty = () => (
  <TasksListEmptyStyle>
    <TasksListEmptyTextStyle>You don't have any tasks!</TasksListEmptyTextStyle>
  </TasksListEmptyStyle>
);

export default TasksListEmpty;
