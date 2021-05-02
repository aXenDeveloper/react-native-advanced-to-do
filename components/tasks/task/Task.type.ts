import { TasksType } from '../../../types/views/taskType';

export type TaskType = {
  id: string;
  tasks: TasksType;
  setTasks(el: TasksType): void;
};
