import React, { useState } from 'react';
import { FlatList } from 'react-native';
import Form from '../../components/form/Form';
import Task from '../../components/tasks/task/Task';
import { TitleTasksView } from './Tasks.style';
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import TasksListEmpty from '../../components/tasks/tasksListEmpty/TasksListEmpty';
import { TasksType } from '../../types/views/taskType';

const TasksView = () => {
  const [tasks, setTasks] = useState<TasksType>([]);

  const addTask = (value: string) => {
    setTasks([
      ...tasks,
      {
        id: uuid(),
        value: value,
        check: false
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
            <Task id={itemData.item.id} tasks={tasks} setTasks={setTasks}>
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
