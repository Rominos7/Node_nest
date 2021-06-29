import { Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
// import { TasksGuard } from './tasks.guard'; work with guards
import { TasksService } from './tasks.service';
import { ValidateId } from './tasks.validators';

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
  updateTask(@Param('id') id:ValidateId) {
    return this.tasksService.updateTask(id);
  }

  @Delete('/tasks/:id')
  deleteTask(@Param('id') id:ValidateId) {
    return this.tasksService.deleteTask(id);
  }
}
