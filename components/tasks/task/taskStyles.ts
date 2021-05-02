import { StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';

export const TaskStyle = styled.View`
  background-color: #fff;
  padding: 15px;
  margin: 10px 20px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const TaskCheck = styled.View`
  width: 24px;
  height: 24px;
  background-color: #c72c20;
  border-radius: 5px;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #fff;
`;

export const TaskText = styled.Text`
  font-family: 'Inter_400Regular';
  ${({ checked }: { checked: boolean }) =>
    checked &&
    css`
      text-decoration: line-through;
    `}

  margin-right: auto;
`;

export const stylesTask = StyleSheet.create({
  svgCheck: {
    color: '#fff'
  }
});
