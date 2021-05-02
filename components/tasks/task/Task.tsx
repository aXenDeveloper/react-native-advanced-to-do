import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { TaskCheck, TaskStyle } from './Task.style';

const Task: FC = ({ children }) => (
  <TaskStyle>
    <TouchableOpacity>
      <TaskCheck></TaskCheck>
    </TouchableOpacity>

    <Text style={{ fontFamily: 'Inter_400Regular' }}>{children}</Text>
  </TaskStyle>
);

export default Task;
