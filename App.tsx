import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, Platform } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding-top: ${Platform.OS === 'android' ? '25px' : 0};
`;

export default function App() {
  return (
    <StyledView>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </StyledView>
  );
}
