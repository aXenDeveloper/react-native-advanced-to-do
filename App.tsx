import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Tasks from './components/tasks/Tasks';
import Form from './components/form/Form';

const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: #e6e6ec;
  padding-top: ${Platform.OS === 'android' ? '25px' : 0};
  justify-content: space-between;
`;

const App = () => {
  return (
    <StyledView style={StyleSheet.absoluteFill}>
      <Tasks />

      <Form />

      <StatusBar style="auto" />
    </StyledView>
  );
};

export default App;
