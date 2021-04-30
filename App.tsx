import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Tasks from './components/tasks/Tasks';

const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: #e6e6ec;
  padding-top: ${Platform.OS === 'android' ? '25px' : 0};
`;

const App = () => {
  return (
    <StyledView>
      <Tasks />
      <StatusBar style="auto" />
    </StyledView>
  );
};

export default App;
