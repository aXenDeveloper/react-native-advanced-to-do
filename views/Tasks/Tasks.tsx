import React from 'react';
import { FlatList } from 'react-native';
import Form from '../../components/form/Form';
import Task from '../../components/task/Task';
import { TitleTasksView } from './Tasks.style';

const data = [
  {
    id: '1',
    text: 'elo'
  },
  {
    id: '2',
    text: 'siema'
  },
  {
    id: '3',
    text: 'siema'
  },
  {
    id: '4',
    text: 'siema'
  },
  {
    id: '5',
    text: 'siema'
  },
  {
    id: '6',
    text: 'siema'
  },
  {
    id: '7',
    text: 'siema'
  },
  {
    id: '8',
    text: 'siema'
  },
  {
    id: '9',
    text: 'siema'
  },
  {
    id: '10',
    text: 'siema'
  },
  {
    id: '11',
    text: 'siema'
  }
];

const Tasks = () => {
  return (
    <>
      <TitleTasksView>Tasks</TitleTasksView>

      <FlatList data={data} renderItem={itemData => <Task>{itemData.item.text}</Task>} />

      <Form />
    </>
  );
};

export default Tasks;
