import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Form from '../../components/form/Form';
import Task from '../../components/tasks/task/Task';
import { TitleTasksView } from './tasksStyles';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import TasksListEmpty from '../../components/tasks/tasksListEmpty/TasksListEmpty';
import { TasksType } from './taskTypes';

const TasksView = () => {
  const [tasks, setTasks] = useState<TasksType>([]);

  const addTask = (value: string) => {
    const date = new Date();

    setTasks([
      ...tasks,
      {
        id: uuid(),
        value: value,
        check: false,
        date: `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
      }
    ]);
  };

  return (
    <>
      <TitleTasksView>Tasks</TitleTasksView>

      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          renderItem={itemData => (
            <Task id={itemData.item.id} tasks={tasks} setTasks={setTasks} date={itemData.item.date}>
              {itemData.item.value}
            </Task>
          )}
        />
      ) : (
        <TasksListEmpty />
      )}

      <Form addTask={addTask} />
    </>
  );
};

export default TasksView;
