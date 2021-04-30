import styled from 'styled-components/native';

export const FormStyle = styled.KeyboardAvoidingView`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const FormTextInput = styled.TextInput`
  background-color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  flex: 1;
`;

export const FormTouchable = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;
