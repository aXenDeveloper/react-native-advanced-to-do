import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Tasks from './views/Tasks/Tasks';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

const StyledView = styled.SafeAreaView`
  flex: 1;
  background-color: #e6e6ec;
  padding-top: ${Platform.OS === 'android' ? '25px' : 0};
  justify-content: space-between;
`;

const App = () => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <StyledView>
      <Tasks />

      <StatusBar style="auto" />
    </StyledView>
  );
};

export default App;
