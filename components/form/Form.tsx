import React, { FC, useState } from 'react';
import { Text, Platform, Alert } from 'react-native';
import { FormStyle, FormTextInput, FormTouchable } from './Form.style';
import { FormType } from './Form.type';

const Form: FC<FormType> = ({ addTask }) => {
  const [taskFormValue, setTaskFormValue] = useState('');

  const handleTextInput = (text: string) => {
    setTaskFormValue(text);
  };

  const handleSubmit = (value: string) => {
    if (value === '') {
      Alert.alert('Oops something went wrong!', 'You cannot add an empty task.', [{ text: 'OK' }]);
      return;
    }

    addTask(value);
    setTaskFormValue('');
  };

  return (
    <FormStyle behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FormTextInput
        placeholder="Write a task"
        onChangeText={handleTextInput}
        value={taskFormValue}
      />

      <FormTouchable onPress={() => handleSubmit(taskFormValue)}>
        <Text>+</Text>
      </FormTouchable>
    </FormStyle>
  );
};

export default Form;
