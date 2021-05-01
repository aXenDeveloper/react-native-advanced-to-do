import React, { FC } from 'react';
import { Text, Platform } from 'react-native';
import { FormStyle, FormTextInput, FormTouchable } from './Form.style';
import { FormType } from './Form.type';

const Form: FC<FormType> = ({ taskFormValue, setTaskFormValue, handleSubmit }) => {
  const handleTextInput = (text: string) => {
    setTaskFormValue(text);
  };

  return (
    <FormStyle behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FormTextInput
        placeholder="Write a task"
        onChangeText={handleTextInput}
        value={taskFormValue}
      />

      <FormTouchable onPress={handleSubmit}>
        <Text>+</Text>
      </FormTouchable>
    </FormStyle>
  );
};

export default Form;
