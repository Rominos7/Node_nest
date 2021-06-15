import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('/add_task')
  createNewTask() {
    return this.tasksService.addNewTask();
  }

  @Get('/get_all_tasks')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Put('/modify_task_:id')
  updateTask(@Param('id') id:number) {
    return this.tasksService.updateTask(id);
  }

  @Delete('/delete_task_:id')
  deleteTask(@Param('id') id:number) {
    return this.tasksService.deleteTask(id);
  }
}
