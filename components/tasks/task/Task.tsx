import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TaskCheck, TaskStyle } from './Task.style';

const Task: FC = ({ children }) => {
  return (
    <TaskStyle>
      <TouchableOpacity>
        <TaskCheck></TaskCheck>
      </TouchableOpacity>

      <Text>{children}</Text>
    </TaskStyle>
  );
};

export default Task;
