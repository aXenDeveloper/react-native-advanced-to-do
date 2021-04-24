import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <StyledView>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </StyledView>
  );
}
