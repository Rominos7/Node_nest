import { HttpException, HttpStatus, Injectable, Param, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Tasks, { TaskStatus } from './tasks.entity';
import { TasksRepostiory } from './tasks.repostiory';
import { ValidateId, RequestIsNotEmpty } from './tasks.validators';

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

  async updateTask(id:ValidateId) {
    let taskToUpdate: RequestIsNotEmpty = await this.tasksRepostiory.findOne(id);
    taskToUpdate.status = TaskStatus.Solved; // here some changes to update. Need to expand this later
    return this.tasksRepostiory.save(taskToUpdate);
  }

  async deleteTask(id:ValidateId) {
    const removeTask: RequestIsNotEmpty = await this.tasksRepostiory.findOne(id);
    return this.tasksRepostiory.delete(removeTask);
  }
}
