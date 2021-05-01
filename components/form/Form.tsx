import React, { FC, useState } from 'react';
import { Text, Platform } from 'react-native';
import { FormStyle, FormTextInput, FormTouchable } from './Form.style';
import { FormType } from './Form.type';

const Form: FC<FormType> = ({ addTask }) => {
  const [taskFormValue, setTaskFormValue] = useState('');

  const handleTextInput = (text: string) => {
    setTaskFormValue(text);
  };

  const handleSubmit = () => {
    addTask(taskFormValue);
    setTaskFormValue('');
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
