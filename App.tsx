import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Tasks from './views/Tasks/Tasks';

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

      <StatusBar style="auto" />
    </StyledView>
  );
};

export default App;
