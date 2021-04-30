import React from 'react';
import { StyleSheet } from 'react-native';
import Task from '../tasks/task/Task';
import { TasksList, TasksStyle, TitleTasks } from './Tasks.style';

const Tasks = () => {
  return (
    <TasksStyle style={StyleSheet.absoluteFill}>
      <TitleTasks>Tasks</TitleTasks>

      <TasksList>
        <Task>Something to do Something to do Something to do Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
        <Task>Something to do</Task>
      </TasksList>
    </TasksStyle>
  );
};

export default Tasks;
