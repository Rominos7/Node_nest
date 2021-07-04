import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Tasks, { TaskStatus } from './tasks.entity';
import { TasksRepostiory } from './tasks.repostiory';
import { RequestIsNotEmpty } from './tasks.validators';

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

  async getAllTasks() {
    return this.tasksRepostiory.find(); 
  }

  async updateTask(id: number) {
    let taskToUpdate: RequestIsNotEmpty = await this.tasksRepostiory.findOne(id);
    // TODO: For more changes to update need to expand this "line"
    taskToUpdate.status = TaskStatus.Solved;
    return this.tasksRepostiory.save(taskToUpdate);
  }

  async deleteTask(id: number) {
    const removeTask: RequestIsNotEmpty = await this.tasksRepostiory.findOne(id);
    return this.tasksRepostiory.delete(removeTask);
  }
}
