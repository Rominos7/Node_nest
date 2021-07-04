import { Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';

import { TasksGuard } from './tasks.guard';
import { TasksService } from './tasks.service';
import { TasksIdDto } from './dto/tasks-id.dto';

@UseGuards(TasksGuard)
@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/tasks')
  createNewTask() {
    return this.tasksService.addNewTask();
  }

  @Get('/tasks')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Put('/tasks/:id')
  updateTask(@Param() params: TasksIdDto) {
    return this.tasksService.updateTask(params.id);
  }

  @Delete('/tasks/:id')
  deleteTask(@Param() params: TasksIdDto) {
    return this.tasksService.deleteTask(params.id);
  }
}
