import { Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';

import { RequestTasksIDGuard } from './tasks.guard';
import { TasksService } from './tasks.service';
import { TasksIdDto } from './dto/tasks-id.dto';
import { RequestInterseptor,  ResponseInterceptor } from './tasks.interceptor';

@Controller()
@UseInterceptors(RequestInterseptor, ResponseInterceptor)
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
  @UseGuards(RequestTasksIDGuard)
  updateTask(@Param() params: TasksIdDto) {
    return this.tasksService.updateTask(params.id);
  }

  @Delete('/tasks/:id')
  @UseGuards(RequestTasksIDGuard)
  deleteTask(@Param() params: TasksIdDto) {
    return this.tasksService.deleteTask(params.id);
  }
}
