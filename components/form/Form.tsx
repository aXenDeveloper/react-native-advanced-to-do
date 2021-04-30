import React from 'react';
import { Text, Platform } from 'react-native';
import { FormStyle, FormTextInput, FormTouchable } from './Form.style';

const Form = () => {
  return (
    <FormStyle behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <FormTextInput placeholder="Write a task" />

      <FormTouchable onPress={() => console.log('click')}>
        <Text>+</Text>
      </FormTouchable>
    </FormStyle>
  );
};

export default Form;
