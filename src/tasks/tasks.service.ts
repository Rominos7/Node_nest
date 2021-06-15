import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    console.log('Field added');

    return this.tasksRepostiory.save(newTask);
  }

  async getAllTasks() {
    const allTasks = await this.tasksRepostiory.find();
    console.log('All tasks in DB', allTasks);
    
    return allTasks;
  }

  async updateTask(id:number) {
    let taskToUpdate = await this.tasksRepostiory.findOne(id);
    if (taskToUpdate) {
        taskToUpdate.status = TaskStatus.Solved;
        console.log('Task was updated', taskToUpdate);

        return this.tasksRepostiory.save(taskToUpdate);
    }
    throw new HttpException('ID not found', HttpStatus.NOT_FOUND);
    
  }

  async deleteTask(id:number) {
    const removeTask = await this.tasksRepostiory.findOne(id);
    if (removeTask) {
        console.log('Removed task', removeTask);

        return this.tasksRepostiory.remove(removeTask);
    }
    throw new HttpException('ID not found', HttpStatus.NOT_FOUND);
  }
}
