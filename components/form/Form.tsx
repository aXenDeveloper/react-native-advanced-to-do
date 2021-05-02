import React, { FC, useState } from 'react';
import { Platform, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormStyle, FormTextInput, FormTouchable } from './formStyles';
import { FormType } from './formTypes';

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
        <FontAwesomeIcon icon={faPlus} />
      </FormTouchable>
    </FormStyle>
  );
};

export default Form;
