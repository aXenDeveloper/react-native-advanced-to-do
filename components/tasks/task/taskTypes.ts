import { TasksType } from '../../../views/Tasks/taskTypes';

export type TaskType = {
  id: string;
  tasks: TasksType;
  setTasks(el: TasksType): void;
  date: string;
};
