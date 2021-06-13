import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Tasks, { TaskStatus } from './tasks.entity';
import { TasksRepostiory } from './tasks.repostiory';

type Task = {
  id: number;
  status: string;
  taskName: string;
  startDate: Date;
  finishDate: Date;
};

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepostiory)
    private readonly tasksRepostiory: TasksRepostiory,
  ) {}

  async addNewTask() {
    const newTask = new Tasks();
    newTask.status = TaskStatus.Active;
    newTask.taskName = 'Hold my bear';
    newTask.startDate = new Date();
    newTask.finishDate = new Date();

    return this.tasksRepostiory.save(newTask);
  }
}
