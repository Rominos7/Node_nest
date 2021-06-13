import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/tasks')
  createNewLine() {
    return this.tasksService.addNewTask();
  }
}
