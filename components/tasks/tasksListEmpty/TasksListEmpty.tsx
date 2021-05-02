import React from 'react';
import { TasksListEmptyStyle, TasksListEmptyTextStyle } from './tasksListEmptyStyles';

const TasksListEmpty = () => (
  <TasksListEmptyStyle>
    <TasksListEmptyTextStyle>You don't have any tasks!</TasksListEmptyTextStyle>
  </TasksListEmptyStyle>
);

export default TasksListEmpty;
